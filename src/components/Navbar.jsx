/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa'
import { useBooking } from '../context/BookingContext'
import { problemsWeSolve } from '../data/homeData'
import astraLogo from '../assets/logo-horizontal.png'

const navItems = [
  { label: 'Home',         path: '/' },
  { label: 'Problems We Solve', dropdown: problemsWeSolve },
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
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false)
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
          <img src={astraLogo} alt="Astra Dental" className="logo-image" />
        </Link>

        <nav className={`nav-links ${isOpen ? 'open' : ''}`} aria-label="Main">
          {navItems.map((item) =>
            item.dropdown ? (
              <div
                key={item.label}
                className={`nav-dropdown${mobileDropdownOpen ? ' nav-dropdown--open' : ''}`}
              >
                <button
                  type="button"
                  className="nav-dropdown-toggle"
                  onClick={() => setMobileDropdownOpen((prev) => !prev)}
                  aria-expanded={mobileDropdownOpen}
                >
                  {item.label} <FaChevronDown className="nav-dropdown-chevron" />
                </button>
                <div className="nav-dropdown-menu">
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.problem}
                      to={sub.link}
                      onClick={() => { setIsOpen(false); setMobileDropdownOpen(false) }}
                    >
                      {sub.problem}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink key={item.path} to={item.path} onClick={() => setIsOpen(false)}>
                {item.label}
              </NavLink>
            )
          )}
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
