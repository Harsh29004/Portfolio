-- Enable the pg_net extension for HTTP requests
create extension if not exists pg_net;

-- Create a function to send email notifications
create or replace function public.send_contact_email()
returns trigger
language plpgsql
security definer
as $$
declare
  email_subject text;
  email_body text;
begin
  -- Create email subject
  email_subject := 'New Contact Form Message: ' || new.subject;
  
  -- Create email body
  email_body := 'You have received a new message from your portfolio contact form:' || chr(10) || chr(10) ||
                'Name: ' || new.name || chr(10) ||
                'Email: ' || new.email || chr(10) ||
                'Subject: ' || new.subject || chr(10) || chr(10) ||
                'Message:' || chr(10) ||
                new.message || chr(10) || chr(10) ||
                'Sent at: ' || new.created_at::text;

  -- Make HTTP request to your backend API to send email
  perform net.http_post(
    url := 'https://your-portfolio-url.vercel.app/api/send-email',
    headers := '{"Content-Type": "application/json"}'::jsonb,
    body := jsonb_build_object(
      'to', 'harshpanchal2904@gmail.com',
      'subject', email_subject,
      'body', email_body,
      'from_name', new.name,
      'from_email', new.email
    )
  );

  return new;
end;
$$;

-- Create trigger to call the function after insert
drop trigger if exists on_contact_message_created on public.contact_messages;

create trigger on_contact_message_created
  after insert on public.contact_messages
  for each row
  execute function public.send_contact_email();
