# Supabase Setup Guide for Contact Form

## Step 1: Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com) and sign up/login
2. Click "New Project"
3. Fill in:
   - **Project Name**: Portfolio Contact Form
   - **Database Password**: (create a strong password)
   - **Region**: Choose closest to your location
4. Click "Create new project" and wait for setup to complete

## Step 2: Create the Contact Messages Table

1. In your Supabase project dashboard, go to **Table Editor**
2. Click **"New Table"**
3. Configure the table:
   - **Name**: `contact_messages`
   - **Enable Row Level Security (RLS)**: Check this box

4. Add the following columns:

| Column Name | Type      | Default Value            | Primary | Nullable |
|-------------|-----------|--------------------------|---------|----------|
| id          | int8      | auto-increment           | ✓       | No       |
| name        | text      | -                        |         | No       |
| email       | text      | -                        |         | No       |
| subject     | text      | -                        |         | Yes      |
| message     | text      | -                        |         | No       |
| created_at  | timestamp | now()                    |         | No       |

5. Click **Save** to create the table

## Step 3: Set Up Row Level Security (RLS) Policies

1. Go to **Authentication** → **Policies**
2. Find your `contact_messages` table
3. Click **"New Policy"**
4. Create an INSERT policy:
   - **Policy Name**: "Allow anonymous inserts"
   - **Allowed operation**: INSERT
   - **Target roles**: anon
   - **USING expression**: `true`
   - **WITH CHECK expression**: `true`

5. Click **Save**

## Step 4: Get Your API Credentials

1. Go to **Settings** → **API**
2. Copy these values:
   - **Project URL** (under "Project URL")
   - **anon public** key (under "Project API keys")

## Step 5: Update Your .env File

Replace the placeholders in your `.env` file:

```env
VITE_SUPABASE_URL = "YOUR_PROJECT_URL"
VITE_SUPABASE_ANON_KEY = "YOUR_ANON_KEY"
```

## Step 6: Test the Integration

1. Restart your development server: `npm run dev`
2. Go to your contact form
3. Fill out and submit a test message
4. Check your Supabase dashboard → **Table Editor** → `contact_messages` to see the new entry

## Step 7: Deploy to Vercel

1. In your Vercel dashboard, go to **Settings** → **Environment Variables**
2. Add:
   - `VITE_SUPABASE_URL` = your project URL
   - `VITE_SUPABASE_ANON_KEY` = your anon key
3. Redeploy your site

## Viewing Messages

To view messages sent through your contact form:
1. Go to your Supabase dashboard
2. Navigate to **Table Editor**
3. Click on `contact_messages` table
4. You'll see all submitted messages with timestamps

## Optional: Set Up Email Notifications

You can set up Supabase Edge Functions to send you an email whenever someone submits the form. Check Supabase documentation for more details.

---

✅ Your contact form is now connected to Supabase database!
