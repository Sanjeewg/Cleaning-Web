# Hostinger Contact Form Setup Guide

## 🚀 **Contact Form Solutions for Hostinger**

Since Hostinger uses static hosting, your current API-based contact form won't work. Here are the best alternatives:

### **Option 1: Formspree (Recommended) - FREE**

**Step 1: Sign up at Formspree**
1. Go to https://formspree.io
2. Sign up with your email
3. Create a new form
4. Get your form endpoint URL

**Step 2: Update Contact Forms**
Replace your current form submissions with Formspree integration.

**Benefits:**
- ✅ Free for up to 50 submissions/month
- ✅ Spam protection included  
- ✅ Email notifications to your business email
- ✅ Works perfectly with static hosting
- ✅ Professional and reliable

### **Option 2: Netlify Forms (If you switch hosting)**
- Free with Netlify hosting
- Built-in spam protection
- Form handling without JavaScript

### **Option 3: EmailJS - Client-side Email**
- Send emails directly from browser
- Works with Gmail, Outlook, etc.
- More complex setup but flexible

## 🔧 **Formspree Implementation**

**Your Formspree Integration:**
```html
<!-- Replace your existing form action with this -->
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <input type="hidden" name="_subject" value="New Contact - Three Boys Cleaning" />
  <input type="hidden" name="_next" value="https://threeboyscleaning.co.nz/thank-you" />
  
  <!-- Your existing form fields work as-is -->
  <input type="text" name="name" required />
  <input type="email" name="email" required />
  <input type="tel" name="phone" required />
  <textarea name="message"></textarea>
  
  <button type="submit">Send Message</button>
</form>
```

**Advanced Features:**
```html
<!-- Add these hidden fields for better functionality -->
<input type="hidden" name="_cc" value="backup@threeboyscleaning.co.nz" />
<input type="hidden" name="_format" value="plain" />
<input type="hidden" name="_template" value="box" />
```

## 📧 **Email Configuration**

**Hostinger Business Email Setup:**
1. **Create Email Accounts:**
   - `info@threeboyscleaning.co.nz` (main contact)
   - `bookings@threeboyscleaning.co.nz` (bookings)
   - `admin@threeboyscleaning.co.nz` (admin)

2. **Email Client Setup:**
   ```
   IMAP Settings:
   - Server: imap.hostinger.com
   - Port: 993
   - Security: SSL/TLS
   - Username: your-email@domain.com
   - Password: your-email-password

   SMTP Settings:
   - Server: smtp.hostinger.com  
   - Port: 465
   - Security: SSL/TLS
   - Username: your-email@domain.com
   - Password: your-email-password
   ```

## 🎯 **Implementation Priority**

**Immediate Actions:**
1. ✅ Sign up for Formspree (free)
2. ✅ Create form endpoint
3. ✅ Update contact forms to use Formspree
4. ✅ Set up business email accounts
5. ✅ Test all contact forms

**Optional Enhancements:**
- Create thank-you page
- Add auto-responder emails
- Set up email forwarding rules
- Configure spam filters

## 💡 **Pro Tips for Hostinger**

**Performance:**
- Use Hostinger's LiteSpeed Cache
- Enable CloudFlare if available
- Optimize images before upload
- Use .htaccess for caching

**Security:**
- Upload .htaccess file for security headers
- Use strong passwords for email accounts
- Enable 2FA on Hostinger account
- Regular backups (Hostinger provides daily backups)

**SEO:**
- Submit sitemap to Google Search Console
- Set up Google Analytics
- Use Hostinger's SEO tools
- Create robots.txt file

Your cleaning business will have professional contact forms and email setup with Hostinger! 🚀