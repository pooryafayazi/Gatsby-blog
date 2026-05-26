// src/pages/blog.js
import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="مقالات آموزشی" />
      
      <div style={{ textAlign: 'right', marginBottom: '40px', direction: 'rtl' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#2d3748' }}>مقالات و نوشته‌ها</h1>
        <p style={{ color: '#718096' }}>جدیدترین تحلیل‌ها و آموزش‌های دنیای تکنولوژی از نگاه زومیت</p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '30px',
        direction: 'rtl'
      }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          const image = getImage(post.frontmatter.hero_image)

          return (
            <article key={post.fields.slug} className="post-card" style={{
              backgroundColor: '#fff',
              borderRadius: '15px',
              boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
              overflow: 'hidden',
              transition: 'transform 0.3s ease',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ height: '200px' }}>
                {image ? (
                  <GatsbyImage 
                    image={image} 
                    alt={title} 
                    style={{ height: '100%' }} 
                  />
                ) : (
                  <div style={{ height: '100%', backgroundColor: '#edf2f7' }} />
                )}
              </div>

              <div style={{ padding: '20px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <header>
                  <h3 style={{ margin: '0 0 10px 0', fontSize: '1.2rem' }}>
                    <Link to={post.fields.slug} style={{ textDecoration: 'none', color: '#2d3748' }}>
                      {title}
                    </Link>
                  </h3>
                  <small style={{ color: '#a0aec0' }}>{post.frontmatter.date}</small>
                </header>
                <section style={{ marginTop: '15px', flexGrow: 1 }}>
                  <p style={{ fontSize: '0.95rem', color: '#4a5568', lineHeight: '1.6' }}>
                    {post.frontmatter.description || post.excerpt}
                  </p>
                </section>
                <Link 
                  to={post.fields.slug} 
                  style={{ 
                    marginTop: '20px', 
                    color: '#3182ce', 
                    fontWeight: 'bold', 
                    textDecoration: 'none',
                    fontSize: '0.9rem' 
                  }}
                >
                  مطالعه مقاله ←
                </Link>
              </div>
            </article>
          )
        })}
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY/MM/DD")
          title
          description
          # این بخش برای خواندن تصویر از فولدر هر مقاله حیاتی است
          hero_image {
            childImageSharp {
              gatsbyImageData(
                width: 600
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  }
`
