/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import { FaWhatsapp } from 'react-icons/fa'
import { siteConfig } from '../constants/siteConfig'

function WhatsAppButton() {
  return (
    <a
      className="floating-btn whatsapp"
      href={`https://wa.me/${siteConfig.whatsapp}`}
      aria-label="Chat on WhatsApp"
      target="_blank"
      rel="noreferrer"
    >
      <FaWhatsapp />
    </a>
  )
}

export default WhatsAppButton
