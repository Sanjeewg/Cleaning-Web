# Hostinger Deployment Guide for Three Boys Cleaning Limited

## 🚀 **Hostinger Hosting Setup Guide**

### 📋 **Prerequisites**
- Hostinger hosting account (Premium or Business plan recommended)
- Domain name (suggest: threeboyscleaning.co.nz or .com)
- Your Next.js project ready for deployment
- FTP client (FileZilla recommended)

## 🎯 **Step-by-Step Deployment Process**

### **Step 1: Choose Hostinger Plan**
**Recommended Plans:**
- **Premium Web Hosting** ($2.99/month) - Good for starting
- **Business Web Hosting** ($3.99/month) - **RECOMMENDED** 
  - Free domain for 1 year
  - Free SSL certificate
  - Daily backups
  - 2x processing power

### **Step 2: Domain Setup**
1. **Register Domain:**
   - threeboyscleaning.co.nz (New Zealand)
   - threeboyscleaning.com (International)
   - Connect domain to Hostinger

2. **DNS Configuration:**
   ```
   A Record: @ → Your Hostinger IP
   CNAME: www → yourdomain.com
   ```

### **Step 3: SSL Certificate Setup**
1. Go to Hostinger Control Panel
2. Navigate to **Security → SSL**
3. Enable **Free Let's Encrypt SSL**
4. Force HTTPS redirects

### **Step 4: Build Your Next.js Project**

1. **Update your project for static export:**

Create/Update `next.config.js`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for Hostinger
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: [
      'images.unsplash.com',
      'maps.googleapis.com',
      'maps.gstatic.com'
    ]
  },
  
  // Security Headers (will work with static hosting)
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig
```

2. **Build the project:**
```bash
cd "C:\Users\Udaya\Desktop\cle next"
npm run build
```

This creates an `out` folder with static files.

### **Step 5: Upload Files to Hostinger**

**Option A: Using Hostinger File Manager (Recommended)**
1. Login to Hostinger Control Panel
2. Go to **Files → File Manager**
3. Navigate to `public_html` folder
4. Delete default `index.html`
5. Upload entire `out` folder contents to `public_html`

**Option B: Using FTP (FileZilla)**
1. Download FileZilla
2. FTP Details from Hostinger:
   - Host: your-domain.com
   - Username: from Hostinger panel
   - Password: from Hostinger panel
   - Port: 21
3. Upload `out` folder contents to `public_html`

### **Step 6: Environment Variables for Hostinger**

**Create `.htaccess` file in public_html:**
```apache
# Force HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Security Headers
<IfModule mod_headers.c>
    Header always set X-Frame-Options "DENY"
    Header always set X-Content-Type-Options "nosniff"
    Header always set Referrer-Policy "strict-origin-when-cross-origin"
    Header always set X-XSS-Protection "1; mode=block"
</IfModule>

# Cache Control
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "access plus 1 month"
    ExpiresByType image/jpeg "access plus 1 month"
    ExpiresByType image/gif "access plus 1 month"
    ExpiresByType image/png "access plus 1 month"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/pdf "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType application/x-javascript "access plus 1 month"
    ExpiresByType application/x-shockwave-flash "access plus 1 month"
    ExpiresByType image/x-icon "access plus 1 year"
</IfModule>

# Gzip Compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>
```

### **Step 7: Google Maps API Setup**

1. **Get Google Maps API Key:**
   - Go to [Google Cloud Console](https://console.cloud.google.com)
   - Create new project: "Three Boys Cleaning Maps"
   - Enable Maps JavaScript API & Maps Embed API
   - Create API key
   - Add domain restrictions: `yourdomain.com/*`

2. **Update your environment variables:**
   Since Hostinger uses static hosting, update the Google Maps iframe directly in your contact page with the real API key.

### **Step 8: Business Email Setup**

**Hostinger Email Setup:**
1. Go to **Emails** in Hostinger panel
2. Create email accounts:
   - `info@threeboyscleaning.co.nz`
   - `bookings@threeboyscleaning.co.nz`
   - `admin@threeboyscleaning.co.nz`

3. **Email Settings:**
   - IMAP Server: `imap.hostinger.com`
   - SMTP Server: `smtp.hostinger.com`
   - Port: 993 (IMAP), 465 (SMTP)
   - Encryption: SSL/TLS

### **Step 9: Contact Form Integration**

Since Hostinger static hosting doesn't support Node.js APIs, you have several options:

**Option A: Use Formspree (Recommended)**
```html
<!-- Replace your contact form action -->
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <!-- Your existing form fields -->
</form>
```

**Option B: Use Hostinger's Contact Form Builder**
1. Go to **Website → Builder**
2. Add contact form widget
3. Configure to send to `Threeboyscleaning@gmail.com`

**Option C: Use Netlify Forms (if you switch to Netlify)**

### **Step 10: Performance Optimization**

**Image Optimization:**
```bash
# Install image optimization tools
npm install sharp
npm install next-optimized-images
```

**Hostinger Performance Features:**
- Enable **LiteSpeed Cache**
- Use **CloudFlare CDN** (available in Business plan)
- Enable **Browser Caching**

## 🔧 **Hostinger-Specific Configuration**

### **Update package.json:**
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "export": "next build && next export",
    "deploy": "npm run export"
  }
}
```

### **Deployment Script:**
Create `deploy.bat` for easy deployment:
```batch
@echo off
echo Building Next.js project...
npm run build
echo Build complete!
echo Upload the 'out' folder contents to your Hostinger public_html directory
pause
```

## 📊 **Hostinger Advantages for Your Business**

### ✅ **Benefits:**
- **Affordable**: Starting at $2.99/month
- **Free SSL**: Automatic Let's Encrypt certificates
- **Free Domain**: With annual plans
- **24/7 Support**: Live chat and email
- **99.9% Uptime**: Reliable hosting
- **Daily Backups**: Automatic backups
- **Email Hosting**: Professional email accounts

### 💡 **Perfect for Cleaning Business:**
- **Fast Loading**: Important for mobile users
- **Professional Email**: `info@threeboyscleaning.co.nz`
- **Easy Management**: User-friendly control panel
- **Scalable**: Can upgrade as business grows

## 🚀 **Go-Live Checklist**

### **Pre-Launch:**
- [ ] Domain connected and DNS propagated
- [ ] SSL certificate active (https://)
- [ ] All pages loading correctly
- [ ] Contact forms working
- [ ] Google Maps displaying correctly
- [ ] Mobile responsiveness verified
- [ ] Business email accounts created

### **Post-Launch:**
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics
- [ ] Test contact forms
- [ ] Check all internal links
- [ ] Verify business information accuracy
- [ ] Set up regular backups

## 💰 **Cost Breakdown (Annual)**

**Hostinger Business Plan:**
- Hosting: $47.88/year (Business plan)
- Domain: Free (first year)
- SSL: Free (included)
- Email: Included
- **Total Year 1: ~$48**

**Additional Services (Optional):**
- Google Workspace: $72/year
- Premium Support: $24/year
- **Total with extras: ~$144/year**

## 📞 **Support Resources**

**Hostinger Support:**
- Live Chat: 24/7 available
- Knowledge Base: help.hostinger.com
- Community Forum: community.hostinger.com

**Technical Support:**
- WordPress/Website issues
- Email configuration
- SSL certificate problems
- Domain management

Your Three Boys Cleaning Limited website will be perfectly hosted on Hostinger with professional performance and reliability! 🚀