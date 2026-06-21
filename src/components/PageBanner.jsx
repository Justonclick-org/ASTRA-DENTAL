/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import { motion } from 'framer-motion'
import { staggerContainer, slideRight, fadeUp } from '../animations/motionVariants'

function PageBanner({ eyebrow, title, accentTitle, description, bgImage }) {
  return (
    <motion.section
      className={`page-banner${bgImage ? ' page-banner-photo' : ''}`}
      style={bgImage ? { backgroundImage: `url(${bgImage})` } : undefined}
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {bgImage && <div className="page-banner-overlay" aria-hidden="true" />}

      <div className="container page-banner-inner">
        {eyebrow && (
          <motion.p className="eyebrow" variants={slideRight}>
            {eyebrow}
          </motion.p>
        )}

        <motion.h1 variants={fadeUp}>
          {title}
          {accentTitle && <> <em>{accentTitle}</em></>}
        </motion.h1>

        {description && (
          <motion.p className="page-banner-desc" variants={fadeUp}>
            {description}
          </motion.p>
        )}
      </div>
    </motion.section>
  )
}

export default PageBanner
