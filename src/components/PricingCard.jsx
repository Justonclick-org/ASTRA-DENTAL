/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import { motion } from 'framer-motion'

function PricingCard({ item }) {
  return (
    <motion.article className="pricing-card" whileHover={{ y: -4 }} transition={{ duration: 0.25 }}>
      <h3>{item.service}</h3>
      <p>{item.price}</p>
    </motion.article>
  )
}

export default PricingCard
