/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import { motion } from 'framer-motion'
import { fadeUp } from '../animations/motionVariants'

function SectionTitle({ eyebrow, title, description }) {
  return (
    <motion.div className="section-title" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </motion.div>
  )
}

export default SectionTitle
