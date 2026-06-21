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
import ReviewCard from '../components/ReviewCard'
import CTASection from '../components/CTASection'
import { testimonials, googleReviews } from '../data/testimonialData'
import { fadeUp, staggerContainer } from '../animations/motionVariants'

const bannerImg = 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1920&q=80'

function TestimonialsPage() {
  return (
    <>
      <SEOComponent
        title="Patient Reviews | Astra Dental Clinic Chembur | Dr. Amit Pawar"
        description="Read real patient reviews for Astra Dental Clinic in Chembur Mumbai. Dr. Amit Pawar and team rated 4.9 stars for painless treatment, transparent care and excellent results."
        keywords="Astra Dental Clinic reviews, Dr Amit Pawar reviews, best dentist Chembur reviews, dental clinic Chembur testimonials, patient reviews dentist Mumbai"
        path="/testimonials"
      />

      <PageBanner
        eyebrow="Patient Stories"
        title="Trusted By"
        accentTitle="Thousands"
        description="Real patients, real transformations — see what our community says about Astra Dental."
        bgImage={bannerImg}
      />

      <section className="container inner-page">
        <SectionTitle eyebrow="Reviews" title="What Patients" accentTitle="Say About Us" />
        <motion.div
          className="grid grid-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((review) => (
            <motion.div key={review.name} variants={fadeUp}>
              <ReviewCard review={review} />
            </motion.div>
          ))}
        </motion.div>

        <motion.article
          className="card simple-card"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ marginTop: 32 }}
        >
          <h3>Google Reviews</h3>
          <p>{googleReviews.rating} rating from {googleReviews.totalReviews}+ verified reviews.</p>
          <p>{googleReviews.summary}</p>
        </motion.article>
      </section>

      <CTASection />
    </>
  )
}

export default TestimonialsPage
