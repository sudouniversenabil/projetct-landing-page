# Nabil Sikder — Web Development Services

A Next.js App Router landing page for web development services.

## Run locally

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Push this repository to GitHub and import it in [Vercel](https://vercel.com/new).
2. Keep the project root set to the repository root and the framework preset set to **Next.js**. Vercel detects the build and output settings automatically.
3. Add any contact or social URLs you want to show under **Project Settings → Environment Variables**. Use the names in `.env.example`; the Fiverr and WhatsApp URLs have working defaults, and email, GitHub, and LinkedIn are optional.
4. Deploy. Redeploy after changing environment variables so the values are included in the build.

The production build can also be checked locally with:

```bash
npm run build
npm run start
```
