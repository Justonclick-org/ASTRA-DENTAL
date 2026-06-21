/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import SEOComponent from '../components/SEOComponent'
import Hero from '../components/Hero'
import SectionTitle from '../components/SectionTitle'
import TreatmentCard from '../components/TreatmentCard'
import DoctorCard from '../components/DoctorCard'
import GalleryGrid from '../components/GalleryGrid'
import ReviewCard from '../components/ReviewCard'
import VideoCard from '../components/VideoCard'
import FaqAccordion from '../components/FaqAccordion'
import CTASection from '../components/CTASection'
import { treatments } from '../data/treatmentData'
import { doctors } from '../data/doctorData'
import { galleryItems } from '../data/galleryData'
import { heroSlides } from '../data/heroMedia'
import { testimonials, googleReviews } from '../data/testimonialData'
import { videos } from '../data/videoData'
import { heroData, whyChooseData, treatmentJourneyData, homeFaqs } from '../data/homeData'
import { buildFaqSchema, buildLocalBusinessSchema } from '../services/schemaService'
import { fadeUp, staggerContainer } from '../animations/motionVariants'

function HomePage() {
  return (
    <>
      <SEOComponent
        title="Astra Dental Clinic Chembur | Dr. Amit Pawar MDS | Best Dentist in Mumbai"
        description="Astra Dental Clinic in Chembur Mumbai — led by Dr. Amit Pawar, BDS MDS. Dental implants, root canal, braces, aligners, teeth whitening, smile makeover and family dentistry. Call +91 98605 32742."
        keywords="best dentist in Chembur, dental clinic Chembur Mumbai, Dr Amit Pawar dentist, Astra Dental Clinic, dental implants Chembur, root canal Chembur, teeth whitening Mumbai, orthodontist Chembur, painless dentist Mumbai, MDS dentist Chembur"
        path="/"
        schema={[buildLocalBusinessSchema(), buildFaqSchema(homeFaqs)]}
      />

      <Hero data={heroData} slides={heroSlides} />

      {/* Why Choose */}
      <section className="container inner-page">
        <SectionTitle
          eyebrow="Why Choose Astra"
          title="Patient-First"
          accentTitle="Clinical Excellence"
        />
        <motion.div
          className="grid grid-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {whyChooseData.map((item) => (
            <motion.article key={item} className="card simple-card" variants={fadeUp}>
              <h3>{item}</h3>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* Treatments */}
      <section className="container inner-page">
        <SectionTitle
          eyebrow="Treatments"
          title="Comprehensive"
          accentTitle="Dental Solutions"
        />
        <Swiper
          spaceBetween={18}
          slidesPerView={1.05}
          breakpoints={{
            768:  { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {treatments.map((treatment) => (
            <SwiperSlide key={treatment.slug}>
              <TreatmentCard treatment={treatment} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Team */}
      <section className="container inner-page">
        <SectionTitle
          eyebrow="Our Team"
          title="Meet Our"
          accentTitle="Specialists"
        />
        <div className="grid grid-3">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </section>

      {/* Treatment Journey */}
      <section className="container inner-page">
        <SectionTitle
          eyebrow="Treatment Journey"
          title="A Structured"
          accentTitle="Clinical Process"
        />
        <div className="journey-timeline">
          {treatmentJourneyData.map((step) => (
            <motion.article
              key={step.title}
              className="journey-card journey-card-detailed"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <span>{step.step}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="container inner-page">
        <SectionTitle
          eyebrow="Before & After"
          title="Smile"
          accentTitle="Transformation Gallery"
        />
        <GalleryGrid items={galleryItems.slice(0, 4)} />
      </section>

      {/* Testimonials */}
      <section className="container inner-page">
        <SectionTitle
          eyebrow="Testimonials"
          title="What Patients"
          accentTitle="Say About Us"
        />
        <Swiper
          spaceBetween={18}
          slidesPerView={1.1}
          breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
        >
          {testimonials.map((review) => (
            <SwiperSlide key={review.name}>
              <ReviewCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
        <p className="google-review-line">
          Google Reviews: {googleReviews.rating} from {googleReviews.totalReviews}+ verified reviews.
        </p>
      </section>

      {/* Videos */}
      <section className="container inner-page">
        <SectionTitle
          eyebrow="Video Library"
          title="Clinic Tour, Insights"
          accentTitle="and Stories"
        />
        <div className="grid grid-3">
          {videos.slice(0, 3).map((video) => (
            <VideoCard key={video.title} video={video} />
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="container inner-page">
        <SectionTitle
          eyebrow="FAQs"
          title="Top Questions"
          accentTitle="Answered"
        />
        <FaqAccordion items={homeFaqs} />
      </section>

      <CTASection />
    </>
  )
}

export default HomePage
