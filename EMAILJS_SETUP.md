# EmailJS Setup Guide for Contact Form

## 1. Install EmailJS Package
```bash
npm install @emailjs/browser
```

## 2. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 3. Setup Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions for your email provider
5. Note down your **Service ID**

## 4. Create Email Template
1. Go to "Email Templates" in EmailJS dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact Form Message from {{from_name}}

**Content:**
```
Hello Sourabh,

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio website.
```

4. Save the template and note down your **Template ID**

## 5. Get Public Key
1. Go to "Account" > "General" in EmailJS dashboard
2. Find your **Public Key** (User ID)

## 6. Update Contact.js
Replace these values in `src/components/Contact.js`:

```javascript
const serviceId = 'YOUR_SERVICE_ID';     // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID';   // Replace with your Template ID  
const publicKey = 'YOUR_PUBLIC_KEY';     // Replace with your Public Key
```

## 7. Test the Contact Form
1. Start your development server: `npm start`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email (sourabhmp49@gmail.com) for the message

## Security Notes
- EmailJS free plan allows 200 emails/month
- Public key is safe to expose in frontend code
- Consider adding reCAPTCHA for production use
- Monitor usage in EmailJS dashboard

## Troubleshooting
- Check browser console for errors
- Verify all IDs are correct
- Ensure email service is properly connected
- Check EmailJS dashboard for delivery status