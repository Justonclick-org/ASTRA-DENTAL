/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import { motion } from 'framer-motion'
import { fadeUp } from '../animations/motionVariants'

/**
 * accentTitle — italic gold phrase appended after title
 * e.g. title="Patient-First" accentTitle="Clinical Excellence"
 * renders: Patient-First <em>Clinical Excellence</em>
 */
function SectionTitle({ eyebrow, title, accentTitle, description }) {
  return (
    <motion.div
      className="section-title"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>
        {title}
        {accentTitle && <> <em>{accentTitle}</em></>}
      </h2>
      {description && <p className="section-description">{description}</p>}
    </motion.div>
  )
}

export default SectionTitle
