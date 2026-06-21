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
import { fadeUp, staggerContainer, staggerFast, scalePop, slideRight } from '../animations/motionVariants'

function Hero({ data, slides = [] }) {
  return (
    <>
      {/* ── Full-bleed Hero ── */}
      <section className="hero-section">

        {/* Background carousel */}
        <div className="hero-bg-slider">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            spaceBetween={0}
            className="hero-bg-swiper"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.title}>
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="hero-bg-img"
                  loading="eager"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="hero-overlay" />
        </div>

        {/* Foreground content */}
        <div className="container">
          <motion.div
            className="hero-content"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Rating badge */}
            <motion.div className="hero-rating-badge" variants={slideRight}>
              <span className="stars">★★★★★</span>
              <span>4.9 · 500+ Google Reviews</span>
            </motion.div>

            {/* Eyebrow */}
            <motion.p className="eyebrow hero-eyebrow" variants={fadeUp}>
              Premium Dental Care · Chembur, Mumbai
            </motion.p>

            {/* Headline with italic gold accent */}
            <motion.h1 variants={fadeUp}>
              Advanced Dental Care For Healthy,{' '}
              <em>Confident Smiles.</em>
            </motion.h1>

            {/* Subtitle */}
            <motion.p className="hero-subtitle" variants={fadeUp}>
              {data.subtitle}
            </motion.p>

            {/* Badges */}
            <motion.div className="hero-badges" variants={staggerFast}>
              {['Advanced Technology', 'Pain-Free Dentistry', 'Same-Day Consultations'].map((badge) => (
                <motion.span key={badge} variants={scalePop}>
                  {badge}
                </motion.span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div className="hero-actions" variants={fadeUp}>
              <Button to="/book-appointment">Book Appointment</Button>
              <Button href="tel:+919860532742" variant="ghost">
                Call Now →
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <motion.div
        className="hero-stats-strip"
        variants={staggerFast}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        {data.stats.map((stat) => (
          <motion.div className="hero-stat" key={stat.label} variants={fadeUp}>
            <span className="hero-stat-value">{stat.value}</span>
            <span className="hero-stat-label">{stat.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </>
  )
}

export default Hero
