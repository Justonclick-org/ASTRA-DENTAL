/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import clinicReception from '../assets/images/IMG_1776.JPG.jpeg'
import clinicLounge from '../assets/images/IMG_1775.JPG.jpeg'
import treatmentRoom from '../assets/images/IMG_1886.JPG.jpeg'
import gapBefore from '../assets/images/case-gap-before.jpg'
import gapAfter from '../assets/images/case-gap-after.jpg'
import crowdedBefore from '../assets/images/case-crowded-before.jpg'
import crowdedAfter from '../assets/images/case-crowded-after.jpg'

export const galleryItems = [
  {
    category: 'Clinic Interior',
    image: clinicReception,
  },
  {
    category: 'Treatment Room',
    image: treatmentRoom,
  },
  {
    category: 'Waiting Lounge',
    image: clinicLounge,
  },
]

export const beforeAfterCases = [
  {
    title: 'Smile Transformation',
    treatment: 'Cosmetic Dentistry',
    before: gapBefore,
    after: gapAfter,
    result: 'Natural white shade, improved symmetry and a confident, radiant smile.',
  },
  {
    title: 'Orthodontic Correction',
    treatment: 'Cosmetic Dentistry',
    before: crowdedBefore,
    after: crowdedAfter,
    result: 'Straighter, brighter teeth and a significantly more confident smile.',
  },
]
