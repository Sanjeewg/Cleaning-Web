# 🧹 Three Boys Cleaning Service - Next.js Website

A modern, professional cleaning service website built with Next.js 15, TypeScript, and Tailwind CSS. This website showcases comprehensive cleaning services with a beautiful, responsive design and user-friendly interface.

## 🚀 Live Features

- **Responsive Design**: Mobile-first approach with perfect display on all devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **SEO Optimized**: Built-in Next.js SEO optimization
- **Fast Performance**: Optimized images and efficient code structure
- **Legal Compliance**: Complete Privacy Policy and Terms of Service pages

---

## 📁 Project Structure

```
cle next/
├── 📁 .github/                    # GitHub specific files
│   └── copilot-instructions.md    # GitHub Copilot configuration
├── 📁 .next/                      # Next.js build output (auto-generated)
├── 📁 .vscode/                    # VS Code configuration
│   └── tasks.json                 # VS Code tasks configuration
├── 📁 node_modules/               # Dependencies (auto-generated)
├── 📁 pages/                      # Next.js Pages Router
│   ├── 📁 about/                  # About Us page
│   │   └── index.tsx             # About page component
│   ├── 📁 contact/                # Contact page
│   │   └── index.tsx             # Contact form and information
│   ├── 📁 faq/                    # Frequently Asked Questions
│   │   └── index.tsx             # FAQ page with accordion
│   ├── 📁 gallery/                # Service gallery
│   │   └── index.tsx             # Photo gallery showcase
│   ├── 📁 privacy-policy/         # Privacy Policy page
│   │   └── index.tsx             # GDPR compliant privacy policy
│   ├── 📁 services/               # Services page
│   │   └── index.tsx             # Detailed service offerings
│   ├── 📁 terms-of-service/       # Terms of Service page
│   │   └── index.tsx             # Legal terms and conditions
│   ├── _app.tsx                  # Next.js App component
│   ├── _document.tsx             # Next.js Document component
│   └── index.tsx                 # Homepage (root page)
├── 📁 public/                     # Static assets
│   └── 📁 images/                # Image assets
│       ├── 1.jpg                 # Main background image
│       └── LogoCleaning.png      # Company logo
├── 📁 src/                        # Source code
│   ├── 📁 assets/                # Asset files
│   │   └── 📁 icons/             # Custom icon components
│   │       ├── Close.tsx         # Close icon component
│   │       ├── Menu.tsx          # Menu icon component
│   │       └── index.ts          # Icons barrel export
│   └── 📁 components/            # Reusable React components
│       ├── 📁 layout/            # Layout components
│       │   ├── Footer.tsx        # Site footer with links
│       │   ├── Hero.tsx          # Homepage hero section
│       │   ├── Navbar.tsx        # Navigation header
│       │   └── index.ts          # Layout barrel export
│       ├── 📁 ui/                # UI components
│       │   ├── Button.tsx        # Reusable button component
│       │   └── index.ts          # UI barrel export
│       └── index.ts              # Components barrel export
├── 📁 styles/                     # Global styles
│   └── globals.css               # Global CSS with Tailwind
├── .eslintrc.json                # ESLint configuration
├── .gitignore                    # Git ignore rules
├── .prettierignore               # Prettier ignore rules
├── .prettierrc                   # Prettier formatting config
├── next-env.d.ts                 # Next.js TypeScript declarations
├── next.config.mjs               # Next.js configuration
├── package.json                  # Dependencies and scripts
├── package-lock.json             # Locked dependency versions
├── postcss.config.js             # PostCSS configuration
├── README.md                     # Project documentation
├── tailwind.config.ts            # Tailwind CSS configuration
└── tsconfig.json                 # TypeScript configuration
```

---

## 📄 Page Structure & Routes

### 🏠 Main Pages
| Route | File Location | Description |
|-------|---------------|-------------|
| `/` | `pages/index.tsx` | Homepage with hero section and overview |
| `/about` | `pages/about/index.tsx` | Company story and team information |
| `/services` | `pages/services/index.tsx` | Detailed service offerings |
| `/gallery` | `pages/gallery/index.tsx` | Photo showcase of cleaning work |
| `/contact` | `pages/contact/index.tsx` | Contact form and business information |
| `/faq` | `pages/faq/index.tsx` | Frequently asked questions |

### � Legal Pages
| Route | File Location | Description |
|-------|---------------|-------------|
| `/privacy-policy` | `pages/privacy-policy/index.tsx` | GDPR compliant privacy policy |
| `/terms-of-service` | `pages/terms-of-service/index.tsx` | Legal terms and conditions |

---

## 🧩 Component Architecture

### 📱 Layout Components (`src/components/layout/`)
- **`Navbar.tsx`**: Responsive navigation header with mobile menu
- **`Footer.tsx`**: Site footer with contact info and legal links
- **`Hero.tsx`**: Homepage hero section with call-to-action

### 🎨 UI Components (`src/components/ui/`)
- **`Button.tsx`**: Reusable button component with variants

### 🎯 Icons (`src/assets/icons/`)
- **`Menu.tsx`**: Hamburger menu icon for mobile navigation
- **`Close.tsx`**: Close icon for mobile menu

---

## 🎨 Styling System

### 🌈 Tailwind CSS Configuration
- **File**: `tailwind.config.ts`
- **Approach**: Utility-first CSS framework
- **Responsive**: Mobile-first responsive design
- **Colors**: Sky-blue gradient brand theme

### 🎭 Global Styles
- **File**: `styles/globals.css`
- **Features**: 
  - Tailwind CSS imports
  - Custom component classes
  - Hero section styling
  - Privacy policy page styling
  - Navbar effects and animations

---

## ⚙️ Configuration Files

### 🔧 Next.js Configuration
- **`next.config.mjs`**: Next.js build and runtime configuration
- **`next-env.d.ts`**: TypeScript declarations for Next.js

### 📝 TypeScript Configuration  
- **`tsconfig.json`**: TypeScript compiler options and paths

### 🎨 Styling Configuration
- **`tailwind.config.ts`**: Tailwind CSS customization and theme
- **`postcss.config.js`**: PostCSS plugins for CSS processing

### 🧹 Code Quality
- **`.eslintrc.json`**: ESLint rules for code linting
- **`.prettierrc`**: Code formatting configuration
- **`.prettierignore`**: Files to ignore during formatting

### 📦 Package Management
- **`package.json`**: Dependencies, scripts, and project metadata
- **`package-lock.json`**: Locked dependency versions for reproducible builds

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation
```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd "cle next"

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
```

---

## 🌟 Key Features

### 📱 Responsive Design
- **Mobile-First**: Optimized for all screen sizes
- **Touch-Friendly**: Easy navigation on mobile devices
- **Fast Loading**: Optimized images and efficient code

### 🎨 Modern UI/UX
- **Clean Design**: Professional and trustworthy appearance
- **Smooth Animations**: Hover effects and transitions
- **Intuitive Navigation**: Easy-to-use menu structure

### 🔒 Legal Compliance
- **Privacy Policy**: GDPR/CCPA compliant privacy protection
- **Terms of Service**: Comprehensive legal terms
- **Professional Structure**: Business-ready legal documents

### 🧹 Business Features
- **Service Showcase**: Detailed cleaning service information
- **Contact System**: Easy contact form and business details
- **Gallery**: Visual portfolio of cleaning work
- **FAQ Section**: Common questions and answers

---

## 🛠️ Technology Stack

### Core Framework
- **Next.js 15**: React framework for production
- **React 18**: Modern React with concurrent features
- **TypeScript**: Type-safe JavaScript development

### Styling & UI
- **Tailwind CSS 3**: Utility-first CSS framework
- **PostCSS**: CSS processing and optimization
- **Responsive Design**: Mobile-first approach

### Development Tools
- **ESLint**: Code linting and quality
- **Prettier**: Code formatting
- **VS Code**: Optimized development environment

---

## 📞 Business Information

### 📱 Call Us
**022 058 5306**

Available for calls and quotes

Quick response guaranteed

### ✉️ Email Us
**info@threeboyscleaning.com**

Send detailed requests

We respond within 24 hours

### 📍 Visit Us
**50 Rogers Street, Sydenham, Christchurch 8023, New Zealand**

Main office location

By appointment only center

---

## 📄 License

This project is proprietary software for Three Boys Cleaning Service. All rights reserved.

---

## 🤝 Contributing

This is a private business website. For any updates or modifications, please contact the development team.

---

## 🌐 Hosting & Deployment Options

### 🚀 Recommended Hosting Platforms

#### 1. **Vercel** (Best for Next.js) ⭐ RECOMMENDED
- **Perfect for Next.js**: Built by the creators of Next.js
- **Free Tier**: Generous free plan for small businesses
- **Features**: Automatic deployments, global CDN, analytics
- **Cost**: Free for hobby, $20/month for Pro
- **Domain**: Custom domain supported

**Quick Deploy:**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project root
vercel

# Follow the prompts to deploy
```

#### 2. **Netlify** (Easy & User-Friendly)
- **Great for Static Sites**: Excellent Next.js support
- **Free Tier**: 100GB bandwidth, 300 build minutes
- **Features**: Form handling, edge functions, analytics
- **Cost**: Free for personal, $19/month for Pro
- **Domain**: Free SSL, custom domains

**Quick Deploy:**
```bash
# Build the project
npm run build

# Deploy build folder to Netlify
# Or connect GitHub repository for auto-deploy
```

#### 3. **AWS Amplify** (Scalable Enterprise)
- **AWS Integration**: Full AWS ecosystem access
- **Features**: Global CDN, custom domains, SSL
- **Cost**: Pay-as-you-go, ~$15-50/month for business
- **Scalability**: Enterprise-level scaling

#### 4. **Namecheap Shared Hosting** (Traditional Web Hosting)
- **Affordable**: Starting at $2.88/month with domain
- **Features**: cPanel, SSL, email accounts, FTP access
- **Good for**: Traditional hosting with full control
- **Includes**: Domain registration + hosting bundle

#### 5. **GitHub Pages** (Free Option)
- **Completely Free**: Perfect for small businesses
- **Limitations**: Static export only, no server functions
- **Good for**: Simple websites without complex features

### � Step-by-Step Deployment Guide

#### 🌟 Option 1: Deploy to Vercel (RECOMMENDED)

1. **Prepare Your Code:**
```bash
# Ensure your code is in a Git repository
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. **Deploy via Vercel Dashboard:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub account
   - Click "New Project"
   - Import your repository
   - Vercel auto-detects Next.js settings
   - Click "Deploy"

3. **Custom Domain Setup:**
   - In Vercel dashboard, go to your project
   - Click "Domains" tab
   - Add your custom domain (e.g., `threeboyscleaning.com`)
   - Update DNS records as instructed

#### 🌟 Option 2: Deploy to Netlify

1. **Build Settings:**
```bash
# Add to package.json scripts
"scripts": {
  "build": "next build",
  "export": "next export",
  "deploy": "npm run build && npm run export"
}
```

2. **Deploy Process:**
   - Go to [netlify.com](https://netlify.com)
   - Connect GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `out`
   - Deploy site

#### 🌟 Option 3: Deploy to Namecheap Hosting

**Step 1: Purchase Namecheap Hosting + Domain**
1. Go to [namecheap.com](https://namecheap.com)
2. Search for your domain (e.g., `threeboyscleaning.com`)
3. Add "Stellar Shared Hosting" to cart
4. Complete purchase (~$3-5/month with domain)

**Step 2: Prepare Your Next.js Site for Static Export**

Add to your `next.config.mjs`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

export default nextConfig
```

Add export script to `package.json`:
```json
{
  "scripts": {
    "build": "next build",
    "export": "next build && next export",
    "deploy": "npm run export"
  }
}
```

**Step 3: Build and Export Your Site**
```bash
# Navigate to your project
cd "cle next"

# Install dependencies
npm install

# Build and export static site
npm run export
```

**Step 4: Upload to Namecheap**
1. **Access cPanel**:
   - Go to your Namecheap account
   - Click "Manage" next to your hosting
   - Open cPanel

2. **Upload Files**:
   - Open "File Manager" in cPanel
   - Navigate to `public_html` folder
   - Delete default files (index.html, etc.)
   - Upload all files from your `out` folder
   - Extract if uploaded as ZIP

3. **Set Permissions**:
   - Select all files
   - Right-click → Permissions
   - Set to 644 for files, 755 for folders

**Step 5: Configure Domain & SSL**
1. **Domain Setup** (if not automatic):
   - In cPanel, go to "Subdomains"
   - Ensure www redirects to main domain

2. **Enable SSL**:
   - In cPanel, find "SSL/TLS"
   - Enable "Let's Encrypt SSL"
   - Force HTTPS redirect

#### 🌟 Option 4: Manual VPS Deployment

For full control, deploy on a VPS (DigitalOcean, Linode, AWS EC2):

```bash
# On your server
# Install Node.js and PM2
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
npm install -g pm2

# Clone your repository
git clone <your-repo-url>
cd "cle next"

# Install dependencies
npm install

# Build the project
npm run build

# Start with PM2
pm2 start npm --name "cleaning-website" -- start
pm2 startup
pm2 save
```

### 🔧 Pre-Deployment Checklist

#### ✅ Before You Deploy:

1. **Environment Setup:**
```bash
# Create .env.local file (if needed)
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_CONTACT_EMAIL=info@threeboyscleaning.com
```

2. **Performance Optimization:**
```bash
# Run build to check for errors
npm run build

# Test production build locally
npm run start
```

3. **SEO & Meta Tags:**
   - Update `pages/_document.tsx` with proper meta tags
   - Add Google Analytics (if needed)
   - Set up sitemap.xml

4. **Domain & SSL:**
   - Purchase domain name (GoDaddy, Namecheap, etc.)
   - Set up DNS records
   - Enable SSL certificate (usually automatic)

### 💰 Hosting Cost Comparison

| Platform | Free Tier | Paid Plan | Best For |
|----------|-----------|-----------|----------|
| **Vercel** | 100GB bandwidth | $20/month | Next.js sites |
| **Netlify** | 100GB bandwidth | $19/month | Static sites |
| **Namecheap** | Unlimited bandwidth | $3-5/month | Traditional hosting |
| **AWS Amplify** | 1,000 build minutes | ~$15+/month | Enterprise |
| **DigitalOcean** | None | $5+/month | Full control |
| **GitHub Pages** | Unlimited | Free | Simple sites |

### 🌍 Custom Domain Setup

#### Step 1: Purchase Domain
- **Recommended**: GoDaddy, Namecheap, Google Domains
- **Cost**: $10-15/year for .com domain
- **Business Suggestion**: `threeboyscleaning.com`

#### Step 2: Configure DNS
```bash
# DNS Records to add:
A Record: @ → Your hosting IP
CNAME: www → yourdomain.com
```

#### Step 3: SSL Certificate
- Most hosting providers offer free SSL
- Let's Encrypt provides free certificates
- Ensures https:// for your website

### 📊 Recommended Setup for Your Business

**🎯 Best Choice: Vercel + Custom Domain**

1. **Deploy to Vercel** (Free tier initially)
2. **Purchase custom domain** (`threeboyscleaning.com`)
3. **Set up business email** (Google Workspace or similar)
4. **Add analytics** (Google Analytics)
5. **Monitor performance** (Vercel Analytics)

**Monthly Cost Estimate:**
- Vercel Free Tier: $0
- Custom Domain: ~$1/month
- Business Email: ~$6/month
- **Total: ~$7/month to start**

### 🏆 Complete Namecheap Hosting Guide

**🎯 Perfect for: Traditional hosting with domain + hosting bundle**

#### Step-by-Step Namecheap Deployment:

**1. Purchase Domain + Hosting:**
- Go to [namecheap.com](https://namecheap.com)
- Search: `threeboyscleaning.com`
- Add "Stellar Shared Hosting" ($2.88/month first year)
- Complete purchase (includes domain + hosting + SSL)

**2. Prepare Your Project:**

Create `next.config.mjs` file in your project root:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: '',
  basePath: ''
}

export default nextConfig
```

Update `package.json` scripts:
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "export": "next build"
  }
}
```

**3. Build Your Site:**
```bash
# Navigate to project
cd "cle next"

# Install dependencies
npm install

# Build static version
npm run export

# Your files will be in the 'out' folder
```

**4. Upload to Namecheap:**
- **Access cPanel**: Namecheap Account → Hosting → Manage → cPanel
- **File Manager**: Open File Manager → public_html
- **Clear folder**: Delete existing files (index.html, etc.)
- **Upload**: Upload all files from your `out` folder
- **Extract**: If uploaded as ZIP, extract all files

**5. Configure Your Site:**
- **Test**: Visit your domain (may take 24-48 hours for DNS)
- **SSL**: Auto-enabled with Let's Encrypt
- **Email**: Set up business email in cPanel

#### 📧 Professional Email Setup:
1. **cPanel → Email Accounts**
2. **Create**: `info@threeboyscleaning.com`
3. **Access**: Use webmail or configure Outlook/Gmail

### 🚀 Quick Start Deployment Options

#### Option A: Vercel (Fastest)
```bash
npm install -g vercel
cd "cle next"
vercel
```

#### Option B: Namecheap (Traditional)
```bash
cd "cle next"
npm install
npm run export
# Upload 'out' folder contents to Namecheap cPanel
```

### 📞 Need Help?

If you need assistance with deployment:
1. **Vercel Support**: Excellent documentation and community
2. **Netlify Support**: Great tutorials and guides
3. **Community**: Stack Overflow, Reddit r/webdev
4. **Professional Help**: Hire a developer for complex setups

---

## �📚 Documentation

- **Next.js Docs**: [https://nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind CSS**: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
- **TypeScript**: [https://www.typescriptlang.org/docs](https://www.typescriptlang.org/docs)
- **Vercel Deployment**: [https://vercel.com/docs](https://vercel.com/docs)
- **Netlify Deployment**: [https://docs.netlify.com](https://docs.netlify.com)

---

*Last Updated: October 2, 2025*
- **Prettier** for code formatting
- **PostCSS** with Autoprefixer
- **Modern project structure** with `src/` directory

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Development

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check for code issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check if code is properly formatted

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout component
│   │   └── page.tsx         # Home page component
│   └── assets/              # Source assets
│       ├── images/          # Processed images
│       ├── icons/           # SVG icon components
│       ├── fonts/           # Custom fonts
│       └── styles/          # Additional CSS files
├── public/                  # Static assets
│   ├── images/              # Static images
│   └── icons/               # Favicons and static icons
├── .eslintrc.json          # ESLint configuration
├── .gitignore              # Git ignore rules
├── .prettierrc             # Prettier configuration
├── .prettierignore         # Prettier ignore rules
├── next.config.mjs         # Next.js configuration
├── package.json            # Dependencies and scripts
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## 🎨 Styling

This project uses [Tailwind CSS](https://tailwindcss.com/) for styling. The configuration supports:

- Dark mode (automatically detects system preference)
- Custom CSS variables for theming
- Responsive design utilities
- Component and utility classes

## 📝 Development Guidelines

1. **TypeScript**: All new files should use TypeScript (.tsx/.ts)
2. **Components**: Create reusable components in `src/components/`
3. **Assets**: 
   - Use `src/assets/` for processed/imported assets
   - Use `public/` for static files served directly
   - Import icons from `@/assets/icons`
4. **Styling**: Use Tailwind CSS classes for styling
5. **Code Quality**: Run `npm run lint` and `npm run format` before committing
6. **File Organization**: Follow the App Router conventions for routing

## 🎨 Assets Organization

- **Images**: Place in `src/assets/images/` for processed images or `public/images/` for static files
- **Icons**: Create SVG components in `src/assets/icons/` and export from `index.ts`
- **Fonts**: Store custom fonts in `src/assets/fonts/`
- **Styles**: Additional CSS utilities in `src/assets/styles/`

## 🔧 Configuration

### ESLint
The project uses Next.js's built-in ESLint configuration with recommended rules.

### Prettier
Code formatting is handled by Prettier with these settings:
- 2 spaces for indentation
- Semicolons enabled
- Double quotes for strings
- Trailing commas for ES5 compatibility

### Tailwind CSS
Custom configuration includes:
- Content paths for all source files
- Custom color variables
- Dark mode support

## 🚀 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## 📚 Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## 📄 License

This project is open source and available under the [MIT License](LICENSE)."# Cleaning-Web" 
