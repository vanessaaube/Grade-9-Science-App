# Element Quest — Grade 9 Science Quiz with Attempt Tracking

A polished, mobile-friendly Grade 9 Science quiz for GitHub Pages. It includes the names and chemical symbols of the first 30 elements, atomic structure and periodic-table concepts, plus matter, mixtures, physical and chemical properties, changes, solutions, and separation methods.

## Student experience

Before each 10-question quiz, the student:

1. enters **only a first name or nickname**;
2. starts the quiz; and
3. completes a randomized quiz with immediate feedback.

There is one unified **Grade 9 Science Review** quiz. Each round draws from the complete bank of element names/symbols, atomic structure, periodic-table concepts, and matter/mixtures questions.

The result screen shows score and percentage. When tracking is configured, each completed attempt is saved automatically.

## Teacher results

`admin.html` is a separate sign-in-protected dashboard. It includes:

- filters for student, topic, and starting date;
- total attempts, average score, latest score, and number of students;
- summary by student and topic, including attempt count, average, latest score, and latest date;
- commonly missed questions;
- full attempt history with incorrectly answered questions; and
- CSV export of the filtered results.

Administrator data access is protected by Supabase Authentication and database Row Level Security. No password or secret service key is stored in the website.

## Minimal student data

The quiz asks for and stores only a **first name or nickname**. It does not request a surname, email address, student number, device identifier, location, or other student detail. The stored attempt contains the fixed quiz name, server date/time, score, percentage, and questions answered incorrectly.

## Database setup

GitHub Pages is a static host and cannot securely store attempts or protect result data on its own. This version uses Supabase for:

- the `quiz_attempts` database table;
- secure public insert-only access for completed student attempts; and
- teacher email/password authentication with read-only result access.

Follow **`SETUP.md`** from beginning to end. The main steps are:

1. Create a Supabase project.
2. Run `supabase-setup.sql` in the Supabase SQL Editor.
3. Disable public sign-ups and create one teacher account.
4. Add the project URL and anon/public key to `config.js`.
5. Commit all files to the existing GitHub Pages repository.

Do not put a Supabase `service_role` key or teacher password in any website file.

## Files

- `index.html` — student quiz
- `styles.css` — student quiz styles
- `app.js` — question bank, randomized selection, scoring, and attempt submission
- `admin.html` — protected teacher results page
- `admin.css` — teacher dashboard styles
- `admin.js` — authentication, result retrieval, filtering, summaries, and CSV export
- `config.js` — public Supabase project configuration; replace placeholders during setup
- `supabase-setup.sql` — table, validation constraints, indexes, grants, and Row Level Security policies
- `SETUP.md` — detailed GitHub Pages and Supabase instructions

## Question bank

The app contains a 120-prompt bank:

- 30 element name → symbol prompts
- 30 symbol → element name prompts
- 30 atomic structure and periodic-table concept questions
- 30 matter and mixtures questions

Every playthrough randomly selects 10 distinct questions from the complete 120-prompt bank.

## Browser support

Designed for current Safari on iPhone and current Chrome, Edge, and Firefox. The quiz interface remains a plain HTML/CSS/JavaScript site with no build process. An internet connection is required to save attempts and load the teacher dashboard from Supabase.
