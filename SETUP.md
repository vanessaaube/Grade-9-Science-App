# Tracking setup for GitHub Pages

The quiz remains a static GitHub Pages site. Attempt tracking uses **Supabase** for the database and administrator sign-in because GitHub Pages cannot securely store data or protect results by itself.

## Privacy design

The student form accepts **only a first name or nickname**. Tell students not to enter a surname, email address, student number, or other personal details. Each completed attempt stores:

- first name or nickname
- fixed quiz name
- server-recorded date and time
- score, total, and percentage
- only the questions answered incorrectly, including the selected and correct answers

The quiz does not request an email, last name, student code, device identifier, IP address, or location. Supabase and the web host may maintain normal infrastructure logs under their own retention policies.

## 1. Create a Supabase project

1. Go to <https://supabase.com> and create a project.
2. Choose a strong database password and save it in a password manager.
3. Wait until the project is ready.

## 2. Create the attempt table and security rules

1. In Supabase, open **SQL Editor**.
2. Create a new query.
3. Paste the full contents of `supabase-setup.sql`.
4. Click **Run**.

The included Row Level Security rules allow the public quiz to **insert** completed attempts but not read them. Only a signed-in administrator can read results. Public visitors cannot update or delete records.

## 3. Create the teacher administrator login

1. Open **Authentication → Providers → Email**.
2. Turn **Allow new users to sign up** off. This prevents visitors from creating accounts.
3. Open **Authentication → Users** and choose **Add user → Create new user**.
4. Enter the teacher/admin email and a strong password.
5. Keep this login private. Do not put the email or password in any website file.

If more than one teacher account is created, every authenticated account can view this quiz's results. Create only accounts that should have access.

## 4. Connect the website

1. Open **Project Settings → API** in Supabase.
2. Copy the **Project URL**.
3. Copy the **anon/public key**. Do **not** use the `service_role` key.
4. Open `config.js` and replace both placeholder values:

```js
window.QUIZ_CONFIG = {
  supabaseUrl: "https://YOUR_PROJECT_ID.supabase.co",
  supabaseAnonKey: "YOUR_SUPABASE_ANON_KEY"
};
```

The anon key is expected to be visible in a browser application. The included Row Level Security policies—not key secrecy—protect the result data. Never place a service-role key or admin password in `config.js`.

## 5. Publish to the existing GitHub Pages site

Copy these files into the same folder as the current quiz and commit/push them:

- `index.html`
- `styles.css`
- `app.js`
- `config.js`
- `admin.html`
- `admin.css`
- `admin.js`
- `supabase-setup.sql` (may remain in the repository; it contains no secret)
- `README.md` and `SETUP.md`

GitHub Pages will redeploy automatically. The student quiz remains at the existing `index.html` URL. Teacher results are at the same path ending in `/admin.html`.

## 6. Test before student use

1. Open the student quiz, enter a test nickname, and complete a quiz.
2. Confirm the result screen says the attempt was saved.
3. Open `admin.html` and sign in with the Supabase admin account.
4. Confirm that the test attempt appears in history and the summary updates.
5. Test in a private/incognito window: `admin.html` must require sign-in, and the Supabase table must not be readable without it.
6. Delete test rows in the Supabase Table Editor if desired.

## Data retention and deletion

Set a school-appropriate retention period. To remove an attempt, use the Supabase Table Editor while signed in to Supabase. To clear old records in SQL Editor, for example:

```sql
delete from public.quiz_attempts
where created_at < now() - interval '1 year';
```

The website intentionally does not expose deletion controls to the browser admin account, reducing the risk of accidental deletion.

## Troubleshooting

- **“Tracking is not configured yet”**: one or both values in `config.js` are still placeholders.
- **Attempt could not be saved**: verify the URL/key, run `supabase-setup.sql`, and check the browser network request to `/rest/v1/quiz_attempts`.
- **Admin sign-in fails**: verify the account under Authentication → Users and use that account's email/password.
- **Admin loads no attempts**: confirm the authenticated-read policy exists and that student attempts actually saved.
- **GitHub Pages shows old files**: allow a minute for deployment, then reload without cache.
