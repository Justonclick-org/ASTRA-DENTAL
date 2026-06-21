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
    <motion.article
      className="doctor-card"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.28 }}
    >
      <div className="doctor-card-img">
        <img src={doctor.image} alt={doctor.name} loading="lazy" />
        <span className="doctor-exp-badge">{doctor.experience} Exp.</span>
      </div>
      <div className="doctor-card-body">
        <p className="doctor-card-spec">{doctor.specialization}</p>
        <h3>{doctor.name}</h3>
        <p className="doctor-card-qual">{doctor.qualification}</p>
        <p className="doctor-card-bio">{doctor.bio}</p>
        <div className="doctor-card-tags">
          {doctor.memberships.map((m) => (
            <span key={m} className="doctor-tag">{m}</span>
          ))}
        </div>
        <p className="doctor-card-langs">
          <strong>Languages:</strong> {doctor.languages.join(' · ')}
        </p>
      </div>
    </motion.article>
  )
}

export default DoctorCard
