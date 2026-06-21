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
import DoctorCard from '../components/DoctorCard'
import CTASection from '../components/CTASection'
import { doctors } from '../data/doctorData'
import { fadeUp, staggerContainer } from '../animations/motionVariants'

const bannerImg = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80'

function TeamPage() {
  return (
    <>
      <SEOComponent
        title="Dr. Amit Pawar & Team | Astra Dental Clinic Chembur"
        description="Meet Dr. Amit Pawar (BDS, MDS) and the specialist dental team at Astra Dental Clinic, Chembur Mumbai — expertise in implants, endodontics, orthodontics and cosmetic dentistry."
        keywords="Dr Amit Pawar MDS Chembur, dental team Chembur Mumbai, dentist Chembur, implant specialist Mumbai, orthodontist Chembur, endodontist Chembur"
        path="/our-team"
      />

      <PageBanner
        eyebrow="Our Experts"
        title="Meet Our"
        accentTitle="Specialists"
        description="A dedicated team of experienced dental professionals committed to your long-term oral health."
        bgImage={bannerImg}
      />

      <section className="container inner-page">
        <SectionTitle
          eyebrow="Our Team"
          title="Expert"
          accentTitle="Dental Professionals"
          description="Each specialist brings advanced training, professional memberships, and a genuine commitment to patient-first care."
        />
        <motion.div
          className="doctor-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {doctors.map((doctor) => (
            <motion.div key={doctor.id} variants={fadeUp}>
              <DoctorCard doctor={doctor} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="team-values-strip">
        <div className="container team-values-inner">
          {[
            { stat: '40+', label: 'Years Combined Experience' },
            { stat: '5000+', label: 'Patients Treated' },
            { stat: '3', label: 'Specialist Dentists' },
            { stat: '98%', label: 'Patient Satisfaction' },
          ].map((item) => (
            <div className="team-value-item" key={item.label}>
              <strong>{item.stat}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  )
}

export default TeamPage
