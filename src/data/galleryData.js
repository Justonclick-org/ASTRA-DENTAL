/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import smileResult from '../assets/images/IMG_1860.PNG'
import smileBW from '../assets/images/IMG_1861.PNG'
import bracesResult from '../assets/images/IMG_1862.PNG'
import smileMaleBW from '../assets/images/IMG_1863.PNG'
import clinicReception from '../assets/images/IMG_1776.JPG.jpeg'
import clinicLounge from '../assets/images/IMG_1775.JPG.jpeg'
import treatmentRoom from '../assets/images/IMG_1886.JPG.jpeg'

export const galleryItems = [
  {
    category: 'Smile Makeover',
    image: smileResult,
  },
  {
    category: 'Orthodontics',
    image: bracesResult,
  },
  {
    category: 'Clinic Interior',
    image: clinicReception,
  },
  {
    category: 'Treatment Room',
    image: treatmentRoom,
  },
  {
    category: 'Patient Smile',
    image: smileBW,
  },
  {
    category: 'Waiting Lounge',
    image: clinicLounge,
  },
  {
    category: 'Patient Results',
    image: smileMaleBW,
  },
]

export const beforeAfterCases = [
  {
    title: 'Smile Transformation',
    treatment: 'Cosmetic Dentistry',
    before: smileBW,
    after: smileResult,
    result: 'Natural white shade, improved symmetry and a confident, radiant smile.',
  },
  {
    title: 'Orthodontic Correction',
    treatment: 'Braces & Aligners',
    before: bracesResult,
    after: smileMaleBW,
    result: 'Straighter teeth, corrected bite and significantly improved oral hygiene access.',
  },
  {
    title: 'Full Clinic Experience',
    treatment: 'Clinic Tour',
    before: clinicLounge,
    after: clinicReception,
    result: 'State-of-the-art facility designed for patient comfort and clinical excellence.',
  },
]
