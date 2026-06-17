/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import { motion } from 'framer-motion'

function GalleryGrid({ items }) {
  return (
    <div className="gallery-grid">
      {items.map((item, index) => (
        <motion.article
          key={`${item.category}-${index}`}
          className={`gallery-item ${item.variant === 'wide' ? 'gallery-item-wide' : ''}`}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.25 }}
        >
          {item.before && item.after ? (
            <div className="before-after-card">
              <div className="before-after-media">
                <img src={item.before} alt={`${item.title} before`} loading="lazy" />
                <span>Before</span>
              </div>
              <div className="before-after-media after">
                <img src={item.after} alt={`${item.title} after`} loading="lazy" />
                <span>After</span>
              </div>
              <div className="before-after-caption">
                <p className="eyebrow">{item.treatment}</p>
                <h3>{item.title}</h3>
                <p>{item.result}</p>
              </div>
            </div>
          ) : (
            <>
              <img src={item.image} alt={item.category} loading="lazy" />
              <span>{item.category}</span>
            </>
          )}
        </motion.article>
      ))}
    </div>
  )
}

export default GalleryGrid
