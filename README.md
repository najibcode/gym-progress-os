# GYM PROGRESS OS — Ultimate Edition Landing Page
### By PROGRESS LAB

A high-converting, premium fitness-tech landing page for **GYM PROGRESS OS — Ultimate Edition**, an advanced Excel-based workout and progressive overload tracking system.

Built with **React 18**, **TypeScript**, **Tailwind CSS**, and **Vite**, optimized for high conversions from Meta (Instagram & Facebook) ad traffic, sub-second loading speeds, and verified Razorpay checkout integration.

---

## 1. Project Overview

- **Product:** GYM PROGRESS OS — Ultimate Edition (v2.0)
- **Brand:** PROGRESS LAB
- **Tagline:** *Train Hard. Track Everything. See Your Progress.*
- **Format:** Downloadable Excel Workbook (`.xlsx`)
- **Price:** ₹199 (One-Time Purchase, Reference Price: ₹499)
- **Payment Link:** `https://rzp.io/rzp/gymos`
- **Key Features:**
  - 15 interlinked, fully automated worksheets.
  - Set-by-set workout logging with automatic volume calculations and e1RM detection.
  - Progressive overload engine with automatic session-to-session load guidance.
  - All-time Personal Records (PR) leaderboard.
  - Plate & 5-stage warm-up ramp calculator.
  - Bodyweight, circumference, BMI, and nutrition protein target tracking.
  - Daily recovery and readiness scoring (0–100).
  - Weekly AI analysis prompt generator for ChatGPT/Claude.

---

## 2. Installation & Local Development

### Prerequisites
- Node.js >= 18.0.0
- npm >= 9.0.0

### Steps

1. Clone or navigate to the repository directory:
   ```bash
   cd Gymos_landing
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 3. Production Build & Preview

Compile TypeScript and generate an optimized static production bundle in `dist/`:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 4. Deployment Guides

The repository is pre-configured for zero-friction deployments on both **Vercel** and **Netlify**.

### Deploying to Vercel

1. Push your repository to GitHub / GitLab / Bitbucket.
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Select your repository.
4. Vercel will automatically detect the settings:
   - **Framework Preset:** `Vite`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **"Deploy"**.
6. The included `vercel.json` ensures clean Single Page Application (SPA) routing and immutable asset caching.

### Deploying to Netlify

1. Push your repository to GitHub.
2. Go to [Netlify](https://netlify.com) and click **"Add new site" -> "Import an existing project"**.
3. Select your repository.
4. Settings (pre-configured in `netlify.toml` and `public/_redirects`):
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **"Deploy site"**.

---

## 5. Configuration & Customization

All primary variables (pricing, payment URL, brand copy, and metadata) are centralized in one file:

📁 **`src/constants/product.ts`**

### Changing the Price or Currency

Edit lines 15–20 of `src/constants/product.ts`:

```typescript
export const PRODUCT = {
  name: "GYM PROGRESS OS",
  edition: "Ultimate Edition",
  brand: "PROGRESS LAB",
  price: 199,              // <--- Change selling price here
  referencePrice: 499,     // <--- Change crossed-out price here
  currency: "INR",
  currencySymbol: "₹",
  // ...
};
```

### Updating the Payment URL

The Razorpay checkout link is declared as a single constant at the very top of `src/constants/product.ts`:

```typescript
export const RAZORPAY_PAYMENT_URL = "https://rzp.io/rzp/gymos";
```

All 18+ CTA buttons across the header, hero, problem, intro, features, calculator, gallery, audience, pricing card, comparison, FAQ, final CTA, and mobile sticky bar import this exact constant. Updating it here updates every single button across the entire site instantly.

### Replacing Product Screenshots

Product images are stored in `public/assets/images/`:

- `gym-cover.webp` (1536×1024) — Main hero mockup and central showcase
- `gym-pd-1.webp` (1254×1254) — Personal Records & Body Progress
- `gym-pd-2.webp` (1254×1254) — Workout Log & Daily Logging
- `gym-pd-3.webp` (1254×1254) — Plate Calculator & Warm-Up Ramp
- `gym-pd-4.webp` (1254×1254) — Progressive Overload Tracker
- `gym-pd-5.webp` (1254×1254) — Workout Split & Mesocycle Planner

To replace any image, simply drop your new `.webp` or `.png` file into `public/assets/images/` with the same name, or update the image path in `src/constants/product.ts`.

---

## 6. Meta Ads Pixel & Analytics Configuration

The landing page is engineered for clean Meta (Facebook & Instagram) ad attribution without false purchase fires.

### Setting up Meta Pixel

1. Open `index.html`.
2. Locate the `<!-- META PIXEL -->` section inside `<head>`.
3. Paste your standard Meta Pixel base script:
   ```html
   <!-- Meta Pixel Code -->
   <script>
   !function(f,b,e,v,n,t,s)
   {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
   n.callMethod.apply(n,arguments):n.queue.push(arguments)};
   if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
   n.queue=[];t=b.createElement(e);t.async=!0;
   t.src=v;s=b.getElementsByTagName(e)[0];
   s.parentNode.insertBefore(t,s)}(window, document,'script',
   'https://connect.facebook.net/en_US/fbevents.js');
   fbq('init', 'YOUR_PIXEL_ID_HERE'); // <--- Insert your Pixel ID
   fbq('track', 'PageView');
   </script>
   <noscript><img height="1" width="1" style="display:none"
   src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID_HERE&ev=PageView&noscript=1"
   /></noscript>
   <!-- End Meta Pixel Code -->
   ```

### Conversion Tracking Architecture

- Clicking any **"BUY NOW"** or **"GET GYM PROGRESS OS"** button triggers the centralized `handleCheckoutRedirect()` function.
- It safely fires the standard Meta `InitiateCheckout` event and Google Analytics `begin_checkout` event.
- **Important:** Clicks on "Buy Now" do *not* fire a `Purchase` event, preventing ad account misreporting. Genuine `Purchase` conversions are recorded via Razorpay's verified post-payment redirect page or Razorpay Webhooks.

---

## 7. Performance & SEO Checklist

- ✅ **Semantic HTML5:** `<header>`, `<main>`, `<section>`, `<aside>`, `<footer>`.
- ✅ **Lighthouse Optimizations:** WebP format images with 92%+ compression ratio, zero layout shifts (`aspect-ratio` defined), font preconnects.
- ✅ **Rich Schema.org:** `Product`, `Offer`, and `SoftwareApplication` JSON-LD structured data.
- ✅ **Mobile First:** Tested across 360px, 375px, 390px, 430px, tablet, and desktop screens.
- ✅ **Accessibility:** High color contrast, visible focus rings, ARIA labels, and `prefers-reduced-motion` compliance.

---

## 8. License

© 2026 PROGRESS LAB. All rights reserved.
