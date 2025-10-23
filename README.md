# 🚀 NMW Site Starter

> Modern landing page & website starter template built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **nmw-core** design system.

[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green)](./LICENSE)

## ✨ Features

- ✅ **Modern Stack**: Next.js 15 App Router, React 19, TypeScript
- ✅ **Design System**: Built on [nmw-core](../nmw-core) with reusable components
- ✅ **Responsive**: Mobile-first design, works on all devices
- ✅ **Dark Mode**: Automatic dark mode with next-themes
- ✅ **SEO Optimized**: Meta tags, sitemap, robots.txt included
- ✅ **Forms**: Contact form with React Hook Form + Zod validation
- ✅ **Animations**: Smooth animations with Motion One
- ✅ **Performance**: Lighthouse 90+ scores out of the box
- ✅ **Customizable**: Easy to customize colors, fonts, and content

## 📦 What's Included

### Reusable Sections
- **Hero** - Eye-catching hero section with CTAs
- **Features** - Grid of features with icons
- **Pricing** - Pricing table with 3 tiers
- **Testimonials** - Customer testimonials grid
- **FAQ** - Accordion-style FAQ section
- **CTA** - Call-to-action section

### Example Pages
- **Home** (`/`) - Complete landing page with all sections
- **About** (`/about`) - About page with company story
- **Services** (`/services`) - Services overview
- **Contact** (`/contact`) - Contact form + info cards

### Components
- **Header** - Sticky header with navigation & theme toggle
- **Footer** - Multi-column footer with links
- **ContactForm** - Validated contact form (React Hook Form + Zod)
- All **nmw-core** components (Button, Card, Input, etc.)

## 🚀 Quick Start

### 1. Clone or Copy This Template

```bash
# If using as a template
cp -r nmw-site-starter my-new-project
cd my-new-project
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Configure Your Site

Edit `lib/constants.ts` to customize your site:

```ts
export const SITE_CONFIG = {
  name: 'Your Site Name',
  description: 'Your site description',
  url: 'https://yourdomain.com',
  // ...
};
```

### 4. Run Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

### 5. Customize Content

- **Home page**: Edit `app/page.tsx`
- **Section content**: Edit `lib/constants.ts`
- **Pages**: Edit files in `app/` directory
- **Components**: Modify or add components in `components/`

## 🎨 Customization

### Colors

Edit `nmw-core/styles/tokens.css` or create your own `styles/custom.css`:

```css
:root {
  --color-primary: 220 38 38;    /* Red */
  --color-secondary: 124 58 237; /* Purple */
  --color-accent: 234 179 8;     /* Yellow */
}
```

### Typography

Fonts are configured in `app/layout.tsx`:

```ts
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
```

Change to any Google Font or custom font.

### Content

All content constants are in `lib/constants.ts`:
- `SITE_CONFIG` - Site metadata
- `NAV_LINKS` - Navigation links
- `FEATURES` - Features section content
- `PRICING_PLANS` - Pricing tiers
- `TESTIMONIALS` - Customer testimonials
- `FAQ_ITEMS` - FAQ questions & answers

## 📁 Project Structure

```
nmw-site-starter/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   ├── about/               # About page
│   ├── services/            # Services page
│   ├── contact/             # Contact page
│   └── api/contact/         # Contact form API
├── components/
│   ├── sections/            # Reusable page sections
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── Pricing.tsx
│   │   ├── Testimonials.tsx
│   │   ├── CTA.tsx
│   │   └── FAQ.tsx
│   ├── layout/              # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ThemeProvider.tsx
│   └── forms/               # Form components
│       └── ContactForm.tsx
├── lib/
│   ├── constants.ts         # Site configuration & content
│   └── validations/         # Zod schemas
├── nmw-core/                # Design system (from parent)
│   ├── primitives/
│   ├── components/
│   ├── lib/
│   ├── hooks/
│   └── styles/
├── public/                  # Static assets
├── styles/
│   └── globals.css          # Global styles
└── README.md                # This file
```

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 15.x | React framework with App Router |
| **React** | 19.x | UI library |
| **TypeScript** | 5.x | Type safety |
| **Tailwind CSS** | 3.4 | Utility-first CSS |
| **Motion One** | 10.x | Animations |
| **React Hook Form** | 7.x | Form handling |
| **Zod** | 3.x | Schema validation |
| **next-themes** | 0.3 | Dark mode |
| **Lucide React** | 0.4 | Icons |

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start dev server (http://localhost:3000)

# Building
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run typecheck    # Check TypeScript types
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

This is a standard Next.js app and can be deployed to:
- Netlify
- Cloudflare Pages
- AWS Amplify
- Railway
- Any Node.js hosting

## 📧 Contact Form Setup (Optional)

The contact form is ready to use but needs an email service configured.

### Option 1: Resend (Recommended)

1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Add to `.env.local`:

```bash
RESEND_API_KEY=your_api_key_here
```

4. Uncomment email sending code in `app/api/contact/route.ts`

### Option 2: Other Services

You can use any email service (SendGrid, Nodemailer, etc.) by modifying `app/api/contact/route.ts`.

## 🎯 Performance

This template is optimized for performance:

✅ Lighthouse Score: 90+ (all metrics)
✅ Next.js Image Optimization
✅ Automatic Code Splitting
✅ CSS Minification
✅ Optimized Fonts (next/font)

## 🤝 Contributing

This is a template project. Feel free to:
- Fork and customize for your needs
- Submit issues for bugs
- Share your improvements

## 📄 License

MIT License - feel free to use this template for personal or commercial projects.

## 🔗 Links

- **nmw-core**: [Design system documentation](../nmw-core/README.md)
- **Next.js**: [Documentation](https://nextjs.org/docs)
- **Tailwind CSS**: [Documentation](https://tailwindcss.com/docs)

## 💡 Tips

### Adding a New Page

1. Create `app/your-page/page.tsx`
2. Add metadata export
3. Add to `NAV_LINKS` in `lib/constants.ts`
4. Update sitemap in `app/sitemap.ts`

### Adding a New Section

1. Create component in `components/sections/YourSection.tsx`
2. Export from `components/sections/index.ts`
3. Use in any page: `<YourSection />`

### Changing Theme Colors

Edit CSS variables in `nmw-core/styles/tokens.css`:

```css
:root {
  --color-primary: 59 130 246;  /* Bleu */
}
```

All components will automatically update.

---

**Built with ❤️ by NMW Studios**

Need help? Contact: contact@nmwstudios.com
