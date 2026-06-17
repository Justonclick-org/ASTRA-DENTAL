/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { siteConfig } from '../constants/siteConfig'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>Astra Dental Clinic</h3>
          <p>
            Delivering ethical, advanced and patient-centered dentistry with a comfort-first
            experience.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/our-team">Our Team</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h4>Treatments</h4>
          <ul>
            <li><Link to="/dental-implants">Dental Implants</Link></li>
            <li><Link to="/root-canal-treatment">Root Canal</Link></li>
            <li><Link to="/braces-aligners">Braces & Aligners</Link></li>
            <li><Link to="/smile-makeover">Smile Makeover</Link></li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <p>{siteConfig.address}</p>
          <p>{siteConfig.phone}</p>
          <p>{siteConfig.email}</p>
          <p>{siteConfig.operatingHours.join(' | ')}</p>
          <a href={siteConfig.mapLink} target="_blank" rel="noreferrer">
            View Google Map
          </a>
          <div className="social-icons">
            <a href={siteConfig.socialLinks.instagram} aria-label="Instagram"><FaInstagram /></a>
            <a href={siteConfig.socialLinks.facebook} aria-label="Facebook"><FaFacebookF /></a>
            <a href={siteConfig.socialLinks.youtube} aria-label="YouTube"><FaYoutube /></a>
            <a href={siteConfig.socialLinks.linkedin} aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © 2026 Astra Dental Clinic. Designed & Developed by Justonclik Team. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
