# Google Maps API Key Setup Guide - Three Boys Cleaning Limited

## 🗺️ **Fix: "The provided API key is invalid" Error**

This error occurs because we're using a placeholder API key. Here's how to get a real one:

## 🔑 **Step-by-Step Google Maps API Setup**

### **Step 1: Create Google Cloud Project**

1. **Go to Google Cloud Console:**
   - Visit: https://console.cloud.google.com
   - Sign in with your Google account

2. **Create New Project:**
   - Click "Select a project" dropdown
   - Click "New Project"
   - Project name: `Three Boys Cleaning Maps`
   - Click "Create"

### **Step 2: Enable Required APIs**

1. **Go to APIs & Services:**
   - In the left sidebar, click "APIs & Services" → "Library"

2. **Enable These APIs:**
   - Search for "Maps JavaScript API" → Click → Enable
   - Search for "Maps Embed API" → Click → Enable
   - Search for "Places API" → Click → Enable (optional, for future features)

### **Step 3: Create API Key**

1. **Create Credentials:**
   - Go to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "API Key"
   - Copy your API key (save it securely!)

2. **Your API Key Format:**
   ```
   AIzaSyBxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```

### **Step 4: Secure Your API Key (IMPORTANT!)**

1. **Restrict API Key:**
   - Click on your newly created API key
   - Under "Application restrictions":
     - Select "HTTP referrers (web sites)"
     - Add these referrers:
       ```
       https://threeboyscleaning.co.nz/*
       https://www.threeboyscleaning.co.nz/*
       http://localhost:3000/*
       http://localhost:3001/*
       http://localhost:3002/*
       ```

2. **API Restrictions:**
   - Under "API restrictions"
   - Select "Restrict key"
   - Choose:
     - Maps JavaScript API
     - Maps Embed API

### **Step 5: Update Your Website**

**For Development (localhost):**
Update your `.env.local` file:
```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIzaSyBxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

**For Hostinger Static Hosting:**
Since Hostinger uses static hosting, you'll need to update the maps directly in your code.

## 🔧 **Implementation Options**

### **Option 1: Environment Variable (Development)**
Your contact page already supports this - just add the real API key to `.env.local`

### **Option 2: Direct Integration (Hostinger Production)**
For Hostinger static hosting, update the Google Maps iframe directly:

```html
<!-- Replace the current iframe in your contact page -->
<iframe
  src="https://www.google.com/maps/embed/v1/place?key=YOUR_REAL_API_KEY_HERE&q=50+Rogers+Street+Sydenham+Christchurch+8023+New+Zealand&zoom=15&maptype=roadmap"
  width="100%"
  height="100%"
  style="border: 0; border-radius: 12px;"
  allowfullscreen
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
  title="Three Boys Cleaning Limited - 50 Rogers Street, Sydenham, Christchurch"
></iframe>
```

### **Option 3: Embed API URL (Recommended for Static Sites)**
```
https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=50+Rogers+Street,Sydenham,Christchurch+8023,New+Zealand&zoom=15
```

## 💳 **Google Maps Pricing (Don't Worry!)**

**Good News:** Google provides generous free usage:
- **28,000 map loads per month FREE**
- **40,000 directions requests per month FREE**

**For a cleaning business website:**
- You'll likely never exceed the free tier
- Typical usage: 100-500 map loads per month
- Cost if exceeded: $2-7 per 1,000 additional loads

## 🛠️ **Quick Fix Instructions**

### **Immediate Solution:**

1. **Get API Key** (5 minutes):
   - Go to https://console.cloud.google.com
   - Create project → Enable Maps APIs → Create API key

2. **For Development Testing:**
   ```bash
   # Add to your .env.local file:
   echo "NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=YOUR_REAL_API_KEY" >> .env.local
   ```

3. **For Hostinger Deployment:**
   - Replace `YOUR_API_KEY` in the contact page iframe
   - Or use the Google Maps embed URL format

### **Alternative: Simple Google Maps Link**
If you want to avoid API setup temporarily:

```html
<!-- Simple Google Maps link - no API key needed -->
<div style="text-align: center; padding: 2rem;">
  <a 
    href="https://maps.google.com/maps?q=50+Rogers+Street,Sydenham,Christchurch+8023,New+Zealand" 
    target="_blank"
    style="
      background: linear-gradient(135deg, #87CEEB, #4FC3F7);
      color: #1e293b;
      padding: 1rem 2rem;
      border-radius: 8px;
      text-decoration: none;
      font-weight: bold;
      display: inline-block;
    "
  >
    📍 View on Google Maps
  </a>
</div>
```

## 🔒 **Security Best Practices**

1. **Never expose API keys in public code**
2. **Always restrict API keys by domain**
3. **Monitor usage in Google Cloud Console**
4. **Use environment variables for sensitive data**

## 📞 **Need Help?**

**Google Cloud Support:**
- Free tier includes community support
- Documentation: https://developers.google.com/maps/documentation

**Common Issues:**
- **API key not working?** Check if APIs are enabled
- **"Referer not allowed"?** Add your domain to referrer restrictions
- **Billing issues?** Enable billing account (free usage still applies)

## ✅ **Testing Your API Key**

Test your API key with this URL:
```
https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap
```

If it loads without errors, your key is working!

---

**Your Three Boys Cleaning website will have professional Google Maps integration once you complete these steps!** 🗺️✨