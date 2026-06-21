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
import VideoCard from '../components/VideoCard'
import CTASection from '../components/CTASection'
import { videos } from '../data/videoData'
import { fadeUp, staggerContainer } from '../animations/motionVariants'

const bannerImg = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80'

function VideoLibraryPage() {
  return (
    <>
      <SEOComponent
        title="Video Library | Astra Dental Clinic"
        description="Watch patient education videos, doctor insights, clinic tour and oral health tips from Astra Dental Clinic."
        path="/video-library"
      />

      <PageBanner
        eyebrow="Video Library"
        title="Patient Education"
        accentTitle="& Insights"
        description="Watch clinic tours, treatment explanations and real patient stories."
        bgImage={bannerImg}
      />

      <section className="container inner-page">
        <SectionTitle eyebrow="Videos" title="Watch &" accentTitle="Learn" />
        <motion.div
          className="grid grid-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {videos.map((video) => (
            <motion.div key={video.title} variants={fadeUp}>
              <VideoCard video={video} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <CTASection />
    </>
  )
}

export default VideoLibraryPage
