/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useBooking } from '../context/BookingContext'
import toothLogo from '../assets/tooth-logo.svg'

const navItems = [
  { label: 'Home',         path: '/' },
  { label: 'About',        path: '/about' },
  { label: 'Treatments',   path: '/treatments' },
  { label: 'Gallery',      path: '/gallery' },
  { label: 'Videos',       path: '/video-library' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'Blog',         path: '/blog' },
  { label: 'Contact',      path: '/contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { openBooking } = useBooking()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleBook = () => {
    setIsOpen(false)
    openBooking()
  }

  return (
    <header className={`site-header${scrolled ? ' sticky' : ''}`}>
      <div className="emergency-bar">Emergency Consultation: +91 98605 32742</div>
      <div className="container nav-wrap">
        <Link to="/" className="logo">
          <span className="logo-icon-wrap">
            <img src={toothLogo} alt="Astra Dental" className="logo-icon" />
          </span>
          <span className="logo-name">
            <span className="logo-astra">ASTRA</span>
            <span className="logo-dental">DENTAL</span>
          </span>
        </Link>

        <nav className={`nav-links ${isOpen ? 'open' : ''}`} aria-label="Main">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} onClick={() => setIsOpen(false)}>
              {item.label}
            </NavLink>
          ))}
          <button type="button" className="btn btn-primary nav-book-btn" onClick={handleBook}>
            Book Appointment
          </button>
        </nav>

        <button
          type="button"
          className="menu-btn"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  )
}

export default Navbar
