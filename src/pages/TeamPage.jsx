/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import SEOComponent from '../components/SEOComponent'
import SectionTitle from '../components/SectionTitle'
import { doctors } from '../data/doctorData'

function TeamPage() {
  return (
    <>
      <SEOComponent
        title="Our Team | Astra Dental Clinic Specialists"
        description="Meet Astra Dental Clinic specialists with expertise in implants, root canal, orthodontics, cosmetic dentistry and pediatric care."
        path="/our-team"
      />
      <section className="container inner-page">
        <SectionTitle eyebrow="Our Team" title="Experienced Specialists" />
        <div className="team-grid">
          {doctors.map((doctor) => (
            <article className="card team-card" key={doctor.id}>
              <img src={doctor.image} alt={doctor.name} loading="lazy" />
              <div className="card-body">
                <h3>{doctor.name}</h3>
                <p>{doctor.qualification}</p>
                <p>{doctor.experience}</p>
                <p>{doctor.specialization}</p>
                <p>Memberships: {doctor.memberships.join(', ')}</p>
                <p>Languages: {doctor.languages.join(', ')}</p>
                <p>{doctor.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default TeamPage
