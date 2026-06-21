/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

/* Shared easing curves */
const smooth   = [0.22, 1, 0.36, 1]   // smooth decelerate
const spring   = { type: 'spring', stiffness: 300, damping: 28 }
const springMd = { type: 'spring', stiffness: 220, damping: 22 }

/* ── Fade & Slide ─────────────────────────────── */

export const fadeUp = {
  hidden:  { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: smooth },
  },
}

export const fadeDown = {
  hidden:  { opacity: 0, y: -28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: smooth },
  },
}

export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export const slideLeft = {
  hidden:  { opacity: 0, x: 48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: smooth },
  },
}

export const slideRight = {
  hidden:  { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: smooth },
  },
}

/* ── Scale ────────────────────────────────────── */

export const scaleIn = {
  hidden:  { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.48, ease: smooth },
  },
}

export const scalePop = {
  hidden:  { opacity: 0, scale: 0.82 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: spring,
  },
}

/* ── Clip / Reveal ────────────────────────────── */

export const clipReveal = {
  hidden:  { opacity: 0, clipPath: 'inset(0 100% 0 0)' },
  visible: {
    opacity: 1,
    clipPath: 'inset(0 0% 0 0)',
    transition: { duration: 0.7, ease: smooth },
  },
}

/* ── Stagger Containers ───────────────────────── */

export const staggerContainer = {
  hidden:  {},
  visible: {
    transition: {
      staggerChildren: 0.11,
      delayChildren:   0.05,
    },
  },
}

export const staggerFast = {
  hidden:  {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren:   0.02,
    },
  },
}

export const staggerSlow = {
  hidden:  {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren:   0.08,
    },
  },
}

/* ── Card Hover ───────────────────────────────── */

export const cardHover = {
  rest:  { y: 0,  boxShadow: '0 8px 28px rgba(30,58,138,0.08)' },
  hover: {
    y: -5,
    boxShadow: '0 24px 52px rgba(30,58,138,0.14)',
    transition: springMd,
  },
}

/* ── Number Counter (use with useAnimate) ─────── */
export const countUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: smooth, delay },
  },
})
