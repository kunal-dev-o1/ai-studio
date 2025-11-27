
# Shravan Chauhan - SEO Portfolio

A professional, high-performance portfolio website for SEO Analysts and Digital Marketers. Built with React, Tailwind CSS, and Recharts.

## Features
- **Interactive Dashboards**: Simulated GA4 analytics.
- **SEO Tools**: Keyword cluster generator, audit simulator.
- **CMS System**: Admin panel to manage case studies, blog posts, and leads.
- **Lead Management**: Contact form with validation, email/SMS notifications (simulated/ready-to-deploy).

## Deployment Instructions

### 1. Deploy to Vercel/Netlify
This project is built with Vite/React.
1. Connect your Git repository to Vercel or Netlify.
2. Set the **Build Command** to `npm run build`.
3. Set the **Output Directory** to `dist`.

### 2. Configure Backend Functions (Email/SMS)
Since this is a client-side app, you need serverless functions to send real emails.

#### Example: Netlify Function for Email (`netlify/functions/send-email.js`)
```javascript
const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
    if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method Not Allowed' };

    const data = JSON.parse(event.body);
    
    // Configure SMTP transport
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });

    try {
        await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: process.env.NOTIFICATION_EMAIL,
            subject: `New Lead: ${data.name}`,
            text: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`
        });
        return { statusCode: 200, body: JSON.stringify({ message: "Email Sent" }) };
    } catch (error) {
        return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
    }
};
```

### 3. Environment Variables
In your hosting provider dashboard, add the following variables:
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `NOTIFICATION_EMAIL`
- `TWILIO_SID` (Optional)
- `TWILIO_TOKEN` (Optional)

### 4. Admin Settings
Log in to the `/admin` route on your live site.
- **Test Mode**: Defaults to `true`. Toggle this OFF in the Settings tab to attempt real API calls (requires backend implementation).
- **Leads**: View all form submissions directly in the Admin dashboard.

## Customization
- **Blog Dates**: Update `constants.ts` to change default post dates.
- **Theme**: Edit `tailwind.config` in `index.html` to change the `brand` color palette.
