/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import WhatsAppButton from '../components/WhatsAppButton'
import CallButton from '../components/CallButton'
import StickyAppointmentButton from '../components/StickyAppointmentButton'
import BookingModal from '../components/BookingModal'
import { BookingProvider } from '../context/BookingContext'
import useScrollToTop from '../hooks/useScrollToTop'

function MainLayout() {
  useScrollToTop()

  return (
    <BookingProvider>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <StickyAppointmentButton />
      <CallButton />
      <WhatsAppButton />
      <ScrollTop />
      <BookingModal />
    </BookingProvider>
  )
}

export default MainLayout
