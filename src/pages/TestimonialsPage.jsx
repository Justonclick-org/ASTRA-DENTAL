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
import GoogleReviewsCard from '../components/GoogleReviewsCard'
import CTASection from '../components/CTASection'
import { fadeUp } from '../animations/motionVariants'

const bannerImg = 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1920&q=80'

function TestimonialsPage() {
  return (
    <>
      <SEOComponent
        title="Patient Reviews | Astra Dental Clinic Chembur | Dr. Amit Pawar"
        description="Read verified Google reviews for Astra Dental Clinic in Chembur Mumbai, led by Dr. Amit Pawar."
        keywords="Astra Dental Clinic reviews, Dr Amit Pawar reviews, best dentist Chembur reviews, dental clinic Chembur testimonials, patient reviews dentist Mumbai"
        path="/testimonials"
      />

      <PageBanner
        eyebrow="Patient Stories"
        title="Trusted By"
        accentTitle="Our Patients"
        description="See what our patients say about Astra Dental — straight from our verified Google Business Profile."
        bgImage={bannerImg}
      />

      <section className="container inner-page">
        <SectionTitle eyebrow="Reviews" title="What Patients" accentTitle="Say About Us" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          style={{ maxWidth: 480, margin: '0 auto' }}
        >
          <GoogleReviewsCard />
        </motion.div>
      </section>

      <CTASection />
    </>
  )
}

export default TestimonialsPage
