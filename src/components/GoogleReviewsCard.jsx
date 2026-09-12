/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import { FaStar, FaGoogle, FaExternalLinkAlt } from 'react-icons/fa'
import { siteConfig } from '../constants/siteConfig'

function GoogleReviewsCard({ compact = false }) {
  return (
    <a
      href={siteConfig.googleReviewsUrl}
      target="_blank"
      rel="noreferrer"
      className={`google-reviews-card${compact ? ' google-reviews-card--compact' : ''}`}
    >
      <FaGoogle className="google-reviews-icon" />
      <div className="stars" aria-hidden="true">
        {Array.from({ length: 5 }, (_, i) => <FaStar key={`gstar-${i}`} />)}
      </div>
      <h3>Read Our Verified Reviews</h3>
      <p>See genuine patient reviews for Astra Dental Clinic straight from our Google Business Profile.</p>
      <span className="google-reviews-cta">View on Google <FaExternalLinkAlt /></span>
    </a>
  )
}

export default GoogleReviewsCard
