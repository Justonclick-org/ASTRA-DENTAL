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

function HomePage() {
  return (
    <>
      <SEOComponent
        title="Astra Dental Clinic | Advanced Dental Care For Healthy, Confident Smiles"
        description="Premium multi-specialty dental clinic for implants, root canal, braces, aligners, whitening, smile makeover and family dental care."
        path="/"
        schema={[buildLocalBusinessSchema(), buildFaqSchema(homeFaqs)]}
      />

      <Hero data={heroData} slides={heroSlides} />

      <section className="container inner-page">
        <SectionTitle eyebrow="Why Choose Astra" title="Patient-First Clinical Excellence" />
        <div className="grid grid-3">
          {whyChooseData.map((item) => (
            <article key={item} className="card simple-card">
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="container inner-page">
        <SectionTitle eyebrow="Treatments" title="Comprehensive Dental Solutions" />
        <Swiper
          spaceBetween={18}
          slidesPerView={1.05}
          breakpoints={{
            768: { slidesPerView: 2 },
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

      <section className="container inner-page">
        <SectionTitle eyebrow="Our Team" title="Meet Our Specialists" />
        <div className="grid grid-3">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </section>

      <section className="container inner-page">
        <SectionTitle eyebrow="Treatment Journey" title="A Structured Clinical Process" />
        <div className="journey-timeline">
          {treatmentJourneyData.map((step) => (
            <motion.article
              key={step.title}
              className="journey-card journey-card-detailed"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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

      <section className="container inner-page">
        <SectionTitle eyebrow="Before & After" title="Smile Transformation Gallery" />
        <GalleryGrid items={galleryItems.slice(0, 4)} />
      </section>

      <section className="container inner-page">
        <SectionTitle eyebrow="Testimonials" title="What Patients Say" />
        <Swiper spaceBetween={18} slidesPerView={1.1} breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}>
          {testimonials.map((review) => (
            <SwiperSlide key={review.name}>
              <ReviewCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
        <p className="google-review-line">
          Google Reviews: {googleReviews.rating} from {googleReviews.totalReviews}+ reviews.
        </p>
      </section>

      <section className="container inner-page">
        <SectionTitle eyebrow="Video Library" title="Clinic Tour, Insights and Stories" />
        <div className="grid grid-3">
          {videos.slice(0, 3).map((video) => (
            <VideoCard key={video.title} video={video} />
          ))}
        </div>
      </section>

      <section className="container inner-page">
        <SectionTitle eyebrow="FAQs" title="Top Questions" />
        <FaqAccordion items={homeFaqs} />
      </section>

      <CTASection />
    </>
  )
}

export default HomePage
