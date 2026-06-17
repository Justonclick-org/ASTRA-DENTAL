/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import { motion } from 'framer-motion'
import { FaPlay } from 'react-icons/fa'

function VideoCard({ video }) {
  return (
    <motion.a
      className="video-card"
      href={video.url}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
    >
      <img src={video.thumbnail} alt={video.title} loading="lazy" />
      <div className="video-overlay">
        <FaPlay />
        <h3>{video.title}</h3>
        <p>{video.category}</p>
      </div>
    </motion.a>
  )
}

export default VideoCard
