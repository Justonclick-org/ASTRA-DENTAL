/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import SEOComponent from '../components/SEOComponent'
import SectionTitle from '../components/SectionTitle'
import PricingCard from '../components/PricingCard'
import CTASection from '../components/CTASection'
import { pricingItems, pricingDisclaimer } from '../data/pricingData'

function PricingPage() {
  return (
    <>
      <SEOComponent
        title="Dental Pricing | Astra Dental Clinic"
        description="View sample pricing for consultation, cleaning, root canal, crowns, braces, aligners and implants."
        path="/pricing"
      />
      <section className="container inner-page">
        <SectionTitle eyebrow="Pricing" title="Transparent Sample Pricing" />
        <div className="grid grid-3">
          {pricingItems.map((item) => (
            <PricingCard key={item.service} item={item} />
          ))}
        </div>
        <p className="muted-text">{pricingDisclaimer}</p>
      </section>
      <CTASection />
    </>
  )
}

export default PricingPage
