# EmailJS Setup Guide

This guide will help you set up EmailJS to receive email notifications when someone submits the contact form.

## Step 1: Create EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Click **Sign Up** and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. After logging in, go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider:
   - **Gmail** (recommended for personal use)
   - Outlook
   - Yahoo
   - Or use SMTP for custom email
4. For Gmail:
   - Click **Connect Account**
   - Sign in with your Gmail (harshpanchal2904@gmail.com)
   - Allow EmailJS to send emails on your behalf
5. Copy the **Service ID** (e.g., `service_xxxxxxx`)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template content:

**Subject:**
```
New Contact Form Message: {{subject}}
```

**Body:**
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #00BFFF;">New Contact Form Submission</h2>
  
  <div style="background: #f5f5f5; padding: 20px; border-radius: 10px; margin: 20px 0;">
    <p><strong>From:</strong> {{from_name}}</p>
    <p><strong>Email:</strong> {{from_email}}</p>
    <p><strong>Subject:</strong> {{subject}}</p>
  </div>
  
  <div style="background: #fff; padding: 20px; border-left: 4px solid #00BFFF; margin: 20px 0;">
    <h3>Message:</h3>
    <p>{{message}}</p>
  </div>
  
  <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
  
  <p style="color: #666; font-size: 12px;">
    This email was sent from your portfolio contact form.
  </p>
</div>
```

4. Click **Save** and copy the **Template ID** (e.g., `template_xxxxxxx`)

## Step 4: Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `xxxxxxxxxxxxx`)
3. Copy it

## Step 5: Update Contact.jsx

Open `src/components/Contact.jsx` and replace these values in the `handleSubmit` function:

```javascript
await emailjs.send(
  'YOUR_SERVICE_ID',    // Replace with Service ID from Step 2
  'YOUR_TEMPLATE_ID',   // Replace with Template ID from Step 3
  {
    from_name: messageData.name,
    from_email: messageData.email,
    subject: messageData.subject,
    message: messageData.message,
    to_name: 'Harsh Panchal',
    to_email: 'harshpanchal2904@gmail.com'
  },
  'YOUR_PUBLIC_KEY'     // Replace with Public Key from Step 4
)
```

## Step 6: Test the Form

1. Save all changes
2. Run your development server: `npm run dev`
3. Fill out the contact form and submit
4. Check your email (harshpanchal2904@gmail.com) for the notification

## Alternative: Environment Variables (Recommended)

Instead of hardcoding the keys, you can use environment variables:

1. Add to your `.env` file:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

2. Update Contact.jsx to use:
```javascript
await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  // ... message data ...
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)
```

3. Add these to Vercel environment variables for production

## Troubleshooting

- **Emails not arriving?** Check your spam folder
- **403 Error?** Make sure you're using the correct Public Key
- **Template error?** Verify template variable names match exactly
- **Gmail blocking?** You may need to enable "Less secure app access" or use App Passwords

## Free Plan Limits

- 200 emails per month
- Rate limit: 10 emails per hour from same IP

This is perfect for a portfolio contact form!
