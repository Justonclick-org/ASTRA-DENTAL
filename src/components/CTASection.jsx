/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import { motion } from 'framer-motion'
import Button from './Button'
import { fadeUp, slideLeft, staggerContainer } from '../animations/motionVariants'

function CTASection({
  title = 'Book Your Consultation Today',
  description = 'Connect with our specialists for a personalized treatment plan.',
}) {
  return (
    <motion.section
      className="cta-section container"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div variants={slideLeft}>
        <p className="eyebrow">Quick Appointment</p>
        <h2>{title}</h2>
        <p>{description}</p>
      </motion.div>

      <motion.div className="cta-actions" variants={fadeUp}>
        <Button to="/book-appointment">Book Appointment</Button>
        <Button to="/contact" variant="ghost">Contact Clinic</Button>
      </motion.div>
    </motion.section>
  )
}

export default CTASection
