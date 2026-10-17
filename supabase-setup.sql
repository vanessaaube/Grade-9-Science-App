-- Element Quest attempt-tracking database setup
-- Run this entire file in the Supabase SQL Editor.

create extension if not exists pgcrypto;

create table if not exists public.quiz_attempts (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  student_name text not null check (
    char_length(trim(student_name)) between 1 and 40
    and student_name ~ '^[[:alpha:][:space:]''’.-]+$'
  ),
  quiz_topic text not null check (char_length(quiz_topic) between 1 and 80),
  topic_key text not null check (topic_key in ('mixed', 'symbols', 'atomic', 'matter')),
  score smallint not null check (score >= 0),
  total_questions smallint not null check (total_questions between 1 and 100),
  percentage smallint not null check (percentage between 0 and 100),
  incorrect_questions jsonb not null default '[]'::jsonb,
  app_version text not null default '2.0',
  constraint score_not_above_total check (score <= total_questions),
  constraint incorrect_questions_is_array check (jsonb_typeof(incorrect_questions) = 'array')
);

create index if not exists quiz_attempts_created_at_idx on public.quiz_attempts (created_at desc);
create index if not exists quiz_attempts_student_topic_idx on public.quiz_attempts (lower(student_name), topic_key);

alter table public.quiz_attempts enable row level security;

-- Reset only the policies managed by this setup file so it is safe to re-run.
drop policy if exists "Public can submit quiz attempts" on public.quiz_attempts;
drop policy if exists "Authenticated teachers can read attempts" on public.quiz_attempts;

-- The public quiz can create a completed-attempt row, but cannot read any rows.
create policy "Public can submit quiz attempts"
on public.quiz_attempts
for insert
to anon
with check (
  char_length(trim(student_name)) between 1 and 40
  and student_name ~ '^[[:alpha:][:space:]''’.-]+$'
  and topic_key in ('mixed', 'symbols', 'atomic', 'matter')
  and total_questions = 10
  and score between 0 and total_questions
  and percentage between 0 and 100
  and jsonb_typeof(incorrect_questions) = 'array'
);

-- Only a signed-in Supabase user can view results.
create policy "Authenticated teachers can read attempts"
on public.quiz_attempts
for select
to authenticated
using (true);

-- Explicit grants: anonymous visitors may insert only; authenticated users may read only.
revoke all on table public.quiz_attempts from anon, authenticated;
grant insert on table public.quiz_attempts to anon;
grant select on table public.quiz_attempts to authenticated;

comment on table public.quiz_attempts is 'Completed Grade 9 Science quiz attempts. Stores only a first name or nickname supplied by the student.';
