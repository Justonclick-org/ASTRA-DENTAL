/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import { Navigate, Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEOComponent from '../components/SEOComponent'
import PageBanner from '../components/PageBanner'
import SectionTitle from '../components/SectionTitle'
import CTASection from '../components/CTASection'
import { blogPosts } from '../data/blogData'
import { buildArticleSchema } from '../services/schemaService'
import { fadeUp, staggerContainer } from '../animations/motionVariants'

function BlogDetailPage() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)
  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3)

  if (!post) return <Navigate to="/blog" replace />

  return (
    <>
      <SEOComponent
        title={`${post.title} | Dr. Amit Pawar | Astra Dental Clinic Chembur`}
        description={`${post.excerpt} — Expert dental advice from Dr. Amit Pawar, BDS MDS at Astra Dental Clinic, Chembur Mumbai.`}
        keywords={`${post.category} Chembur, dental health tips Mumbai, Dr Amit Pawar dental blog, Astra Dental Clinic articles, oral care Chembur Mumbai`}
        path={`/blog/${slug}`}
        image={post.image}
        type="article"
        schema={[buildArticleSchema(post)]}
      />

      <PageBanner
        eyebrow={post.category}
        title={post.title}
        bgImage={post.image}
      />

      <motion.article
        className="container inner-page blog-detail-article"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="blog-detail-meta">
          <span className="blog-category-chip">{post.category}</span>
          <span className="blog-date">{post.date}</span>
          {post.readTime && <span className="blog-date">{post.readTime}</span>}
          {post.author && <span className="blog-date">By {post.author}</span>}
        </div>

        <motion.p className="blog-detail-intro" variants={fadeUp}>
          {post.excerpt}
        </motion.p>

        {post.content &&
          post.content.map((para, i) => (
            <motion.p key={i} className="blog-detail-para" variants={fadeUp}>
              {para}
            </motion.p>
          ))}

        <motion.div className="blog-detail-back" variants={fadeUp}>
          <Link to="/blog" className="text-link">← Back to All Articles</Link>
        </motion.div>
      </motion.article>

      {related.length > 0 && (
        <section className="container inner-page">
          <SectionTitle eyebrow="Keep Reading" title="Related" accentTitle="Articles" />
          <motion.div
            className="blog-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {related.map((p) => (
              <motion.article className="blog-card" key={p.slug} variants={fadeUp}>
                <div className="blog-card-img">
                  <img src={p.image} alt={p.title} loading="lazy" />
                </div>
                <div className="blog-card-body">
                  <div className="blog-card-top">
                    <span className="blog-category-chip">{p.category}</span>
                    <span className="blog-date">{p.date}</span>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.excerpt}</p>
                  <Link to={`/blog/${p.slug}`} className="text-link">
                    Read Article →
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>
      )}

      <CTASection />
    </>
  )
}

export default BlogDetailPage
