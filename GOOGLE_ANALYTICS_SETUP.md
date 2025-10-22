# Google Analytics 4 Setup Guide

## 🎯 Step 1: Create Google Analytics Account

1. **Go to**: https://analytics.google.com/
2. **Sign in** with your Google account
3. **Click**: "Start measuring"
4. **Account name**: "Three Boys Cleaning"
5. **Property name**: "Three Boys Cleaning Website"
6. **Choose**: New Zealand timezone
7. **Industry**: Services
8. **Business size**: Small business

## 🔧 Step 2: Get Tracking Code

1. **Complete** the account setup
2. **Copy** your Measurement ID (looks like: G-XXXXXXXXXX)
3. **We'll add this to your website**

## 📱 Step 3: Add GA4 to Your Website

Once you have your Measurement ID, add this to your `_document.tsx`:

```typescript
{/* Google Analytics 4 */}
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script dangerouslySetInnerHTML={{
  __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `
}} />
```

## 📊 What You'll Track

### Key Metrics:
- **Visitors**: How many people visit your site
- **Page Views**: Which pages are most popular
- **Traffic Sources**: Where visitors come from
- **Conversions**: Phone calls and contact form submissions
- **User Behavior**: How long people stay on your site

### Important Events:
- Phone number clicks
- WhatsApp button clicks
- Contact form submissions
- Service page visits
- Popup interactions

## 🎯 Goals to Set Up

1. **Phone Calls**: Track when users click your phone number
2. **Contact Forms**: Monitor form submissions
3. **WhatsApp**: Track WhatsApp button clicks
4. **Service Pages**: Monitor service interest
5. **Popup Engagement**: Track promotional popup interactions

## ⏰ Data Timeline
- **Setup**: 10-15 minutes
- **First data**: Real-time
- **Full insights**: 24-48 hours

Your website code is already optimized for easy Analytics integration!