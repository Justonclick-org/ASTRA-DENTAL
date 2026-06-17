/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import { motion } from 'framer-motion'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import Button from './Button'
import { fadeUp, staggerContainer } from '../animations/motionVariants'

function Hero({ data, slides = [] }) {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <motion.div
          className="hero-copy"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p className="eyebrow" variants={fadeUp}>
            Premium Dental Care
          </motion.p>
          <motion.h1 variants={fadeUp}>{data.title}</motion.h1>
          <motion.p variants={fadeUp} className="hero-subtitle">
            {data.subtitle}
          </motion.p>
          <motion.p variants={fadeUp} className="hero-trust">
            Chembur, Mumbai • Family, cosmetic, implant, and smile care
          </motion.p>
          <motion.div className="hero-badges" variants={fadeUp}>
            <span>Advanced Technology</span>
            <span>Pain-Free Dentistry</span>
            <span>Same-Day Consultations</span>
          </motion.div>
          <motion.div variants={fadeUp} className="hero-actions">
            <Button to="/book-appointment">Book Appointment</Button>
            <Button href="tel:+919876543210" variant="ghost">
              Call Now
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3200, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            spaceBetween={0}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.title}>
                <article className="hero-card hero-slide-card">
                  <img src={slide.image} alt={slide.title} className="hero-slide-image" loading="eager" />
                  <div className="hero-slide-overlay">
                    <p className="eyebrow">Clinic Experience</p>
                    <h3>{slide.title}</h3>
                    <p>{slide.caption}</p>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="hero-metrics hero-card">
            {data.stats.map((item) => (
              <div className="metric" key={item.label}>
                <h3>{item.value}</h3>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
