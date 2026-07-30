/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import { useState } from 'react'
import { FaWhatsapp, FaPhone, FaCheckCircle } from 'react-icons/fa'
import SEOComponent from '../components/SEOComponent'
import FaqAccordion from '../components/FaqAccordion'
import ReviewCard from '../components/ReviewCard'
import { siteConfig } from '../constants/siteConfig'
import { buildFaqSchema } from '../services/schemaService'
import { testimonials } from '../data/testimonialData'
import {
  orthoTrustBar, orthoCandidateSigns, orthoDoctors, orthoPatientMeans,
  orthoCaseFilters, orthoCases, orthoTreatmentTypes, orthoBudgetExpect,
  orthoJourney, orthoFaqs, orthoAreas,
} from '../data/orthoData'

const waLink = (text) => `https://wa.me/919860532742?text=${encodeURIComponent(text)}`
const telLink = `tel:${siteConfig.phone.replace(/\s/g, '')}`

function OrthoCases() {
  const [active, setActive] = useState(orthoCaseFilters[0])
  const filtered = orthoCases.filter((c) => c.filter === active)

  return (
    <div className="or-cases">
      <div className="or-tabs">
        {orthoCaseFilters.map((f) => (
          <button
            key={f}
            type="button"
            className={`or-tab${active === f ? ' or-tab--active' : ''}`}
            onClick={() => setActive(f)}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="or-case-grid">
        {filtered.map((c) => (
          <div key={c.concern} className="or-case-card">
            <p><strong>Starting Concern:</strong> {c.concern}</p>
            <p><strong>Treatment Used:</strong> {c.treatment}</p>
            <p><strong>Duration:</strong> {c.duration}</p>
            <p className="or-case-outcome"><strong>Outcome:</strong> {c.outcome}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function OrthoPage() {
  const bracesReview = testimonials.find((t) => t.treatment === 'Braces')

  return (
    <>
      <SEOComponent
        title="Braces & Clear Aligners in Chembur | Specialist Orthodontist | Astra Dental"
        description="Thinking about clear aligners or braces? Astra Dental Chembur offers specialist orthodontic care with Dr. Manjiri Bhate — digital 3D smile simulation, transparent pricing & EMI options."
        keywords="braces Chembur, clear aligners Chembur, orthodontist Chembur, crooked teeth treatment Mumbai, gaps between teeth Chembur, Dr Manjiri Bhate orthodontist, invisible aligners Tilak Nagar"
        path="/braces-aligners"
        schema={[buildFaqSchema(orthoFaqs)]}
      />

      {/* ── 1. HERO ─────────────────────────────────────────── */}
      <section className="sm-hero">
        <div className="sm-hero-inner container">
          <div className="sm-hero-text">
            <div className="sm-hero-badge">
              <span>Chembur, Mumbai · Specialist Orthodontic Care</span>
            </div>
            <h1 className="sm-hero-headline">
              Thinking About<br />
              <em className="sm-hero-accent">Clear Aligners or Braces?</em>
            </h1>
            <p className="sm-hero-sub">
              Before you start treatment, discover what specialist orthodontists look for that
              most patients never consider. Straightening teeth isn&rsquo;t just about looks —
              it&rsquo;s about healthy, stable results. At Astra Dental, your smile is planned
              using advanced digital technology and specialist care for predictable, confident
              outcomes.
            </p>
            <div className="sm-hero-actions">
              <a href={waLink('Hi Astra Dental, I want to claim my free 3D Smile Simulation.')} target="_blank" rel="noreferrer" className="sm-btn-wa sm-btn-wa--lg">
                <FaWhatsapp /> Claim Free 3D Smile Simulation
              </a>
              <a href={telLink} className="sm-btn-phone">
                <FaPhone /> Call Now
              </a>
            </div>
            <div className="sm-hero-trust">
              {orthoTrustBar.map((t) => (
                <div key={t} className="sm-trust-item"><FaCheckCircle /> {t}</div>
              ))}
            </div>
          </div>
          <div className="sm-hero-stats">
            <div className="sm-stat-card">
              <span className="sm-stat-value">10+</span>
              <span className="sm-stat-label">Years Orthodontic Experience</span>
            </div>
            <div className="sm-stat-card">
              <span className="sm-stat-value">3D</span>
              <span className="sm-stat-label">Digital Smile Simulation</span>
            </div>
            <div className="sm-stat-card">
              <span className="sm-stat-value">EMI</span>
              <span className="sm-stat-label">Flexible Payment Options</span>
            </div>
            <div className="sm-stat-card sm-stat-card--gold">
              <span className="sm-stat-value">★ 4.9</span>
              <span className="sm-stat-label">Google Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. CANDIDATE IDENTIFICATION ─────────────────────── */}
      <section className="rc-signs-section">
        <div className="container rc-signs-inner">
          <div className="rc-signs-text">
            <p className="sm-eyebrow">Candidate Identification</p>
            <h2 className="rc-signs-title">Are You Struggling With Any Of These?</h2>
            <p className="rc-signs-note">
              If any of these sound familiar, modern orthodontic treatment may help improve
              both your smile and long-term oral health.
            </p>
            <a href={waLink('Hi Astra Dental, I want to book a Digital Smile Assessment.')} target="_blank" rel="noreferrer" className="sm-btn-wa">
              <FaWhatsapp /> Book a Digital Smile Assessment
            </a>
          </div>
          <ul className="rc-signs-list">
            {orthoCandidateSigns.map((sign) => (
              <li key={sign}><FaCheckCircle className="rc-signs-icon rc-signs-icon--check" />{sign}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 3. THE ASTRA DENTAL DIFFERENCE ──────────────────── */}
      <section className="container inner-page">
        <div className="sm-section-header sm-section-header--light">
          <p className="eyebrow">The Astra Dental Difference</p>
          <h2>Why Patients Across Chembur Choose Astra Dental For Smile Correction</h2>
          <p className="sm-section-sub sm-section-sub--dark">
            Moving teeth is a highly specialized process that affects not only appearance but
            also bite function, gum health, and long-term stability. At Astra Dental, treatment
            planning follows a collaborative approach.
          </p>
        </div>
        <div className="or-doctors-grid">
          {orthoDoctors.map((d) => (
            <div key={d.name} className="or-doctor-card">
              <h3>{d.name}</h3>
              <p className="or-doctor-title">{d.title}</p>
              <p className="or-doctor-bio">{d.bio}</p>
              {d.points.length > 0 && (
                <ul className="or-doctor-points">
                  {d.points.map((pt) => <li key={pt}>{pt}</li>)}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div className="or-means-box">
          <h3>What This Means For Patients</h3>
          <p>Before treatment begins, digital records are carefully evaluated to ensure:</p>
          <ul className="or-means-list">
            {orthoPatientMeans.map((m) => (
              <li key={m}><FaCheckCircle />{m}</li>
            ))}
          </ul>
          <p className="or-means-footer">The result is a treatment plan designed around both aesthetics and long-term oral health.</p>
        </div>
      </section>

      {/* ── 4. REAL PATIENT TRANSFORMATIONS ─────────────────── */}
      <section className="or-transformations">
        <div className="container">
          <div className="sm-section-header sm-section-header--light">
            <p className="eyebrow">Real Patient Transformations</p>
            <h2>Proof Matters More Than Promises</h2>
            <p className="sm-section-sub sm-section-sub--dark">
              Every smile correction is unique. The cases below demonstrate real orthodontic
              transformation profiles completed by the Astra Dental team.
            </p>
          </div>
          <OrthoCases />
          {bracesReview && (
            <div className="im-review-wrap">
              <ReviewCard review={bracesReview} />
            </div>
          )}
        </div>
      </section>

      {/* ── 5. TREATMENT TYPES ──────────────────────────────── */}
      <section className="container inner-page">
        <div className="sm-section-header sm-section-header--light">
          <p className="eyebrow">What Treatment Is Right For You?</p>
          <h2>Compare Your Options</h2>
        </div>
        <div className="or-types-grid">
          {orthoTreatmentTypes.map((t) => (
            <div key={t.title} className="or-type-card">
              <h3>{t.title}</h3>
              <p className="or-type-desc">{t.desc}</p>
              {t.idealFor.length > 0 && (
                <>
                  <p className="or-type-label">Ideal for:</p>
                  <ul className="or-type-list">
                    {t.idealFor.map((i) => <li key={i}>{i}</li>)}
                  </ul>
                </>
              )}
              <p className="or-type-label">Benefits:</p>
              <ul className="or-type-list or-type-list--check">
                {t.benefits.map((b) => <li key={b}><FaCheckCircle />{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── 6. AFFORDABLE & TRANSPARENT ─────────────────────── */}
      <section className="rc-retreat-section">
        <div className="container rc-retreat-inner">
          <div>
            <p className="sm-eyebrow">Affordable &amp; Transparent Treatment</p>
            <h2 className="rc-retreat-title">Orthodontic Treatment Designed Around Your Budget</h2>
            <p className="rc-retreat-text">
              We believe patients should fully understand their treatment options before making
              a decision.
            </p>
            <a href={waLink('Hi Astra Dental, I want to check EMI options for braces/aligners.')} target="_blank" rel="noreferrer" className="sm-btn-wa">
              <FaWhatsapp /> Check EMI Options
            </a>
          </div>
          <div>
            <h3 className="rc-retreat-signs-title">What To Expect</h3>
            <ul className="rc-retreat-signs">
              {orthoBudgetExpect.map((s) => (
                <li key={s}><FaCheckCircle />{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── 7. SMILE JOURNEY ─────────────────────────────────── */}
      <section className="container inner-page">
        <div className="sm-section-header sm-section-header--light">
          <p className="eyebrow">Your Smile Journey</p>
          <h2>What Happens After Booking?</h2>
        </div>
        <div className="rc-protocol-list or-journey-list">
          {orthoJourney.map((j) => (
            <div key={j.step} className="rc-protocol-item">
              <span className="rc-protocol-step">{j.step}</span>
              <div className="rc-protocol-body">
                <h3>{j.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 8. FAQ ───────────────────────────────────────────── */}
      <section className="container inner-page">
        <div className="sm-section-header sm-section-header--light">
          <p className="eyebrow">Frequently Asked Questions</p>
          <h2>Braces &amp; Clear Aligners — Common Questions</h2>
        </div>
        <FaqAccordion items={orthoFaqs} />
      </section>

      {/* ── 9. LOCAL SEO ─────────────────────────────────────── */}
      <section className="or-areas-section">
        <div className="container">
          <p className="sm-eyebrow">Orthodontic Clinic In Chembur Serving Nearby Areas</p>
          <h2 className="or-areas-title">Astra Dental Welcomes Patients From</h2>
          <div className="or-areas-chips">
            {orthoAreas.map((a) => (
              <span key={a} className="rc-material-chip">{a}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. FINAL CTA ────────────────────────────────────── */}
      <section className="rc-final-cta">
        <div className="container rc-final-cta-inner">
          <h2>Ready To Start Your Smile Transformation?</h2>
          <p>
            Book a consultation with Dr. Manjiri Bhate and discover the most suitable treatment
            option for your smile goals.
          </p>
          <div className="or-final-cta-actions">
            <a href={waLink('Hi Astra Dental, I want to claim my free 3D Smile Simulation.')} target="_blank" rel="noreferrer" className="rc-final-cta-btn">
              <FaWhatsapp /> Claim Free 3D Smile Simulation
            </a>
            <a href={telLink} className="rc-final-cta-btn rc-final-cta-btn--ghost">
              <FaPhone /> Call Now
            </a>
          </div>
          <div className="or-footer-trust">
            <span>10+ Years Orthodontic Experience</span>
            <span>Specialist Orthodontist</span>
            <span>World Record Holder-Led Clinic</span>
            <span>Digital Smile Planning</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default OrthoPage
