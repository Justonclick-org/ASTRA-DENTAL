/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import { FaPhoneAlt } from 'react-icons/fa'
import { siteConfig } from '../constants/siteConfig'

function CallButton() {
  return (
    <a className="floating-btn call" href={`tel:${siteConfig.phone}`} aria-label="Call now">
      <FaPhoneAlt />
    </a>
  )
}

export default CallButton
