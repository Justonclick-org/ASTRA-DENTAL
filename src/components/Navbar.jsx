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
import Button from './Button'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Treatments', path: '/treatments' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Videos', path: '/video-library' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'Blog', path: '/blog' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Contact', path: '/contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header ${sticky ? 'sticky' : ''}`}>
      <div className="emergency-bar">Emergency Consultation: +91 99999 00111</div>
      <div className="container nav-wrap">
        <Link to="/" className="logo">
          ASTRA DENTAL
        </Link>

        <nav className={`nav-links ${isOpen ? 'open' : ''}`} aria-label="Main">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} onClick={() => setIsOpen(false)}>
              {item.label}
            </NavLink>
          ))}
          <Button to="/book-appointment">Book Appointment</Button>
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
