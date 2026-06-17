/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import { Link } from 'react-router-dom'

function StickyAppointmentButton() {
  return (
    <Link to="/book-appointment" className="sticky-appointment-btn">
      Book Appointment
    </Link>
  )
}

export default StickyAppointmentButton
