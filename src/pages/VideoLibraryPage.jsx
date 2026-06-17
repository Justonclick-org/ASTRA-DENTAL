/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import SEOComponent from '../components/SEOComponent'
import SectionTitle from '../components/SectionTitle'
import VideoCard from '../components/VideoCard'
import { videos } from '../data/videoData'

function VideoLibraryPage() {
  return (
    <>
      <SEOComponent
        title="Video Library | Astra Dental Clinic"
        description="Watch patient education videos, doctor insights, clinic tour and oral health tips from Astra Dental Clinic."
        path="/video-library"
      />
      <section className="container inner-page">
        <SectionTitle eyebrow="Video Library" title="Patient Education and Insights" />
        <div className="grid grid-3">
          {videos.map((video) => (
            <VideoCard key={video.title} video={video} />
          ))}
        </div>
      </section>
    </>
  )
}

export default VideoLibraryPage
