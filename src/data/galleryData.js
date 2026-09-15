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
import smileBefore from '../assets/images/case-smile-transform-before.jpg'
import smileAfter from '../assets/images/case-smile-transform-after.jpg'
import orthoBefore from '../assets/images/case-ortho-correction-before.jpg'
import orthoAfter from '../assets/images/case-ortho-correction-after.jpg'

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
    before: smileBefore,
    after: smileAfter,
    result: 'Natural white shade, improved symmetry and a confident, radiant smile.',
  },
  {
    title: 'Orthodontic Correction',
    treatment: 'Cosmetic Dentistry',
    before: orthoBefore,
    after: orthoAfter,
    result: 'Straighter, brighter teeth and a significantly more confident smile.',
  },
]
