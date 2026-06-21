/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import { Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEOComponent from '../components/SEOComponent'
import PageBanner from '../components/PageBanner'
import SectionTitle from '../components/SectionTitle'
import FaqAccordion from '../components/FaqAccordion'
import CTASection from '../components/CTASection'
import { treatments } from '../data/treatmentData'
import { buildFaqSchema } from '../services/schemaService'
import { fadeUp, staggerContainer } from '../animations/motionVariants'

const bannerImg = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=80'

function TreatmentDetailPage({ slug }) {
  const treatment = treatments.find((item) => item.slug === slug)

  if (!treatment) {
    return <Navigate to="/treatments" replace />
  }

  return (
    <>
      <SEOComponent
        title={`${treatment.title} | Astra Dental Clinic`}
        description={treatment.shortDescription}
        path={`/${slug}`}
        schema={[buildFaqSchema(treatment.faqs)]}
      />

      <PageBanner
        eyebrow="Treatment Detail"
        title={treatment.title}
        description={treatment.shortDescription}
        bgImage={bannerImg}
      />

      {/* Quick stats strip */}
      <div className="treatment-highlights-strip">
        <div className="container treatment-highlights-inner">
          {treatment.highlights.map((h) => (
            <div className="treatment-highlight-item" key={h.label}>
              <strong>{h.stat}</strong>
              <span>{h.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* What Is section */}
      <motion.section
        className="container inner-page"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <SectionTitle
          eyebrow="About This Treatment"
          title="What Is"
          accentTitle={treatment.title}
        />
        <motion.p className="treatment-intro-text" variants={fadeUp}>
          {treatment.whatIs}
        </motion.p>
      </motion.section>

      {/* Benefits + Who Needs It */}
      <section className="treatment-detail-split">
        <motion.div
          className="container treatment-split-inner"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="treatment-benefits-card" variants={fadeUp}>
            <p className="eyebrow">Key Benefits</p>
            <h3>Why Choose This Treatment</h3>
            <ul className="treatment-benefit-list">
              {treatment.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="treatment-who-card" variants={fadeUp}>
            <p className="eyebrow">Ideal Candidates</p>
            <h3>Who Needs It?</h3>
            <p>{treatment.whoNeedsIt}</p>
            <div className="treatment-recovery-pill">
              <strong>Recovery: </strong>{treatment.recovery}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Procedure – dark section */}
      <motion.section
        className="treatment-procedure-section"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container">
          <SectionTitle eyebrow="Step by Step" title="The" accentTitle="Procedure" />
          <motion.p className="treatment-procedure-text" variants={fadeUp}>
            {treatment.procedure}
          </motion.p>
        </div>
      </motion.section>

      {/* FAQs */}
      <section className="container inner-page">
        <SectionTitle title="Common" accentTitle="Questions" />
        <FaqAccordion items={treatment.faqs} />
      </section>

      <CTASection />
    </>
  )
}

export default TreatmentDetailPage
