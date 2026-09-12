/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import { useState } from 'react'
import {
  FaWhatsapp, FaPhone, FaCheckCircle, FaChevronDown,
  FaMapMarkerAlt, FaClock, FaMicroscope, FaTooth, FaExclamationTriangle,
} from 'react-icons/fa'
import SEOComponent from '../components/SEOComponent'
import { siteConfig } from '../constants/siteConfig'
import { buildFaqSchema } from '../services/schemaService'
import {
  rcWhyChoose, rcSigns, rcProtocol, rcTechnology,
  rcMaterials, rcRetreatmentSigns, rcServices, rcFaqs,
} from '../data/rootCanalData'

const waLink = (text) => `https://wa.me/919860532742?text=${encodeURIComponent(text)}`
const telLink = `tel:${siteConfig.phone.replace(/\s/g, '')}`

function RcFaq({ items }) {
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

function RootCanalPage() {
  return (
    <>
      <SEOComponent
        title="Root Canal Treatment in Chembur | Microscopic RCT | Astra Dental"
        description="Save your tooth, stop the pain. Advanced microscopic root canal treatment in Chembur with emergency appointments, single-sitting cases, and strict sterilization standards. Led by Dr. Amit Pawar, Astra Dental."
        keywords="root canal treatment Chembur, RCT Chembur, single sitting root canal Mumbai, emergency dental pain Chembur, microscopic root canal, root canal retreatment Chembur, best dentist for root canal Chembur"
        path="/root-canal-treatment"
        schema={[buildFaqSchema(rcFaqs)]}
      />

      {/* ── 1. HERO ─────────────────────────────────────────── */}
      <section className="sm-hero">
        <div className="sm-hero-inner container">
          <div className="sm-hero-text">
            <div className="sm-hero-badge">
              <span>Chembur, Mumbai · Emergency Root Canal Care</span>
            </div>
            <h1 className="sm-hero-headline">
              Save Your Tooth.<br />
              <em className="sm-hero-accent">Stop The Pain.</em>
            </h1>
            <p className="sm-hero-sub">
              Advanced Microscopic Root Canal Treatment in Chembur — performed by experienced
              clinicians using modern magnification, advanced disinfection protocols, and
              precision-driven techniques.
            </p>
            <div className="sm-hero-actions">
              <a href={waLink('Hi Astra Dental, I have tooth pain and want to book a Root Canal consultation.')} target="_blank" rel="noreferrer" className="sm-btn-wa sm-btn-wa--lg">
                <FaWhatsapp /> Book Consultation
              </a>
              <a href={telLink} className="sm-btn-phone">
                <FaPhone /> Call Now
              </a>
            </div>
            <div className="sm-hero-trust">
              <div className="sm-trust-item"><FaCheckCircle /> Emergency Appointments</div>
              <div className="sm-trust-item"><FaCheckCircle /> Single-Sitting Cases Available</div>
              <div className="sm-trust-item"><FaCheckCircle /> Strict Sterilization Standards</div>
            </div>
          </div>
          <div className="sm-hero-stats">
            <div className="sm-stat-card">
              <span className="sm-stat-value">7+</span>
              <span className="sm-stat-label">Years Clinical Experience</span>
            </div>
            <div className="sm-stat-card">
              <span className="sm-stat-value">Micro</span>
              <span className="sm-stat-label">-scopic Precision</span>
            </div>
            <div className="sm-stat-card">
              <span className="sm-stat-value">Same-Day</span>
              <span className="sm-stat-label">Emergency Slots</span>
            </div>
            <a
              href={siteConfig.googleReviewsUrl}
              target="_blank"
              rel="noreferrer"
              className="sm-stat-card sm-stat-card--gold"
            >
              <span className="sm-stat-value">★★★★★</span>
              <span className="sm-stat-label">Read Our Reviews</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. WHY PATIENTS CHOOSE ──────────────────────────── */}
      <section className="container inner-page">
        <div className="sm-section-header sm-section-header--light">
          <p className="eyebrow">Why Patients Choose Astra Dental</p>
          <h2>Root Canal Treatment in Chembur, Done Right</h2>
        </div>
        <div className="rc-why-grid">
          {rcWhyChoose.map((item) => (
            <article key={item.title} className="card rc-why-card">
              <span className="rc-why-icon"><FaMicroscope /></span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── 3. SIGNS YOU MAY NEED A ROOT CANAL ──────────────── */}
      <section className="rc-signs-section">
        <div className="container rc-signs-inner">
          <div className="rc-signs-text">
            <p className="sm-eyebrow">Don&rsquo;t Ignore The Warning Signs</p>
            <h2 className="rc-signs-title">Signs You May Need a Root Canal</h2>
            <p className="rc-signs-note">
              Early diagnosis often improves the chances of saving the tooth.
            </p>
          </div>
          <ul className="rc-signs-list">
            {rcSigns.map((sign) => (
              <li key={sign}><FaExclamationTriangle className="rc-signs-icon" />{sign}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 4. TREATMENT PROTOCOL ───────────────────────────── */}
      <section className="container inner-page">
        <div className="sm-section-header sm-section-header--light">
          <p className="eyebrow">Step by Step</p>
          <h2>Our Advanced Root Canal Treatment Protocol</h2>
        </div>
        <div className="rc-protocol-list">
          {rcProtocol.map((p) => (
            <div key={p.step} className="rc-protocol-item">
              <span className="rc-protocol-step">{p.step}</span>
              <div className="rc-protocol-body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 5. TECHNOLOGY + MATERIALS ───────────────────────── */}
      <section className="rc-tech-section">
        <div className="container">
          <div className="sm-section-header sm-section-header--light">
            <p className="eyebrow">Technology Used at Astra Dental</p>
            <h2>Precision Tools for a Predictable Outcome</h2>
          </div>
          <div className="rc-tech-grid">
            {rcTechnology.map((t) => (
              <div key={t.title} className="rc-tech-card">
                <FaTooth className="rc-tech-icon" />
                <h4>{t.title}</h4>
                <p>{t.desc}</p>
              </div>
            ))}
          </div>

          <div className="rc-materials">
            <h3>Quality Materials We Use</h3>
            <p>To maintain consistency and treatment quality, our clinicians use globally recognized endodontic systems and materials, including:</p>
            <div className="rc-materials-chips">
              {rcMaterials.map((m) => (
                <span key={m} className="rc-material-chip">{m}</span>
              ))}
            </div>
            <p className="rc-materials-note">Material selection may vary depending on the specific clinical requirements of each case.</p>
          </div>
        </div>
      </section>

      {/* ── 6. MEET THE TEAM ─────────────────────────────────── */}
      <section className="container inner-page rc-team">
        <p className="eyebrow">Meet Dr. Amit Pawar &amp; The Astra Dental Team</p>
        <p className="rc-team-text">
          Led by Dr. Amit Pawar, Astra Dental has earned recognition for comprehensive dental
          care, advanced smile rehabilitation, implant dentistry, and complex restorative
          treatments. Our clinical team follows evidence-based protocols and collaborates
          across specialties to provide patients with comprehensive treatment solutions under
          one roof.
        </p>
        <p className="rc-team-callout">
          Save the tooth whenever possible. Treat the cause of pain. Deliver predictable
          long-term outcomes.
        </p>
      </section>

      {/* ── 7. RETREATMENT ──────────────────────────────────── */}
      <section className="rc-retreat-section">
        <div className="container rc-retreat-inner">
          <div>
            <p className="sm-eyebrow">Failed Root Canal Treatment</p>
            <h2 className="rc-retreat-title">Root Canal Retreatment</h2>
            <p className="rc-retreat-text">
              In some cases, a previously treated tooth may develop recurrent symptoms due to
              missed anatomy, reinfection, restoration failure, or new decay. Our team evaluates
              such cases carefully and may recommend retreatment when appropriate to help
              preserve the tooth.
            </p>
          </div>
          <div>
            <h3 className="rc-retreat-signs-title">Common Signs Include</h3>
            <ul className="rc-retreat-signs">
              {rcRetreatmentSigns.map((s) => (
                <li key={s}><FaCheckCircle />{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── 8. SERVICES + MAP ───────────────────────────────── */}
      <section className="sm-map-section">
        <div className="container sm-map-inner">
          <div className="sm-map-details">
            <p className="sm-eyebrow">Visit Astra Dental, Chembur</p>
            <h2 className="sm-map-title">Conveniently located for Chembur East &amp; West</h2>
            <div className="rc-services-chips">
              {rcServices.map((s) => (
                <span key={s} className="rc-material-chip rc-material-chip--dark">{s}</span>
              ))}
            </div>
            <div className="sm-map-info">
              <div className="sm-map-info-item">
                <FaMapMarkerAlt className="sm-map-info-icon" />
                <span>{siteConfig.address}</span>
              </div>
              <div className="sm-map-info-item">
                <FaPhone className="sm-map-info-icon" />
                <span>{siteConfig.phone}</span>
              </div>
              <div className="sm-map-info-item">
                <FaClock className="sm-map-info-icon" />
                <span>Mon – Sat: 10 AM – 9 PM &nbsp;|&nbsp; Sunday: By Appointment</span>
              </div>
            </div>
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

      {/* ── 9. FAQ ───────────────────────────────────────────── */}
      <section className="sm-faq-section container inner-page">
        <div className="sm-section-header sm-section-header--light">
          <p className="eyebrow">Frequently Asked Questions</p>
          <h2>Everything You Need to Know About Root Canal Treatment</h2>
        </div>
        <div className="sm-faq-cols">
          <RcFaq items={rcFaqs.slice(0, 5)} />
          <RcFaq items={rcFaqs.slice(5)} />
        </div>
      </section>

      {/* ── 10. FINAL CTA ────────────────────────────────────── */}
      <section className="rc-final-cta">
        <div className="container rc-final-cta-inner">
          <h2>Emergency Tooth Pain? Don&rsquo;t Wait.</h2>
          <p>
            Persistent tooth pain rarely resolves on its own. Early treatment can often prevent
            complications and improve the chances of saving your natural tooth. Book your
            consultation today and take the first step toward relief from tooth pain.
          </p>
          <a href={telLink} className="rc-final-cta-btn">
            <FaPhone /> Get Out of Pain Today — Tap to Call Astra Dental Clinic
          </a>
        </div>
      </section>
    </>
  )
}

export default RootCanalPage
