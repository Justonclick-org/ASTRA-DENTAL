/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import { useState } from 'react'
import { FaWhatsapp, FaPhone, FaCheckCircle, FaChevronDown, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import SEOComponent from '../components/SEOComponent'
import { siteConfig } from '../constants/siteConfig'
import drAmitPhoto from '../assets/images/dr.amit.PNG'
import { galleryItems } from '../data/galleryData'

/* ── Condition data ────────────────────────────────────────── */
const CONDITIONS = [
  {
    id: 1,
    name: 'Gummy Smile',
    desc: "You've mastered the closed-mouth smile for photos. That shouldn't be the standard.",
    waText: 'Hi Astra Dental, I want an expert Smile Design analysis for a Gummy Smile.',
  },
  {
    id: 2,
    name: 'Crooked Teeth',
    desc: "You know which angle hides it best. You shouldn't have to know that.",
    waText: 'Hi Astra Dental, I want an expert Smile Design analysis for Crooked Teeth.',
  },
  {
    id: 3,
    name: 'Gaps Between Teeth',
    desc: 'Every close-up photo, every video call — you notice it before anyone says a word.',
    waText: 'Hi Astra Dental, I want an expert Smile Design analysis for Gaps Between Teeth.',
  },
  {
    id: 4,
    name: 'Small Teeth',
    desc: "Your smile looks 'incomplete' even when everything is healthy — until now.",
    waText: 'Hi Astra Dental, I want an expert Smile Design analysis for Small Teeth.',
  },
  {
    id: 5,
    name: 'Broken Teeth',
    desc: "One chipped edge and you're rationing which foods you'll eat in public.",
    waText: 'Hi Astra Dental, I want an expert Smile Design analysis for Broken Teeth.',
  },
  {
    id: 6,
    name: 'Dark Teeth',
    desc: "Whitening didn't work because whitening was never the actual problem.",
    waText: 'Hi Astra Dental, I want an expert Smile Design analysis for Dark Teeth.',
  },
  {
    id: 7,
    name: 'Uneven Teeth',
    desc: "Nothing is 'wrong' individually — but together it reads as unfinished.",
    waText: 'Hi Astra Dental, I want an expert Smile Design analysis for Uneven Teeth.',
  },
  {
    id: 8,
    name: 'Worn Teeth',
    desc: "You've noticed your smile looking shorter, sharper, older. That's a fixable mechanical process.",
    waText: 'Hi Astra Dental, I want an expert Smile Design analysis for Worn Teeth.',
  },
]

/* ── Before / After cases ──────────────────────────────────── */
const BA_CASES = [
  { problem: 'Gummy Smile + Uneven Gum Line', treatment: 'Laser Gum Contouring + Veneers', result: 'Balanced & Radiant Smile' },
  { problem: 'Gaps & Crooked Teeth',           treatment: 'Smile Design & Porcelain Veneers', result: 'Perfectly Proportioned Smile' },
  { problem: 'Dark & Worn Teeth',              treatment: 'Full Smile Makeover',              result: 'Bright, Youthful Smile' },
  { problem: 'Broken Front Teeth',             treatment: 'Composite + Porcelain Veneers',    result: 'Natural & Seamless Smile' },
]

/* ── Doctor credentials ────────────────────────────────────── */
const DR_POINTS = [
  'Guinness World Record Holder in Implant Dentistry',
  'MDS — Periodontology & Implantology (SDC Chennai)',
  'Specialist in Advanced Cosmetic Dentistry & Smile Makeovers',
  'Digital Smile Design (DSD) Certified Practitioner',
  '15+ Years of Crafting Confident Smiles in Mumbai',
  'Served 5000+ patients with 98% satisfaction rate',
  'Founder — Astra Dental Clinic, Chembur, Mumbai',
]

/* ── FAQ data (20 questions) ───────────────────────────────── */
const FAQS = [
  {
    q: 'What exactly is a Smile Design or Smile Makeover?',
    a: 'Smile Design is an advanced cosmetic dental protocol that comprehensively analyzes facial symmetry, tooth proportion, and gum architecture to reconstruct a structurally sound and aesthetically flawless smile. At Astra Dental, this is an engineered, predictable process customized to each patient\'s unique facial features — moving far beyond generic teeth whitening.',
  },
  {
    q: 'How do I know if I need a Smile Design or just teeth whitening?',
    a: 'Whitening only addresses tooth color caused by surface stains. If your concerns include tooth shape, size, position, gaps, chipping, or gum levels, whitening alone will not solve them. A Smile Design addresses all these factors holistically. A 15-minute consultation with Dr. Amit Pawar will tell you exactly which category your case falls into.',
  },
  {
    q: 'How long does the entire process take — from consultation to final result?',
    a: 'A simple Smile Design involving 4–6 veneers typically spans 2–3 appointments over 2–3 weeks. A full-arch transformation (8–12 teeth) with gum correction takes 4–6 weeks. Complex cases involving alignment, gum surgery, and restorations may take 3–6 months. Dr. Amit Pawar will give you a precise timeline at your first visit.',
  },
  {
    q: "What's the difference between composite veneers and porcelain veneers?",
    a: "Composite veneers are made from tooth-colored resin applied directly in the clinic in a single visit — ideal for minor shape corrections, budget-conscious patients, or those wanting to preview a look. Porcelain veneers are lab-fabricated ceramic shells that are thinner, more stain-resistant, and last 12–20 years. They require 2 appointments. Porcelain is the gold standard for comprehensive Smile Design cases.",
  },
  {
    q: "Will my new smile look natural or 'overdone'?",
    a: "Natural is the only acceptable outcome at Astra Dental. Dr. Amit Pawar uses Digital Smile Design (DSD) software to simulate your final result before treatment begins. Tooth shade, shape, and proportion are mapped to your facial measurements so the result integrates seamlessly with your appearance — not a generic 'Hollywood smile' template.",
  },
  {
    q: 'Are veneers permanent? Do I have to keep replacing them?',
    a: "Porcelain veneers require a small, irreversible layer of enamel to be polished away before placement — which means the tooth will always need coverage going forward. However, they are not 'used up' in a set period. With proper care, they last 12–20 years. When they eventually need replacement, it's a straightforward process.",
  },
  {
    q: 'Is the Smile Design procedure painful?',
    a: 'Local anaesthesia is used for all preparation procedures. Most patients describe the experience as pressure, not pain. Post-procedure sensitivity — especially after veneer placement — typically resolves within 48–72 hours. Laser procedures like gum contouring cause minimal discomfort and heal quickly.',
  },
  {
    q: 'What is the approximate cost of a Smile Makeover in Chembur, Mumbai?',
    a: 'Cost depends on the number of teeth involved, the material selected (composite vs. porcelain), and whether gum correction or whitening is required. A consultation at Astra Dental Clinic is the only way to get a precise, personalized estimate. We also offer flexible payment options. WhatsApp us to discuss.',
  },
  {
    q: 'What is Digital Smile Design (DSD)?',
    a: "Digital Smile Design is a planning tool that uses photographs, measurements, and software to design and simulate your new smile digitally before any treatment begins. You see the proposed outcome on a screen. Dr. Amit Pawar uses DSD for all Smile Design cases so patients can review, request changes, and approve the design — eliminating surprises.",
  },
  {
    q: 'Why choose Dr. Amit Pawar for a Smile Makeover in Chembur?',
    a: "Dr. Amit Pawar is a Guinness World Record Holder in Implant Dentistry, an MDS-qualified specialist in Periodontology & Implantology, and a Digital Smile Design certified practitioner. With 15+ years of experience and 5000+ smile transformations, he combines clinical precision with an artist's eye. Astra Dental Clinic is located in Chembur, Mumbai.",
  },
  {
    q: 'Can Smile Design fix a gummy smile?',
    a: 'Yes. A gummy smile — where excess gum tissue makes teeth appear short — is corrected through laser gum contouring (gingivectomy). It is a precise, minimally invasive procedure that reshapes the gum line in a single appointment. Results are permanent. Veneers or crowns may be added if the underlying teeth need shape correction.',
  },
  {
    q: "I've tried whitening before and it didn't work. Why?",
    a: "Whitening is only effective on natural enamel. It has no effect on existing crowns, veneers, composite restorations, or intrinsically stained teeth (caused by tetracycline, fluorosis, or trauma). These cases require veneers or crowns to achieve the shade change. A proper diagnosis identifies the type of staining so the right treatment is selected.",
  },
  {
    q: 'Can I get clear aligners AND veneers as part of the same makeover?',
    a: "Yes. In many cases, aligning teeth first — then placing veneers — produces superior results with less enamel reduction needed. The sequence and combination depend on your specific case. Dr. Amit Pawar will design a phased treatment plan if multiple procedures are required, giving you milestones and cost clarity at each stage.",
  },
  {
    q: 'How do I maintain my new smile after treatment?',
    a: "Porcelain veneers and composite restorations are maintained exactly like natural teeth — brush twice daily, floss once daily, avoid biting extremely hard objects (ice, bottle caps). A night guard may be recommended if you grind your teeth. Biannual professional cleaning at Astra Dental Clinic ensures long-term success.",
  },
  {
    q: "What's the difference between a Smile Makeover and Full Mouth Rehabilitation?",
    a: "A Smile Makeover is primarily cosmetically driven — improving the appearance of teeth that are functionally healthy. Full Mouth Rehabilitation addresses both aesthetics and function — rebuilding bite, jaw alignment, and all teeth when significant structural damage, missing teeth, or TMJ issues exist. Both are available at Astra Dental Clinic.",
  },
  {
    q: 'Can I see what my new smile will look like before I commit?',
    a: "Yes. Dr. Amit Pawar uses Digital Smile Design (DSD) to create a simulated preview of your proposed smile. In some cases, a 'mock-up' — a temporary prototype placed over your existing teeth — is used so you can feel and assess the result before any permanent work is done. You decide when you are fully satisfied.",
  },
  {
    q: 'Are dental veneers covered by insurance?',
    a: "Cosmetic dental procedures — including veneers — are generally not covered by dental insurance in India. However, if veneers are being placed to restore teeth damaged by trauma or decay, some plans may offer partial coverage. We recommend checking directly with your insurer. Astra Dental Clinic provides detailed treatment documentation to support insurance claims.",
  },
  {
    q: 'How many teeth are typically included in a Smile Design?',
    a: "The 'social six' — the upper front six teeth — are the most visible when you smile, and many Smile Designs focus here. For patients with wider smiles or concerns extending to premolars, 8–10 teeth may be involved. Dr. Amit Pawar assesses your smile arc before recommending the exact number so results look complete, not patchy.",
  },
  {
    q: 'What if my gums are in poor health — can I still get veneers?',
    a: 'No cosmetic treatment should proceed on unhealthy gums. If gum disease, recession, or significant bone loss is present, these must be treated first. Dr. Amit Pawar is an MDS specialist in Periodontology — gum health management is his core expertise. He will complete any necessary gum treatment before cosmetic work begins.',
  },
  {
    q: "What's the first step? How do I book a Smile Design consultation?",
    a: "WhatsApp Dr. Amit Pawar's team directly at +91 98605 32742 with a brief description of your concern (and photos, if you are comfortable). You will receive a response within 2 hours. Alternatively, call the clinic or submit the inquiry form on this page. The first consultation includes a clinical examination and a digital simulation walkthrough.",
  },
]

/* ── FAQ schema builder ────────────────────────────────────── */
function buildSmileFaqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }
}

/* ── Inline FAQ accordion ──────────────────────────────────── */
function SmileFaq({ items }) {
  const [open, setOpen] = useState(null)
  return (
    <div className="sm-faq-list">
      {items.map((item, i) => (
        <div key={i} className={`sm-faq-item${open === i ? ' sm-faq-item--open' : ''}`}>
          <button
            type="button"
            className="sm-faq-q"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span>{item.q}</span>
            <FaChevronDown className={`sm-faq-chevron${open === i ? ' sm-faq-chevron--up' : ''}`} />
          </button>
          {open === i && <p className="sm-faq-a">{item.a}</p>}
        </div>
      ))}
    </div>
  )
}

/* ── Lead form ─────────────────────────────────────────────── */
function SmileLeadForm() {
  const [fields, setFields] = useState({ name: '', mobile: '', email: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!fields.name.trim()) e.name = 'Name is required'
    if (!fields.mobile.trim()) e.mobile = 'Mobile number is required'
    else if (!/^[6-9]\d{9}$/.test(fields.mobile.trim())) e.mobile = 'Enter a valid 10-digit Indian mobile number'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length) { setErrors(e2); return }
    setSubmitted(true)
  }

  const waMsg = encodeURIComponent(
    `Hi Astra Dental, I'd like a Smile Design consultation. My name is ${fields.name} and my number is ${fields.mobile}.`
  )

  if (submitted) {
    return (
      <div className="sm-form-success">
        <FaCheckCircle className="sm-form-success-icon" />
        <h3>Thanks, {fields.name.split(' ')[0]}!</h3>
        <p>Dr. Amit Pawar's team will call you within 4 hours. Your photos are safe — send them securely on WhatsApp.</p>
        <a
          href={`https://wa.me/919860532742?text=${waMsg}`}
          target="_blank"
          rel="noreferrer"
          className="sm-btn-wa"
        >
          <FaWhatsapp /> Send Photos on WhatsApp
        </a>
      </div>
    )
  }

  return (
    <form className="sm-form" onSubmit={handleSubmit} noValidate>
      <div className="sm-form-group">
        <label htmlFor="sm-name">Full Name *</label>
        <input
          id="sm-name"
          type="text"
          placeholder="Your full name"
          value={fields.name}
          onChange={(ev) => setFields({ ...fields, name: ev.target.value })}
          autoComplete="name"
        />
        {errors.name && <span className="sm-form-error">{errors.name}</span>}
      </div>
      <div className="sm-form-group">
        <label htmlFor="sm-mobile">Mobile Number *</label>
        <input
          id="sm-mobile"
          type="tel"
          placeholder="10-digit mobile number"
          value={fields.mobile}
          onChange={(ev) => setFields({ ...fields, mobile: ev.target.value })}
          autoComplete="tel"
          maxLength={10}
        />
        {errors.mobile && <span className="sm-form-error">{errors.mobile}</span>}
      </div>
      <div className="sm-form-group">
        <label htmlFor="sm-email">Email <span className="sm-form-optional">(optional)</span></label>
        <input
          id="sm-email"
          type="email"
          placeholder="your@email.com"
          value={fields.email}
          onChange={(ev) => setFields({ ...fields, email: ev.target.value })}
          autoComplete="email"
        />
      </div>
      <button type="submit" className="sm-btn-submit">
        Get My Free Smile Analysis →
      </button>
      <p className="sm-form-note">No spam. No obligation. Response within 4 hours.</p>
    </form>
  )
}

/* ── Main Page ─────────────────────────────────────────────── */
function SmileMakeoverPage() {
  const imgBefore = galleryItems[1]?.image
  const imgAfter  = galleryItems[0]?.image

  return (
    <>
      <SEOComponent
        title="Smile Design & Smile Makeover in Chembur Mumbai | Dr. Amit Pawar | Astra Dental"
        description="Stop hiding behind a closed-lip smile. Expert Smile Design & Makeover in Chembur, Mumbai by Dr. Amit Pawar — Guinness World Record Holder. Veneers, gummy smile, gaps, crooked teeth fixed. Book free analysis."
        keywords="smile design Chembur, smile makeover Mumbai, veneer dentist Chembur, gummy smile treatment Mumbai, crooked teeth Chembur, dental veneers Chembur, Dr Amit Pawar smile design, best cosmetic dentist Chembur"
        path="/smile-makeover-chembur"
        schema={[buildSmileFaqSchema()]}
      />

      {/* ── 1. HERO ─────────────────────────────────────────── */}
      <section className="sm-hero">
        <div className="sm-hero-inner container">
          <div className="sm-hero-text">
            <div className="sm-hero-badge">
              <span>Chembur, Mumbai · Smile Design Specialist</span>
            </div>
            <h1 className="sm-hero-headline">
              Stop Hiding Behind<br />
              <em className="sm-hero-accent">a Closed-Lip Smile.</em>
            </h1>
            <p className="sm-hero-sub">
              Advanced Smile Design &amp; Makeover by Dr. Amit Pawar — Guinness World Record Holder.
              Gummy smile, crooked teeth, gaps, dark teeth, veneers — one expert, one clinic, one plan.
            </p>
            <div className="sm-hero-actions">
              <a
                href={`https://wa.me/919860532742?text=${encodeURIComponent('Hi Astra Dental, I want a free Smile Design analysis.')}`}
                target="_blank"
                rel="noreferrer"
                className="sm-btn-wa sm-btn-wa--lg"
              >
                <FaWhatsapp /> WhatsApp for Free Analysis
              </a>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="sm-btn-phone">
                <FaPhone /> Call Now
              </a>
            </div>
            <div className="sm-hero-trust">
              <div className="sm-trust-item"><FaCheckCircle /> Guinness World Record Holder</div>
              <div className="sm-trust-item"><FaCheckCircle /> 5000+ Smile Transformations</div>
              <div className="sm-trust-item"><FaCheckCircle /> 15+ Years Experience</div>
              <div className="sm-trust-item"><FaCheckCircle /> Digital Smile Design (DSD) Certified</div>
            </div>
          </div>
          <div className="sm-hero-stats">
            <div className="sm-stat-card">
              <span className="sm-stat-value">5000+</span>
              <span className="sm-stat-label">Smiles Transformed</span>
            </div>
            <div className="sm-stat-card">
              <span className="sm-stat-value">98%</span>
              <span className="sm-stat-label">Satisfaction Rate</span>
            </div>
            <div className="sm-stat-card">
              <span className="sm-stat-value">15+</span>
              <span className="sm-stat-label">Years of Expertise</span>
            </div>
            <div className="sm-stat-card sm-stat-card--gold">
              <span className="sm-stat-value">★ 4.9</span>
              <span className="sm-stat-label">Google Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. RECOGNITION / CONDITIONS GRID ───────────────── */}
      <section className="sm-conditions">
        <div className="container sm-conditions-inner">
          <div className="sm-section-header">
            <p className="sm-eyebrow">We Recognize Your Concern</p>
            <h2 className="sm-section-title">
              Your Smile Challenge Has a <em>Name — and a Fix</em>
            </h2>
            <p className="sm-section-sub">
              Every condition below is diagnosable, treatable, and transformable.
              Tap your concern to start a private WhatsApp conversation with Dr. Amit Pawar's team.
            </p>
          </div>
          <div className="sm-cond-grid">
            {CONDITIONS.map((c) => (
              <a
                key={c.id}
                href={`https://wa.me/919860532742?text=${encodeURIComponent(c.waText)}`}
                target="_blank"
                rel="noreferrer"
                className="sm-cond-card"
              >
                <span className="sm-cond-num">{String(c.id).padStart(2, '0')}</span>
                <h3 className="sm-cond-name">{c.name}</h3>
                <p className="sm-cond-desc">{c.desc}</p>
                <span className="sm-cond-cta">
                  <FaWhatsapp /> Get Free Expert Analysis
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. BEFORE / AFTER ───────────────────────────────── */}
      <section className="sm-ba container inner-page">
        <div className="sm-section-header sm-section-header--light">
          <p className="eyebrow">Real Patients. Real Results.</p>
          <h2>Smile Transformations by Dr. Amit Pawar</h2>
        </div>
        <div className="sm-ba-grid">
          {BA_CASES.map((c) => (
            <div key={c.problem} className="sm-ba-card">
              <div className="sm-ba-images">
                <div className="sm-ba-img-wrap">
                  <img src={imgBefore} alt={`Before: ${c.problem}`} className="sm-ba-img" loading="lazy" />
                  <span className="sm-ba-label">Before</span>
                </div>
                <div className="sm-ba-img-wrap">
                  <img src={imgAfter} alt={`After: ${c.treatment}`} className="sm-ba-img" loading="lazy" />
                  <span className="sm-ba-label sm-ba-label--after">After</span>
                </div>
              </div>
              <div className="sm-ba-info">
                <p className="sm-ba-problem"><strong>Problem:</strong> {c.problem}</p>
                <p className="sm-ba-treat"><strong>Treatment:</strong> {c.treatment}</p>
                <p className="sm-ba-result"><strong>Result:</strong> {c.result}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="sm-ba-cta">
          <a
            href={`https://wa.me/919860532742?text=${encodeURIComponent('Hi Astra Dental, I would like to see more smile transformation cases.')}`}
            target="_blank"
            rel="noreferrer"
            className="sm-btn-wa"
          >
            <FaWhatsapp /> See More Transformations on WhatsApp
          </a>
        </div>
      </section>

      {/* ── 4. LEAD FORM ────────────────────────────────────── */}
      <section className="sm-form-section">
        <div className="container sm-form-inner">
          <div className="sm-form-text">
            <p className="sm-eyebrow">Free Smile Analysis</p>
            <h2 className="sm-form-title">
              Find Out Exactly What Your Smile Needs
            </h2>
            <p className="sm-form-sub">
              Share your details. Dr. Amit Pawar's team calls you within 4 hours
              with a clear, jargon-free assessment — no obligation.
            </p>
            <ul className="sm-form-promises">
              <li><FaCheckCircle /> No pressure. No upselling.</li>
              <li><FaCheckCircle /> Response within 4 hours</li>
              <li><FaCheckCircle /> Photos accepted securely via WhatsApp</li>
              <li><FaCheckCircle /> First consultation includes digital smile preview</li>
            </ul>
          </div>
          <div className="sm-form-card">
            <h3 className="sm-form-card-title">Request Your Free Analysis</h3>
            <SmileLeadForm />
          </div>
        </div>
      </section>

      {/* ── 5. ABOUT DR. AMIT PAWAR ─────────────────────────── */}
      <section className="sm-about container inner-page">
        <div className="sm-about-photo-wrap">
          <img src={drAmitPhoto} alt="Dr. Amit Pawar — Smile Design Expert, Chembur Mumbai" className="sm-about-photo" />
        </div>
        <div className="sm-about-content">
          <p className="eyebrow">About Your Doctor</p>
          <h2 className="sm-about-name">Dr. Amit Rajabhau Pawar</h2>
          <p className="sm-about-qual">BDS (GDC Mumbai) · MDS (SDC Chennai) · Periodontology &amp; Implantology</p>
          <ul className="sm-about-points">
            {DR_POINTS.map((pt) => (
              <li key={pt}>
                <FaCheckCircle className="sm-about-check" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
          <a
            href={`https://wa.me/919860532742?text=${encodeURIComponent('Hi Dr. Amit Pawar, I would like to book a Smile Design consultation.')}`}
            target="_blank"
            rel="noreferrer"
            className="sm-btn-wa"
          >
            <FaWhatsapp /> Book Consultation With Dr. Amit
          </a>
        </div>
      </section>

      {/* ── 6. LOCAL SEO + MAP ───────────────────────────────── */}
      <section className="sm-map-section">
        <div className="container sm-map-inner">
          <div className="sm-map-details">
            <p className="sm-eyebrow">Find Us in Chembur, Mumbai</p>
            <h2 className="sm-map-title">Astra Dental Clinic</h2>
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
            <a
              href={`https://wa.me/919860532742?text=${encodeURIComponent('Hi Astra Dental, I want directions to your clinic in Chembur.')}`}
              target="_blank"
              rel="noreferrer"
              className="sm-btn-wa"
            >
              <FaWhatsapp /> WhatsApp for Directions
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

      {/* ── 7. FAQ ───────────────────────────────────────────── */}
      <section className="sm-faq-section container inner-page">
        <div className="sm-section-header sm-section-header--light">
          <p className="eyebrow">Frequently Asked Questions</p>
          <h2>Everything You Need to Know About Smile Design</h2>
          <p className="sm-section-sub sm-section-sub--dark">
            20 questions answered by Dr. Amit Pawar's team so you walk in informed.
          </p>
        </div>
        <div className="sm-faq-cols">
          <SmileFaq items={FAQS.slice(0, 10)} />
          <SmileFaq items={FAQS.slice(10)} />
        </div>
        <div className="sm-faq-cta">
          <p>Still have a question? Dr. Amit Pawar's team is on WhatsApp.</p>
          <a
            href={`https://wa.me/919860532742?text=${encodeURIComponent('Hi Astra Dental, I have a question about Smile Design.')}`}
            target="_blank"
            rel="noreferrer"
            className="sm-btn-wa"
          >
            <FaWhatsapp /> Ask on WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}

export default SmileMakeoverPage
