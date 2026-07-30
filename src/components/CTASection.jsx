/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import { motion } from 'framer-motion'
import { FaPhone, FaWhatsapp, FaCalendarAlt } from 'react-icons/fa'
import { useBooking } from '../context/BookingContext'
import { siteConfig } from '../constants/siteConfig'
import { fadeUp, slideLeft, staggerContainer } from '../animations/motionVariants'

function CTASection({
  title = 'Ready for a Healthier Smile?',
  description = 'Call us, WhatsApp, or book online — we confirm your slot within 2 hours.',
}) {
  const { openBooking } = useBooking()

  return (
    <motion.section
      className="cta-section container"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div variants={slideLeft}>
        <p className="eyebrow">Get In Touch</p>
        <h2>{title}</h2>
        <p>{description}</p>
      </motion.div>

      <motion.div className="cta-actions" variants={fadeUp}>
        <a
          href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
          className="btn btn-primary"
        >
          <FaPhone style={{ marginRight: 8 }} />
          {siteConfig.phone}
        </a>
        <button type="button" className="btn btn-whatsapp" onClick={openBooking}>
          <FaWhatsapp style={{ marginRight: 8 }} />
          WhatsApp Booking
        </button>
        <button type="button" className="btn btn-ghost" onClick={openBooking}>
          <FaCalendarAlt style={{ marginRight: 8 }} />
          Book Online
        </button>
      </motion.div>
    </motion.section>
  )
}

export default CTASection
