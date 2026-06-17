/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { motion } from 'framer-motion'
import SEOComponent from '../components/SEOComponent'
import SectionTitle from '../components/SectionTitle'
import GalleryGrid from '../components/GalleryGrid'
import CTASection from '../components/CTASection'
import { galleryItems, beforeAfterCases } from '../data/galleryData'
import { slideLeft, slideRight, staggerContainer } from '../animations/motionVariants'

function GalleryPage() {
  return (
    <>
      <SEOComponent
        title="Smile Gallery | Astra Dental Clinic"
        description="View smile makeovers, implants, whitening, orthodontics, clinic interiors and team moments at Astra Dental Clinic."
        path="/gallery"
      />
      <section className="container inner-page">
        <SectionTitle
          eyebrow="Gallery"
          title="Treatment Outcomes and Clinic Experience"
          description="Realistic before-and-after storytelling helps patients understand the transformation journey before they book."
        />

        <div className="gallery-meta-strip">
          <span className="gallery-chip">Smile Makeovers</span>
          <span className="gallery-chip">Implants</span>
          <span className="gallery-chip">Whitening</span>
          <span className="gallery-chip">Orthodontics</span>
          <span className="gallery-chip">Clinic Interior</span>
        </div>

        <motion.div className="grid gallery-grid" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.article className="gallery-item gallery-item-wide" variants={slideLeft}>
            <div className="before-after-card">
              <div className="before-after-media">
                <img src={beforeAfterCases[0].before} alt={`${beforeAfterCases[0].title} before`} loading="lazy" />
                <span>Before</span>
              </div>
              <div className="before-after-media after">
                <img src={beforeAfterCases[0].after} alt={`${beforeAfterCases[0].title} after`} loading="lazy" />
                <span>After</span>
              </div>
              <div className="before-after-caption">
                <p className="eyebrow">Featured Case</p>
                <h3>{beforeAfterCases[0].title}</h3>
                <p>{beforeAfterCases[0].result}</p>
              </div>
            </div>
          </motion.article>

          <motion.article className="gallery-item" variants={slideRight}>
            <img src={galleryItems[4].image} alt={galleryItems[4].category} loading="lazy" />
            <span>{galleryItems[4].category}</span>
          </motion.article>
        </motion.div>

        <section className="inner-page" style={{ paddingTop: '36px' }}>
          <SectionTitle eyebrow="Before & After" title="Treatment Transformations" />
          <Swiper spaceBetween={18} slidesPerView={1.05} breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}>
            {beforeAfterCases.map((item) => (
              <SwiperSlide key={item.title}>
                <article className="gallery-item">
                  <div className="before-after-card">
                    <div className="before-after-media">
                      <img src={item.before} alt={`${item.title} before`} loading="lazy" />
                      <span>Before</span>
                    </div>
                    <div className="before-after-media after">
                      <img src={item.after} alt={`${item.title} after`} loading="lazy" />
                      <span>After</span>
                    </div>
                    <div className="before-after-caption">
                      <p className="eyebrow">{item.treatment}</p>
                      <h3>{item.title}</h3>
                      <p>{item.result}</p>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <section className="inner-page" style={{ paddingTop: '30px' }}>
          <SectionTitle eyebrow="Clinic Gallery" title="Interior, Equipment and Team" />
          <GalleryGrid items={galleryItems} />
        </section>
      </section>
      <CTASection title="See your own transformation next" description="Book a consultation and let us plan a smile story worth showing." />
    </>
  )
}

export default GalleryPage
