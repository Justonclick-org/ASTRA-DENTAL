/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'

function ReviewCard({ review }) {
  return (
    <motion.article className="review-card" whileHover={{ y: -5 }} transition={{ duration: 0.28 }}>
      <div className="stars" aria-label={`${review.rating} out of 5 stars`}>
        {Array.from({ length: review.rating }, (_, i) => (
          <FaStar key={`star-${i}`} />
        ))}
      </div>
      <p className="review-quote">{review.quote}</p>
      <h3>{review.name}</h3>
      <span>{review.treatment}</span>
    </motion.article>
  )
}

export default ReviewCard
