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
import { siteConfig } from '../constants/siteConfig'

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
            <motion.a
              className="hero-rating-badge"
              variants={slideRight}
              href={siteConfig.googleReviewsUrl}
              target="_blank"
              rel="noreferrer"
            >
              <span className="stars">★★★★★</span>
              <span>Read Our Reviews on Google</span>
            </motion.a>

            {/* Headline */}
            <motion.h1 variants={fadeUp}>
              {data.title}{' '}
              <em>{data.titleAccent}</em>
            </motion.h1>

            {/* Subtitle */}
            <motion.p className="hero-subtitle" variants={fadeUp}>
              {data.subtitle}
            </motion.p>

            {/* Badges */}
            <motion.div className="hero-badges" variants={staggerFast}>
              {data.badges.map((badge) => (
                <motion.span key={badge} variants={scalePop}>
                  {badge}
                </motion.span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div className="hero-actions" variants={fadeUp}>
              <Button to="/book-appointment">Book Appointment</Button>
              <Button href={`https://wa.me/919860532742`} variant="ghost">
                WhatsApp Consultation
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
        {data.stats.map((stat) =>
          stat.link ? (
            <motion.a
              className="hero-stat"
              key={stat.label}
              variants={fadeUp}
              href={stat.link}
              target="_blank"
              rel="noreferrer"
            >
              <span className="hero-stat-value">{stat.value}</span>
              <span className="hero-stat-label">{stat.label}</span>
            </motion.a>
          ) : (
            <motion.div className="hero-stat" key={stat.label} variants={fadeUp}>
              <span className="hero-stat-value">{stat.value}</span>
              <span className="hero-stat-label">{stat.label}</span>
            </motion.div>
          )
        )}
      </motion.div>
    </>
  )
}

export default Hero
