/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import { motion } from 'framer-motion'
import SEOComponent from '../components/SEOComponent'
import SectionTitle from '../components/SectionTitle'
import CTASection from '../components/CTASection'
import { blogPosts, featuredBlog } from '../data/blogData'
import { fadeUp, staggerContainer } from '../animations/motionVariants'

function BlogPage() {
  return (
    <>
      <SEOComponent
        title="Dental Blog | Astra Dental Clinic"
        description="Read oral health articles on root canal signs, implant benefits, braces vs aligners, child dental care and whitening facts."
        path="/blog"
      />
      <section className="container inner-page">
        <SectionTitle
          eyebrow="Blog"
          title="Patient Education Articles"
          description="Clear, practical, and clinically useful articles designed to build trust and improve oral health awareness."
        />

        <div className="blog-feature-grid">
          <motion.article
            className="blog-feature-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img src={featuredBlog.image} alt={featuredBlog.title} loading="lazy" />
            <div className="blog-feature-content">
              <p className="eyebrow">Featured Article</p>
              <h2>{featuredBlog.title}</h2>
              <p>{featuredBlog.excerpt}</p>
              <div className="blog-meta">
                <span>{featuredBlog.author}</span>
                <span>{featuredBlog.readTime}</span>
              </div>
            </div>
          </motion.article>

          <motion.aside
            className="blog-sidebar card simple-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="eyebrow">Topics</p>
            <ul className="blog-topic-list">
              <li>Preventive Care</li>
              <li>Implants</li>
              <li>Root Canal</li>
              <li>Orthodontics</li>
              <li>Cosmetic Dentistry</li>
            </ul>
            <p className="muted-text">
              Education-first content helps patients understand treatment choices before they book.
            </p>
          </motion.aside>
        </div>

        <motion.div
          className="blog-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {blogPosts.map((post, index) => (
            <motion.article
              className={`blog-card ${index === 0 ? 'blog-card-accent' : ''}`}
              key={post.slug}
              variants={fadeUp}
            >
              <div className="blog-card-top">
                <p className="eyebrow">{post.category}</p>
                <small>{post.date}</small>
              </div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <button type="button" className="text-link">
                Read Article
              </button>
            </motion.article>
          ))}
        </motion.div>
      </section>
      <CTASection title="Start with trusted dental education" description="Use the blog to guide patients toward the right treatment journey and increase appointment confidence." />
    </>
  )
}

export default BlogPage
