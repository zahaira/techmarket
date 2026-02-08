# 🛒 Techmarket – Modern E-Commerce Frontend Template (Next.js + Stripe)

## 🚀 Overview

**Techmarket** is a modern, scalable **e-commerce frontend template** built with **Next.js** and **Stripe**.  
It is designed for developers, freelancers, and startups who want to quickly launch a professional online store with a clean architecture and ready-to-use payment integration.

This template focuses on **performance, SEO, and developer experience**, while remaining flexible enough to connect to **any backend or API**.

---

## ✨ Features

- Modern e-commerce UI (Home, Products, Cart, Checkout)
- Stripe payment integration (frontend)
- Clean and scalable project structure
- Fully responsive design (mobile / tablet / desktop)
- Optimized for SEO and performance
- Easy to customize and extend
- Ready to connect to any backend (REST, GraphQL, Supabase, Firebase, etc.)

---

## 🛠️ Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Payments:** Stripe (Checkout / Payment Intents)
- **State Management:** Zustand

---

## 📂 Project Structure

├── .env
├── .prettierignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── prettier.config.mjs
├── tsconfig.json
├── postcss.config.mjs
├── next-env.d.ts
├── public/
│   ├── assets/
│   ├── fonts/
│   └── logo/
└── src/
    ├── _mock/
    ├── api/
    ├── app/
    ├── components/
    ├── data/
    ├── i18n/
    ├── layouts/
    ├── lib/
    ├── sections/
    ├── types/
    ├── utils/
    └── middleware.ts

### Configuration files

* .env: Contains environment variables for the project.
* eslint.config.mjs: ESLint configuration for linting the codebase.
* .prettierignore: Lists files and directories to ignore when running Prettier.
* next.config.ts: Configuration file for Next.js.
* postcss.config.mjs: PostCSS configuration, includes Tailwind CSS plugin.
* prettier.config.mjs: Prettier configuration for code formatting.
* tsconfig.json: TypeScript configuration file.


### Main directories

* public/: Contains static assets like images, fonts, and logos.
* src/: Main source code directory.
    * _mock/: Mock data for testing purposes.
    * api/stores : Global state (Zustand)
    * app/: Main application structure.
    * components/: Reusable UI components.
    * data/: Contains static data for the project.
    * i18n/: Supports internationalization (i18n).
    * layouts/: Shared layouts for the application.
    * lib/: Additional libraries or utilities.
    * sections/: Large sections of the application UI.
    * types/: TypeScript type definitions.
    * utils/: Utility functions.
    * middleware.ts: i18n routing with `next-intl`.

---

## 💳 Stripe Setup (Frontend + Backend)

1. Create a Stripe account: https://stripe.com
2. Copy your **Publishable Key**, **Secret Key**, and **Webhook Secret**
3. Add them to `.env.local`:

```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxxxxx
STRIPE_SECRET_KEY=sk_test_xxxxxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxx
```
