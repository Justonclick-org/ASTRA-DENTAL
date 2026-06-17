/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import { useState } from 'react'

function FaqAccordion({ items }) {
  const [active, setActive] = useState(0)

  return (
    <div className="faq-list">
      {items.map((item, index) => (
        <article key={item.question} className="faq-item">
          <button
            type="button"
            className="faq-trigger"
            onClick={() => setActive(active === index ? -1 : index)}
            aria-expanded={active === index}
          >
            {item.question}
          </button>
          {active === index && <p>{item.answer}</p>}
        </article>
      ))}
    </div>
  )
}

export default FaqAccordion
