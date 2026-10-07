/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import Button from '../components/Button'
import SEOComponent from '../components/SEOComponent'

function NotFoundPage() {
  return (
    <>
      <SEOComponent
        title="Page Not Found | Astra Dental Clinic"
        description="The requested Astra Dental Clinic page could not be found. Visit the home page or contact the clinic for assistance."
        path="/404"
        noindex
      />
      <section className="container inner-page not-found">
        <h1>404</h1>
        <p>The page you are looking for does not exist.</p>
        <Button to="/">Back to Home</Button>
      </section>
    </>
  )
}

export default NotFoundPage
