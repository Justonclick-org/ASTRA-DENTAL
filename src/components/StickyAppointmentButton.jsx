/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import { useBooking } from '../context/BookingContext'

function StickyAppointmentButton() {
  const { openBooking } = useBooking()
  return (
    <button type="button" className="sticky-appointment-btn" onClick={openBooking}>
      Book Appointment
    </button>
  )
}

export default StickyAppointmentButton
