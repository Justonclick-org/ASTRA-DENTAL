/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import SEOComponent from '../components/SEOComponent'
import SectionTitle from '../components/SectionTitle'
import ReviewCard from '../components/ReviewCard'
import { testimonials, googleReviews } from '../data/testimonialData'

function TestimonialsPage() {
  return (
    <>
      <SEOComponent
        title="Testimonials | Astra Dental Clinic"
        description="Explore real patient success stories, video testimonials and Google reviews for Astra Dental Clinic."
        path="/testimonials"
      />
      <section className="container inner-page">
        <SectionTitle eyebrow="Testimonials" title="Trusted By Thousands of Patients" />
        <div className="grid grid-3">
          {testimonials.map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>
        <article className="card simple-card">
          <h3>Google Reviews</h3>
          <p>{googleReviews.rating} rating from {googleReviews.totalReviews}+ verified reviews.</p>
          <p>{googleReviews.summary}</p>
        </article>
      </section>
    </>
  )
}

export default TestimonialsPage
