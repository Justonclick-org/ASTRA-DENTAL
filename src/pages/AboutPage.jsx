/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import SEOComponent from '../components/SEOComponent'
import SectionTitle from '../components/SectionTitle'
import CTASection from '../components/CTASection'
import { clinicStory, mission, vision, coreValues } from '../data/aboutData'

function AboutPage() {
  return (
    <>
      <SEOComponent
        title="About Astra Dental Clinic | Ethical and Advanced Dentistry"
        description="Learn about Astra Dental Clinic mission, vision and core values focused on ethical, modern and compassionate dental care."
        path="/about"
      />
      <section className="container inner-page">
        <SectionTitle eyebrow="Clinic Story" title="Built On Trust and Clinical Excellence" />
        <p>{clinicStory}</p>
      </section>
      <section className="container inner-page grid grid-2">
        <article className="card simple-card">
          <h3>Mission</h3>
          <p>{mission}</p>
        </article>
        <article className="card simple-card">
          <h3>Vision</h3>
          <p>{vision}</p>
        </article>
      </section>
      <section className="container inner-page">
        <SectionTitle eyebrow="Core Values" title="Principles That Define Astra" />
        <div className="grid grid-3">
          {coreValues.map((value) => (
            <article key={value} className="card simple-card">
              <h3>{value}</h3>
            </article>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  )
}

export default AboutPage
