/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import { motion } from 'framer-motion'
import Button from './Button'

function TreatmentCard({ treatment }) {
  return (
    <motion.article
      className="card treatment-card"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
    >
      <div className="card-body">
        <h3>{treatment.title}</h3>
        <p>{treatment.shortDescription}</p>
        <Button to={`/${treatment.slug}`} variant="ghost">
          Learn More
        </Button>
      </div>
    </motion.article>
  )
}

export default TreatmentCard
