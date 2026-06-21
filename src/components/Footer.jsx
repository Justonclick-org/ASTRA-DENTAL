/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { siteConfig } from '../constants/siteConfig'
import Button from './Button'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-brand-row">

        {/* ── Brand ── */}
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="footer-logo-astra">ASTRA DENTAL</span>
            <span className="footer-logo-clinic">CLINIC</span>
          </div>
          <p className="footer-tagline">
            Your trusted partner for <em>healthy, confident smiles.</em>
          </p>
          <div className="footer-contact-items">
            <a className="footer-contact-item" href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}>
              <FaPhone /><span>{siteConfig.phone}</span>
            </a>
            <a className="footer-contact-item" href={`mailto:${siteConfig.email}`}>
              <FaEnvelope /><span>{siteConfig.email}</span>
            </a>
            <div className="footer-contact-item">
              <FaMapMarkerAlt /><span>{siteConfig.address}</span>
            </div>
          </div>
          <div className="social-icons">
            <a href={siteConfig.socialLinks.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href={siteConfig.socialLinks.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebookF /></a>
            <a href={siteConfig.socialLinks.youtube} target="_blank" rel="noreferrer" aria-label="YouTube"><FaYoutube /></a>
            <a href={siteConfig.socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* ── Quick Links ── */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/our-team">Our Team</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/book-appointment">Book Appointment</Link></li>
          </ul>
        </div>

        {/* ── Treatments ── */}
        <div className="footer-col">
          <h4>Treatments</h4>
          <ul>
            <li><Link to="/dental-implants">Dental Implants</Link></li>
            <li><Link to="/root-canal-treatment">Root Canal</Link></li>
            <li><Link to="/braces-aligners">Braces &amp; Aligners</Link></li>
            <li><Link to="/teeth-whitening">Teeth Whitening</Link></li>
            <li><Link to="/smile-makeover">Smile Makeover</Link></li>
            <li><Link to="/cosmetic-dentistry">Cosmetic Dentistry</Link></li>
            <li><Link to="/pediatric-dentistry">Paediatric Care</Link></li>
          </ul>
        </div>

        {/* ── Explore ── */}
        <div className="footer-col">
          <h4>Explore</h4>
          <ul>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/video-library">Video Library</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/faqs">FAQs</Link></li>
            <li><Link to="/treatments">All Treatments</Link></li>
          </ul>
        </div>

        {/* ── Working Hours ── */}
        <div className="footer-col">
          <h4>Working Hours</h4>
          <div className="footer-hours">
            <div className="footer-hour-row">
              <span>Monday – Saturday</span>
              <span>9:00 AM – 9:00 PM</span>
            </div>
            <div className="footer-hour-row">
              <span>Sunday</span>
              <span>9:00 AM – 5:00 PM</span>
            </div>
            <div className="footer-emergency">
              <span>Emergency Line</span>
              <a href={`tel:${siteConfig.emergencyPhone.replace(/\s/g, '')}`}>{siteConfig.emergencyPhone}</a>
            </div>
          </div>
          <div className="footer-cta">
            <Button to="/book-appointment">Book Appointment</Button>
          </div>
        </div>

      </div>

      {/* ── Bottom Legal Bar ── */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© 2026 Astra Dental Clinic · Designed &amp; Developed by <strong>Justonclik Team</strong></p>
          <div className="footer-legal-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-conditions">Terms &amp; Conditions</Link>
            <Link to="/cookie-policy">Cookie Policy</Link>
            <Link to="/medical-disclaimer">Medical Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
