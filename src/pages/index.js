// src\pages\index.js
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
      <Seo title="صفحه اصلی" />
      
      {posts.length > 0 && (
        <section style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          marginBottom: '60px',
          backgroundColor: '#1a202c',
          borderRadius: '15px',
          overflow: 'hidden',
          color: '#fff',
          direction: 'rtl'
        }}>
          <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{ color: '#63b3ed', fontWeight: 'bold' }}>مقاله برگزیده روز:</span>
            <h1 style={{ fontSize: '1.8rem', margin: '15px 0', color: '#eee' }}>{posts[0].frontmatter.title}</h1>
            <p style={{ color: '#a0aec0' }}>{posts[0].frontmatter.description || posts[0].excerpt}</p>
            <Link to={posts[0].fields.slug} style={{ color: '#63b3ed', fontWeight: 'bold', marginTop: '10px', textDecoration: 'none' }}>
              ادامه مطلب و تحلیل فنی ←
            </Link>
          </div>
          <div style={{ position: 'relative', minHeight: '300px' }}>
             <GatsbyImage 
                image={getImage(posts[0].frontmatter.hero_image)} 
                alt="Hero" 
                style={{height: '100%'}} 
             />
          </div>
        </section>
      )}

      <h2 style={{ marginBottom: '30px', textAlign: 'right' }}>آخرین نوشته‌های مهندسی</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '30px',
        direction: 'rtl'
      }}>
        {posts.slice(1).map(post => {
          const title = post.frontmatter.title || post.fields.slug
          const image = getImage(post.frontmatter.hero_image)

          return (
            <article key={post.fields.slug} style={{
              backgroundColor: '#fff',
              borderRadius: '12px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ height: '180px' }}>
                <GatsbyImage image={image} alt={title} style={{height: '100%'}} />
              </div>
              <div style={{ padding: '20px', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '10px' }}>
                  <Link to={post.fields.slug} style={{ textDecoration: 'none', color: '#2d3748' }}>
                    {title}
                  </Link>
                </h3>
                <p style={{ fontSize: '0.85rem', color: '#718096', lineHeight: '1.6' }}>
                  {post.frontmatter.description}
                </p>
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
          date(formatString: "MMMM DD, YYYY")
          title
          description
          hero_image {
            childImageSharp {
              gatsbyImageData(width: 800, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`
