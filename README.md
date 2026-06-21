# Astra Dental Clinic Website

Premium, modern, static React website for Astra Dental Clinic with SEO-ready architecture, reusable components, and data-driven content management.

## Tech Stack

- React 18
- Vite 5
- React Router DOM
- Framer Motion
- SwiperJS
- React Icons
- React Helmet Async

## Features Implemented

- 23-page route structure with lazy-loaded pages
- Sticky header with mobile navigation drawer
- Emergency contact banner
- Sticky appointment button
- Floating WhatsApp button
- Floating call button
- Scroll to top utility button
- Breadcrumb navigation
- Data-driven content under src/data
- Dedicated treatment detail pages
- Contact and appointment forms (future backend-ready)
- Google map embed section
- Structured SEO with Open Graph + JSON-LD
- robots.txt, sitemap.xml, manifest.json
- Responsive UI for mobile, tablet, desktop

## Project Structure

src
- assets
- components
- layouts
- pages
- routes
- hooks
- styles
- constants
- utils
- data
- seo
- services
- animations

## Quick Start

1. Install dependencies

	npm install

2. Run development server

	npm run dev

3. Build for production

	npm run build

4. Preview production build

	npm run preview

## Deployment

This project is static-export friendly and can be deployed on:

- Vercel
- Netlify
- AWS S3 + CloudFront
- Cloudflare Pages

## Notes

- Replace placeholder images and demo social/video URLs before go-live.
- Integrate form submission endpoints for contact and appointment workflows.
- Update canonical base URL in src/constants/siteConfig.js for production.
