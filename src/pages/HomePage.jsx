/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import { Link } from 'react-router-dom'
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaClock, FaCheckCircle, FaPlay } from 'react-icons/fa'
import SEOComponent from '../components/SEOComponent'
import Hero from '../components/Hero'
import SectionTitle from '../components/SectionTitle'
import ReviewCard from '../components/ReviewCard'
import FaqAccordion from '../components/FaqAccordion'
import CTASection from '../components/CTASection'
import { heroSlides } from '../data/heroMedia'
import { testimonials } from '../data/testimonialData'
import { galleryItems } from '../data/galleryData'
import {
  heroData, whyChooseData, whyChooseIntro,
  smileConditions, treatmentFeatures, problemsWeSolve,
  beforeAfterCases, aboutDoctorPoints, homeFaqs,
} from '../data/homeData'
import { buildFaqSchema, buildLocalBusinessSchema } from '../services/schemaService'
import { siteConfig } from '../constants/siteConfig'
import drAmitPhoto from '../assets/images/dr.amit.PNG'

function HomePage() {
  const imgBefore = galleryItems[1]?.image
  const imgAfter  = galleryItems[0]?.image

  return (
    <>
      <SEOComponent
        title="Astra Dental Clinic Chembur | Dr. Amit Pawar MDS | Best Dentist in Mumbai"
        description="Astra Dental Clinic in Chembur Mumbai — led by Dr. Amit Pawar, Smile Design Expert & World Record Holder. Dental implants, veneers, teeth whitening, smile makeover. Call +91 98605 32742."
        keywords="best dentist Chembur, dental clinic Chembur Mumbai, Dr Amit Pawar, Astra Dental, smile design Chembur, dental implants Chembur, root canal Chembur, teeth whitening Mumbai, veneers Chembur"
        path="/"
        schema={[buildLocalBusinessSchema(), buildFaqSchema(homeFaqs)]}
      />

      <Hero data={heroData} slides={heroSlides} />

      {/* ── Problems We Solve ── */}
      <section className="hp-problems container inner-page">
        <div className="sm-section-header">
          <p className="eyebrow">Tell Us What&rsquo;s Bothering You</p>
          <h2>Problems We Solve</h2>
          <p className="sm-section-sub sm-section-sub--dark">
            Tap your concern and we&rsquo;ll take you straight to the right treatment.
          </p>
        </div>
        <div className="hp-problems-grid">
          {problemsWeSolve.map((p) => (
            <Link key={p.problem} to={p.link} className="hp-problem-card">
              <span>{p.problem}</span>
              <span className="hp-problem-arrow">→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Why Patients Choose ── */}
      <section className="hp-why container inner-page">
        <div className="hp-why-left">
          <p className="eyebrow">Why Patients Choose</p>
          <h2 className="hp-why-heading">ASTRA DENTAL</h2>
          <p className="hp-why-para">{whyChooseIntro}</p>
        </div>
        <div className="hp-why-grid">
          {whyChooseData.map((item) => (
            <article key={item.title} className="card hp-why-card">
              <span className="hp-why-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── Smile Design (dark section) ── */}
      <section className="hp-smile">
        <div className="container hp-smile-inner">
          <div className="hp-smile-left">
            <p className="eyebrow hp-smile-eyebrow">Smile Design / Smile Makeover</p>
            <h2 className="hp-smile-title">A Beautiful Smile Is More Than Just White Teeth</h2>
            <p className="hp-smile-body">
              Every smile has unique challenges. Some patients have gaps between teeth, some have
              crooked teeth, some are unhappy with tooth shape. Others want brighter teeth or a
              more attractive smile.
            </p>
            <p className="hp-smile-body">
              At Astra Dental, every smile is carefully analyzed and customized using modern Smile
              Design principles to create natural-looking and confident smiles.
            </p>
            <Link to="/smile-makeover" className="btn btn-primary hp-smile-btn">
              Explore Smile Design Solutions →
            </Link>
          </div>
          <div className="hp-conditions-grid">
            {smileConditions.map((label) => (
              <div key={label} className="hp-condition-cell">
                <span className="hp-condition-tooth">🦷</span>
                <span className="hp-condition-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Treatment Feature Cards ── */}
      <section className="container inner-page">
        <SectionTitle eyebrow="Treatments" title="Common Concerns," accentTitle="Expert Solutions" />
        <div className="hp-tf-grid">
          {treatmentFeatures.map((tf) => (
            <article key={tf.problem} className={`hp-tf-card hp-tf--${tf.theme}`}>
              <h3 className="hp-tf-problem">{tf.problem}</h3>
              <h4 className="hp-tf-solution">{tf.solution}</h4>
              <p className="hp-tf-desc">{tf.desc}</p>
              <ul className="hp-tf-bullets">
                {tf.bullets.map((b) => (
                  <li key={b}><FaCheckCircle className="hp-tf-check" />{b}</li>
                ))}
              </ul>
              <Link to={tf.link} className="btn btn-primary hp-tf-btn">
                {tf.cta} →
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* ── Before & After ── */}
      <section className="container inner-page">
        <div className="hp-ba-header">
          <div>
            <p className="eyebrow">Real Patients. Real Smiles. Real Results.</p>
            <h2>Before &amp; After Smile Transformations</h2>
          </div>
          <Link to="/gallery" className="btn btn-ghost">View More Cases →</Link>
        </div>
        <div className="hp-ba-grid">
          {beforeAfterCases.map((c) => (
            <div key={c.problem} className="card hp-ba-card">
              <div className="hp-ba-images">
                <div className="hp-ba-img-wrap">
                  <img src={imgBefore} alt="Before" className="hp-ba-img" />
                  <span className="hp-ba-label">Before</span>
                </div>
                <div className="hp-ba-img-wrap">
                  <img src={imgAfter} alt="After" className="hp-ba-img" />
                  <span className="hp-ba-label hp-ba-label--after">After</span>
                </div>
              </div>
              <div className="hp-ba-info">
                <p><strong>Problem:</strong> {c.problem}</p>
                <p><strong>Treatment:</strong> {c.treatment}</p>
                <p><strong>Result:</strong> {c.result}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonials + Visit Us ── */}
      <section className="container inner-page hp-tv">
        <div className="hp-tv-left">
          <SectionTitle eyebrow="What Our Patients Say" title="Patient" accentTitle="Testimonials" />
          <div className="hp-tv-cards">
            {testimonials.slice(0, 3).map((r) => (
              <ReviewCard key={r.name} review={r} />
            ))}
          </div>
        </div>
        <div className="hp-tv-right card">
          <p className="eyebrow">Visit Us</p>
          <div className="hp-tv-contacts">
            <div className="hp-tv-item">
              <FaMapMarkerAlt className="hp-tv-icon" />
              <span>{siteConfig.address}</span>
            </div>
            <a className="hp-tv-item hp-tv-link" href={`tel:${siteConfig.phone.replace(/\s/g,'')}`}>
              <FaPhone className="hp-tv-icon" />
              <span>{siteConfig.phone}</span>
            </a>
            <a className="hp-tv-item hp-tv-link" href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noreferrer">
              <FaWhatsapp className="hp-tv-icon hp-tv-icon--wa" />
              <span>WhatsApp Us</span>
            </a>
            <div className="hp-tv-item">
              <FaClock className="hp-tv-icon" />
              <span>Mon – Sat: 10:00 AM – 9:00 PM &nbsp;|&nbsp; Sunday: By Appointment</span>
            </div>
          </div>
          <div className="hp-tv-map">
            <iframe
              title="Astra Dental Clinic Location"
              src={siteConfig.mapEmbed}
              width="100%"
              height="200"
              style={{ border: 0, borderRadius: 12 }}
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* ── About Dr. Amit Pawar ── */}
      <section className="hp-about container inner-page">
        <div className="hp-about-photo-wrap">
          <img src={drAmitPhoto} alt="Dr. Amit Pawar" className="hp-about-photo" />
        </div>
        <div className="hp-about-content">
          <p className="eyebrow">About Dr. Amit Pawar</p>
          <ul className="hp-about-points">
            {aboutDoctorPoints.map((pt) => (
              <li key={pt}>
                <FaCheckCircle className="hp-about-check" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
          <Link to="/about" className="btn btn-primary">Meet Dr. Amit Pawar →</Link>
        </div>
        <div className="hp-about-video">
          <p className="hp-about-video-label">Watch Video Testimonials</p>
          <a
            href={siteConfig.socialLinks.youtube}
            target="_blank"
            rel="noreferrer"
            className="hp-about-play"
            aria-label="Watch video testimonials on YouTube"
          >
            <FaPlay />
          </a>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="container inner-page">
        <SectionTitle eyebrow="FAQs" title="Top Questions" accentTitle="Answered" />
        <FaqAccordion items={homeFaqs} />
      </section>

      <CTASection
        title="Ready To Transform Your Smile?"
        description="Book Your Consultation With Dr. Amit Pawar Today."
      />
    </>
  )
}

export default HomePage
