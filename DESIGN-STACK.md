# Design and Styling Stack

This page is built as a responsive web service landing page using the existing
Next.js project.

## What the page uses

- **Next.js App Router and React** for the page structure and reusable UI
  components.
- **Tailwind CSS** for responsive layouts, spacing, typography, colors, and
  interactive states. The Tailwind theme is configured in
  [`tailwind.config.ts`](./tailwind.config.ts).
- **Custom CSS** in [`app/globals.css`](./app/globals.css) for smooth section
  scrolling, the hero background glow, selection colors, and reduced-motion
  support.
- **Geist and Geist Mono** loaded with Next.js `next/font` in
  [`app/layout.tsx`](./app/layout.tsx).
- **Lucide React** for interface icons.
- **Next.js Image** for optimized local project-preview images.
- **CSS gradients and subtle transitions** for visual depth without a heavy
  animation library.

## What is PostCSS?

PostCSS is a tool that processes CSS through plugins. It is part of the build
pipeline, not a visual design framework and not something visitors interact
with directly.

This project configures PostCSS in
[`postcss.config.mjs`](./postcss.config.mjs) with two plugins:

1. **Tailwind CSS** reads the utility classes used in the app and generates the
   corresponding CSS.
2. **Autoprefixer** adds browser-specific CSS prefixes where needed to improve
   browser compatibility.

In short: Tailwind is how the page is styled; PostCSS runs the CSS processing
steps that prepare those styles for the browser.
