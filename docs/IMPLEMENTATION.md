# Astra Dental Clinic Implementation Notes

## 1. Architecture Summary

The website follows a modular and scalable React architecture:

- Routing: src/routes/AppRouter.jsx
- Shared layout: src/layouts/MainLayout.jsx
- Reusable UI components: src/components
- Data-driven static content: src/data
- SEO service layer: src/components/SEOComponent.jsx + src/services/schemaService.js
- Global design system: src/styles/global.css

## 2. SEO Implementation

Each page uses the SEO component with:

- unique title
- meta description
- canonical URL
- Open Graph tags
- optional JSON-LD schema

Structured schema supported:

- LocalBusiness (Dentist)
- FAQPage
- BreadcrumbList

## 3. Performance Considerations

- Route-based code splitting with lazy and suspense
- image lazy-loading on media-heavy sections
- static assets optimized for CDN hosting
- streamlined dependency set

## 4. Accessibility Coverage

- semantic headings and sectioning
- focus-visible style for controls
- alt text for images
- form labels on contact and appointment forms
- keyboard accessible navigation controls

## 5. Content Management

All editable content is externalized in src/data files:

- homeData.js
- doctorData.js
- treatmentData.js
- faqData.js
- testimonialData.js
- pricingData.js
- blogData.js
- videoData.js
- contactData.js
- aboutData.js
- legalData.js

## 6. Production Go-Live Checklist

1. Update real clinic map, social links, and contact numbers if needed.
2. Replace demo media URLs with licensed clinic assets.
3. Connect forms to backend/API workflow.
4. Add analytics script and cookie consent behavior if legally required.
5. Rebuild and deploy to preferred static host.
