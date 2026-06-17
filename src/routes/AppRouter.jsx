/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import { lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

const HomePage = lazy(() => import('../pages/HomePage'))
const AboutPage = lazy(() => import('../pages/AboutPage'))
const TeamPage = lazy(() => import('../pages/TeamPage'))
const TreatmentsPage = lazy(() => import('../pages/TreatmentsPage'))
const TreatmentDetailPage = lazy(() => import('../pages/TreatmentDetailPage'))
const GalleryPage = lazy(() => import('../pages/GalleryPage'))
const VideoLibraryPage = lazy(() => import('../pages/VideoLibraryPage'))
const TestimonialsPage = lazy(() => import('../pages/TestimonialsPage'))
const PricingPage = lazy(() => import('../pages/PricingPage'))
const BlogPage = lazy(() => import('../pages/BlogPage'))
const FaqPage = lazy(() => import('../pages/FaqPage'))
const ContactPage = lazy(() => import('../pages/ContactPage'))
const AppointmentPage = lazy(() => import('../pages/AppointmentPage'))
const PrivacyPolicyPage = lazy(() => import('../pages/PrivacyPolicyPage'))
const TermsPage = lazy(() => import('../pages/TermsPage'))
const MedicalDisclaimerPage = lazy(() => import('../pages/MedicalDisclaimerPage'))
const CookiePolicyPage = lazy(() => import('../pages/CookiePolicyPage'))
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'))

function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/our-team" element={<TeamPage />} />
        <Route path="/treatments" element={<TreatmentsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/video-library" element={<VideoLibraryPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/faqs" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/book-appointment" element={<AppointmentPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-conditions" element={<TermsPage />} />
        <Route path="/medical-disclaimer" element={<MedicalDisclaimerPage />} />
        <Route path="/cookie-policy" element={<CookiePolicyPage />} />

        <Route path="/dental-implants" element={<TreatmentDetailPage slug="dental-implants" />} />
        <Route
          path="/root-canal-treatment"
          element={<TreatmentDetailPage slug="root-canal-treatment" />}
        />
        <Route path="/braces-aligners" element={<TreatmentDetailPage slug="braces-aligners" />} />
        <Route path="/teeth-whitening" element={<TreatmentDetailPage slug="teeth-whitening" />} />
        <Route path="/smile-makeover" element={<TreatmentDetailPage slug="smile-makeover" />} />
        <Route
          path="/pediatric-dentistry"
          element={<TreatmentDetailPage slug="pediatric-dentistry" />}
        />
        <Route
          path="/cosmetic-dentistry"
          element={<TreatmentDetailPage slug="cosmetic-dentistry" />}
        />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default AppRouter
