/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import { useState } from 'react'
import { FaWhatsapp, FaPhone, FaCheckCircle, FaChevronDown, FaTooth } from 'react-icons/fa'
import SEOComponent from '../components/SEOComponent'
import ReviewCard from '../components/ReviewCard'
import { siteConfig } from '../constants/siteConfig'
import { buildFaqSchema } from '../services/schemaService'
import { galleryItems } from '../data/galleryData'
import { testimonials } from '../data/testimonialData'
import {
  implantTrustBar, implantDifference, implantSolutions,
  implantBrands, implantCaseLabels, implantAreas, implantFaqs,
} from '../data/implantData'

const waLink = (text) => `https://wa.me/919860532742?text=${encodeURIComponent(text)}`
const telLink = `tel:${siteConfig.phone.replace(/\s/g, '')}`

function ImFaq({ items }) {
  const [open, setOpen] = useState(null)
  return (
    <div className="sm-faq-list">
      {items.map((item, i) => (
        <div key={item.question} className={`sm-faq-item${open === i ? ' sm-faq-item--open' : ''}`}>
          <button
            type="button"
            className="sm-faq-q"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span>{item.question}</span>
            <FaChevronDown className={`sm-faq-chevron${open === i ? ' sm-faq-chevron--up' : ''}`} />
          </button>
          {open === i && <p className="sm-faq-a">{item.answer}</p>}
        </div>
      ))}
    </div>
  )
}

function DentalImplantsPage() {
  const imgBefore = galleryItems[1]?.image
  const imgAfter = galleryItems[0]?.image
  const implantReview = testimonials.find((t) => t.treatment === 'Dental Implant')

  return (
    <>
      <SEOComponent
        title="Best Dental Implants in Chembur & Tilak Nagar | Full Mouth & Zygomatic | Astra Dental"
        description="Missing teeth? Dr. Amit Pawar at Astra Dental Chembur offers advanced 3D-guided dental implants, full-mouth rehabilitation, and Zygomatic implants. Book your consultation today."
        keywords="dental implants Chembur, dental implants Tilak Nagar, full mouth rehabilitation Mumbai, All-on-4 implants Chembur, zygomatic implants Mumbai, best implantologist Chembur, Dr Amit Pawar implants"
        path="/dental-implants"
        schema={[buildFaqSchema(implantFaqs)]}
      />

      {/* ── 1. HERO ─────────────────────────────────────────── */}
      <section className="sm-hero">
        <div className="sm-hero-inner container">
          <div className="sm-hero-text">
            <div className="sm-hero-badge">
              <span>Chembur &amp; Tilak Nagar · Implantology Specialist</span>
            </div>
            <h1 className="sm-hero-headline">
              Permanent, Natural-Looking Teeth<br />
              <em className="sm-hero-accent">in Days.</em>
            </h1>
            <p className="sm-hero-sub">
              Don&rsquo;t let missing teeth dictate your life. Advanced digital dental implants
              and full-mouth rehabilitation in Chembur — led by Dr. Amit Pawar (MDS), specializing
              in 3D-guided placement, complex bone-loss cases, and Zygomatic implants.
            </p>
            <div className="sm-hero-actions">
              <a href={waLink('Hi Astra Dental, I would like to book a free Implant Assessment.')} target="_blank" rel="noreferrer" className="sm-btn-wa sm-btn-wa--lg">
                <FaWhatsapp /> Book Your Free Implant Assessment
              </a>
              <a href={telLink} className="sm-btn-phone">
                <FaPhone /> Call Now for Urgent Enquiries
              </a>
            </div>
            <div className="sm-hero-trust">
              {implantTrustBar.map((t) => (
                <div key={t} className="sm-trust-item"><FaCheckCircle /> {t}</div>
              ))}
            </div>
          </div>
          <div className="sm-hero-stats">
            <div className="sm-stat-card">
              <span className="sm-stat-value">7+</span>
              <span className="sm-stat-label">Years Implantology Expertise</span>
            </div>
            <div className="sm-stat-card">
              <span className="sm-stat-value">3D</span>
              <span className="sm-stat-label">CBCT Guided Planning</span>
            </div>
            <div className="sm-stat-card">
              <span className="sm-stat-value">FDA</span>
              <span className="sm-stat-label">Approved Implant Systems</span>
            </div>
            <div className="sm-stat-card sm-stat-card--gold">
              <span className="sm-stat-value">★ 4.9</span>
              <span className="sm-stat-label">Google Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. THE ASTRA DENTAL DIFFERENCE ──────────────────── */}
      <section className="container inner-page">
        <div className="sm-section-header sm-section-header--light">
          <p className="eyebrow">The Astra Dental Difference</p>
          <h2>Precision, Technology, and Trust</h2>
          <p className="sm-section-sub sm-section-sub--dark">
            Replacing a tooth isn&rsquo;t just about placing a screw; it is about engineering a
            lifetime of confident chewing and smiling. At Astra Dental, we eliminate the guesswork.
          </p>
        </div>
        <div className="rc-why-grid">
          {implantDifference.map((item) => (
            <article key={item.title} className="card rc-why-card">
              <span className="rc-why-icon"><FaTooth /></span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── 3. IMPLANT SOLUTIONS ────────────────────────────── */}
      <section className="im-solutions-section">
        <div className="container">
          <div className="sm-section-header sm-section-header--light">
            <p className="eyebrow">Our Implant Solutions</p>
            <h2>The Right Fit for Your Case</h2>
          </div>
          <div className="im-solutions-grid">
            {implantSolutions.map((s, i) => (
              <div key={s.title} className="im-solution-card">
                <span className="im-solution-num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="im-solutions-cta">
            <a href={waLink('Hi Astra Dental, I am not sure which implant solution I need — can I schedule a diagnostic scan?')} target="_blank" rel="noreferrer" className="sm-btn-wa">
              <FaWhatsapp /> Not Sure What You Need? Schedule a Diagnostic Scan
            </a>
          </div>
        </div>
      </section>

      {/* ── 4. IMPLANT SYSTEMS / BRANDS ─────────────────────── */}
      <section className="container inner-page">
        <div className="sm-section-header sm-section-header--light">
          <p className="eyebrow">Uncompromising Quality</p>
          <h2>The World&rsquo;s Best Implant Systems</h2>
          <p className="sm-section-sub sm-section-sub--dark">
            We practice ethical dentistry. We do not use unbranded or generic materials. Astra
            Dental partners only with globally recognized, FDA-approved implant systems with
            decades of proven clinical success.
          </p>
        </div>
        <div className="im-brands-row">
          {implantBrands.map((b) => (
            <span key={b} className="im-brand-chip">{b}</span>
          ))}
        </div>
        <p className="im-brands-note">
          All final prostheses (the visible teeth) are fabricated in top-tier dental
          laboratories using high-strength, aesthetic Zirconia.
        </p>
      </section>

      {/* ── 5. BEFORE / AFTER GALLERY ───────────────────────── */}
      <section className="sm-ba container inner-page">
        <div className="sm-section-header sm-section-header--light">
          <p className="eyebrow">Real Cases</p>
          <h2>Implant Transformations by Dr. Amit Pawar</h2>
        </div>
        <div className="sm-ba-grid">
          {implantCaseLabels.map((label) => (
            <div key={label} className="sm-ba-card">
              <div className="sm-ba-images">
                <div className="sm-ba-img-wrap">
                  <img src={imgBefore} alt={`Before: ${label}`} className="sm-ba-img" loading="lazy" />
                  <span className="sm-ba-label">Before</span>
                </div>
                <div className="sm-ba-img-wrap">
                  <img src={imgAfter} alt={`After: ${label}`} className="sm-ba-img" loading="lazy" />
                  <span className="sm-ba-label sm-ba-label--after">After</span>
                </div>
              </div>
              <div className="sm-ba-info">
                <p className="sm-ba-result"><strong>{label}</strong></p>
              </div>
            </div>
          ))}
        </div>
        {implantReview && (
          <div className="im-review-wrap">
            <ReviewCard review={implantReview} />
          </div>
        )}
      </section>

      {/* ── 6. FAQ ───────────────────────────────────────────── */}
      <section className="sm-faq-section container inner-page">
        <div className="sm-section-header sm-section-header--light">
          <p className="eyebrow">Frequently Asked Questions</p>
          <h2>Everything You Need to Know About Dental Implants</h2>
        </div>
        <div className="sm-faq-cols">
          <ImFaq items={implantFaqs.slice(0, 3)} />
          <ImFaq items={implantFaqs.slice(3)} />
        </div>
      </section>

      {/* ── 7. MAP ───────────────────────────────────────────── */}
      <section className="sm-map-section">
        <div className="container sm-map-inner">
          <div className="sm-map-details">
            <p className="sm-eyebrow">Visit Astra Dental</p>
            <h2 className="sm-map-title">
              Proudly serving patients from {implantAreas.join(', ')}.
            </h2>
            <div className="sm-map-info">
              <div className="sm-map-info-item">
                <span>{siteConfig.address}</span>
              </div>
              <div className="sm-map-info-item">
                <span>{siteConfig.phone}</span>
              </div>
            </div>
            <a href={waLink('Hi Astra Dental, I would like to book my implant consultation.')} target="_blank" rel="noreferrer" className="sm-btn-wa">
              <FaWhatsapp /> Book Your Implant Consultation Today
            </a>
          </div>
          <div className="sm-map-embed-wrap">
            <iframe
              title="Astra Dental Clinic Chembur Location"
              src={siteConfig.mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            />
            <div className="sm-map-blocker" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* ── 8. FINAL CTA ─────────────────────────────────────── */}
      <section className="rc-final-cta">
        <div className="container rc-final-cta-inner">
          <h2>Ready to Eat, Speak, and Smile with Confidence?</h2>
          <p>
            Don&rsquo;t let missing teeth hold you back any longer. Book a comprehensive 3D scan
            and consultation with Dr. Amit Pawar to discover your exact treatment options.
          </p>
          <a href={waLink('Hi Astra Dental, I would like to book my implant consultation.')} target="_blank" rel="noreferrer" className="rc-final-cta-btn">
            <FaWhatsapp /> Book Your Implant Consultation — Tap Here
          </a>
        </div>
      </section>
    </>
  )
}

export default DentalImplantsPage
