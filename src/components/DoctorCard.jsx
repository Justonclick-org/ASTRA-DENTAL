/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import { motion } from 'framer-motion'

function DoctorCard({ doctor }) {
  return (
    <motion.article className="card doctor-card" whileHover={{ y: -6 }} transition={{ duration: 0.25 }}>
      <img src={doctor.image} alt={doctor.name} loading="lazy" />
      <div className="card-body">
        <h3>{doctor.name}</h3>
        <p>{doctor.qualification}</p>
        <p>{doctor.experience} Experience</p>
        <p>{doctor.specialization}</p>
      </div>
    </motion.article>
  )
}

export default DoctorCard
