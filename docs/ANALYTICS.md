# GTM and GA4 Setup

## Enable GTM

1. Create a Google Tag Manager web container and copy its `GTM-...` ID.
2. Set `VITE_GTM_ID` in the deployment environment (see `.env.example`) and rebuild/redeploy. Do not use the example placeholder.
3. In GTM, create a Google tag for the GA4 measurement ID. For SPA navigation, use the `page_view` dataLayer event and avoid also sending duplicate pageviews on History Change.
4. Add GA4 Event tags triggered by the matching Custom Event names below. Use the `page_path`, `service_name`, `form_name`, `booking_method`, `booking_status`, and `link_url` dataLayer values where relevant.
5. Add Google Ads conversion and Meta Pixel tags in GTM only after their conversion IDs/pixel ID and consent rules are confirmed.
6. Preview the container with Tag Assistant, then verify events in GA4 DebugView before publishing.

## Events Emitted by the Website

| Event | Trigger | Parameters |
| --- | --- | --- |
| `page_view` | Initial load and client-side route change | `page_path`, `page_location` |
| `service_page_view` | Dental implants, RCT, or teeth-whitening route | `service_name`, `page_path` |
| `whatsapp_click` | Click on a `wa.me` or WhatsApp link | `link_url` |
| `phone_call_click` | Click on a `tel:` link | `link_url` |
| `appointment_form_submit` | Valid appointment form submit | `booking_method` |
| `appointment_booked` | Appointment request prepared for WhatsApp | `booking_method`, `booking_status` |
| `contact_form_submit` | Valid contact form starts an email handoff | `form_name` |
| `google_maps_click` | Click on a Google Maps link | `link_url` |
| `form_start` | First focus in appointment, contact, or smile consultation form | `form_name` |

`appointment_booked` currently means a request was prepared and handed to WhatsApp, not that the clinic confirmed a slot. The contact form opens an email draft and cannot verify that the email was sent. Do not use either as a confirmed-booking conversion until a backend or clinic confirmation callback exists. No patient name, phone, email, message, or treatment selection is sent to analytics.

## Still Required Before Production

- Supply the GTM container ID, GA4 measurement ID, Google Ads conversion ID/labels, and Meta Pixel ID.
- Decide and implement consent handling before firing advertising/marketing tags. The current website has no consent manager or Consent Mode integration.
- Add a server-side or form-provider submission path if contact inquiries need reliable delivery and measurable successful submissions.
- After deployment, verify the domain/property in Search Console, submit `/sitemap.xml`, and inspect canonical/indexing reports.
- Configure the domain's DNS and GitHub Pages custom-domain setting for `astradental.co.in`, then verify HTTPS works before submitting Search Console data.
- Run PageSpeed Insights/Lighthouse on production mobile and desktop. The production build includes several PNG assets above 2 MB, so image conversion/resizing and LCP review remain necessary for Core Web Vitals.