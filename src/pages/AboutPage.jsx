/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import { motion } from 'framer-motion'
import SEOComponent from '../components/SEOComponent'
import PageBanner from '../components/PageBanner'
import SectionTitle from '../components/SectionTitle'
import CTASection from '../components/CTASection'
import { clinicStory, mission, vision, coreValues } from '../data/aboutData'
import { fadeUp, staggerContainer } from '../animations/motionVariants'

const bannerImg = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80'

function AboutPage() {
  return (
    <>
      <SEOComponent
        title="About Dr. Amit Pawar | Astra Dental Clinic Chembur Mumbai"
        description="Learn about Dr. Amit Pawar (BDS, MDS) and Astra Dental Clinic in Chembur, Mumbai — a trusted multi-specialty dental practice built on clinical excellence, transparent care and a patient-first approach."
        keywords="Dr Amit Pawar dentist Chembur, about Astra Dental Clinic, MDS dentist Mumbai, dental clinic Chembur, best dentist Chembur Mumbai"
        path="/about"
      />

      <PageBanner
        eyebrow="Our Story"
        title="Built On Trust,"
        accentTitle="Clinical Excellence"
        description="A patient-first clinic committed to ethical, advanced and compassionate dental care in Chembur, Mumbai."
        bgImage={bannerImg}
      />

      {/* Clinic story */}
      <section className="container inner-page">
        <SectionTitle
          eyebrow="Clinic Story"
          title="Who We"
          accentTitle="Are"
        />
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ maxWidth: '72ch', lineHeight: 1.82 }}
        >
          {clinicStory}
        </motion.p>
      </section>

      {/* Mission & Vision */}
      <section className="container inner-page">
        <motion.div
          className="grid grid-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.article className="card simple-card" variants={fadeUp}>
            <h3>Mission</h3>
            <p style={{ marginTop: 10, color: 'var(--text-body)', lineHeight: 1.72 }}>{mission}</p>
          </motion.article>
          <motion.article className="card simple-card" variants={fadeUp}>
            <h3>Vision</h3>
            <p style={{ marginTop: 10, color: 'var(--text-body)', lineHeight: 1.72 }}>{vision}</p>
          </motion.article>
        </motion.div>
      </section>

      {/* Core Values */}
      <section className="container inner-page">
        <SectionTitle
          eyebrow="Core Values"
          title="Principles That"
          accentTitle="Define Astra"
        />
        <motion.div
          className="grid grid-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {coreValues.map((value) => (
            <motion.article key={value} className="card simple-card" variants={fadeUp}>
              <h3>{value}</h3>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <CTASection />
    </>
  )
}

export default AboutPage
