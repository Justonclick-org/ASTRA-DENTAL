/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEOComponent from '../components/SEOComponent'
import PageBanner from '../components/PageBanner'
import SectionTitle from '../components/SectionTitle'
import CTASection from '../components/CTASection'
import { blogPosts, featuredBlog } from '../data/blogData'
import { fadeUp, staggerContainer } from '../animations/motionVariants'

const bannerImg = 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=1920&q=80'

function BlogPage() {
  return (
    <>
      <SEOComponent
        title="Dental Health Blog | Dr. Amit Pawar | Astra Dental Clinic Chembur"
        description="Expert dental health articles by Dr. Amit Pawar, MDS — root canal signs, implant benefits, braces vs aligners, child dental care and teeth whitening facts. Astra Dental Clinic, Chembur Mumbai."
        keywords="dental blog Chembur, oral health tips Mumbai, Dr Amit Pawar dental articles, dental implant guide Mumbai, root canal information, braces vs aligners India"
        path="/blog"
      />

      <PageBanner
        eyebrow="Blog"
        title="Dental Health"
        accentTitle="Articles"
        description="Evidence-based articles to help you understand your treatment options and make confident decisions."
        bgImage={bannerImg}
      />

      <section className="container inner-page">
        <SectionTitle
          eyebrow="Latest"
          title="Patient Education"
          accentTitle="Content"
          description="Clear, practical and clinically useful articles designed to build trust and improve oral health awareness."
        />

        {/* Featured article */}
        <motion.article
          className="blog-feature-card"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ marginBottom: 48 }}
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

        {/* Blog grid */}
        <motion.div
          className="blog-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {blogPosts.map((post) => (
            <motion.article className="blog-card" key={post.slug} variants={fadeUp}>
              <div className="blog-card-img">
                <img src={post.image} alt={post.title} loading="lazy" />
              </div>
              <div className="blog-card-body">
                <div className="blog-card-top">
                  <span className="blog-category-chip">{post.category}</span>
                  <span className="blog-date">{post.date}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`} className="text-link">
                  Read Article →
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <CTASection
        title="Start with trusted dental education"
        description="Use the blog to guide patients toward the right treatment journey and increase appointment confidence."
      />
    </>
  )
}

export default BlogPage
