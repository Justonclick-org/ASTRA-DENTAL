/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import WhatsAppButton from '../components/WhatsAppButton'
import CallButton from '../components/CallButton'
import StickyAppointmentButton from '../components/StickyAppointmentButton'
import Breadcrumb from '../components/Breadcrumb'
import useScrollToTop from '../hooks/useScrollToTop'

function titleCase(segment) {
  return segment
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

function buildBreadcrumb(pathname) {
  const segments = pathname.split('/').filter(Boolean)
  const crumbs = [{ label: 'Home', path: '/' }]

  segments.forEach((segment, index) => {
    const path = `/${segments.slice(0, index + 1).join('/')}`
    crumbs.push({ label: titleCase(segment), path })
  })

  return crumbs
}

function MainLayout() {
  const { pathname } = useLocation()
  useScrollToTop()

  return (
    <>
      <Navbar />
      <main>
        <Breadcrumb items={buildBreadcrumb(pathname)} />
        <Outlet />
      </main>
      <Footer />
      <StickyAppointmentButton />
      <CallButton />
      <WhatsAppButton />
      <ScrollTop />
    </>
  )
}

export default MainLayout
