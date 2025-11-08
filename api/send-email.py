from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import datetime
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os

app = Flask(__name__)
CORS(app)

# Email configuration
SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587
SENDER_EMAIL = os.getenv("SENDER_EMAIL", "harshpanchal2904@gmail.com")
SENDER_PASSWORD = os.getenv("SENDER_PASSWORD", "")  # App password

@app.route('/api/send-email', methods=['POST'])
def send_email():
    try:
        data = request.json
        
        to_email = data.get('to')
        subject = data.get('subject')
        body = data.get('body')
        from_name = data.get('from_name', 'Unknown')
        from_email = data.get('from_email', 'Unknown')
        
        # Create message
        message = MIMEMultipart("alternative")
        message["Subject"] = subject
        message["From"] = SENDER_EMAIL
        message["To"] = to_email
        message["Reply-To"] = from_email
        
        # Create HTML body
        html_body = f"""
        <html>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
              <h2 style="color: #00BFFF; border-bottom: 2px solid #00BFFF; padding-bottom: 10px;">
                New Contact Form Submission
              </h2>
              
              <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
                <p><strong>From:</strong> {from_name}</p>
                <p><strong>Email:</strong> <a href="mailto:{from_email}">{from_email}</a></p>
                <p><strong>Subject:</strong> {data.get('subject', 'No Subject')}</p>
              </div>
              
              <div style="background-color: #fff; padding: 15px; border-left: 4px solid #00BFFF; margin: 20px 0;">
                <h3 style="margin-top: 0; color: #555;">Message:</h3>
                <p style="white-space: pre-wrap;">{body}</p>
              </div>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #888;">
                <p>This email was sent from your portfolio contact form.</p>
                <p>Reply directly to this email to respond to {from_name}.</p>
              </div>
            </div>
          </body>
        </html>
        """
        
        # Create plain text version
        text_body = body
        
        # Attach both versions
        part1 = MIMEText(text_body, "plain")
        part2 = MIMEText(html_body, "html")
        message.attach(part1)
        message.attach(part2)
        
        # Send email
        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
            server.starttls()
            server.login(SENDER_EMAIL, SENDER_PASSWORD)
            server.send_message(message)
        
        return jsonify({'success': True, 'message': 'Email sent successfully'}), 200
        
    except Exception as e:
        print(f"Error sending email: {str(e)}")
        return jsonify({'success': False, 'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5001)
