// src\templates\blog-post.js
import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
  location,
}) => {
  const siteTitle = site.siteMetadata?.title || `Title`
  
  const mainImage = getImage(post.frontmatter.hero_image)

  return (
    <Layout location={location} title={siteTitle}>
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
        style={{ direction: 'rtl' }}
      >
        <header>
          <h1 itemProp="headline" style={{ marginBottom: '10px' }}>{post.frontmatter.title}</h1>
          <p style={{ color: '#666', marginBottom: '20px' }}>{post.frontmatter.date}</p>
          
          {mainImage && (
            <GatsbyImage 
              image={mainImage} 
              alt={post.frontmatter.title} 
              style={{ borderRadius: '15px', marginBottom: '30px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }} 
            />
          )}
        </header>

        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
          style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#333' }}
        />
        
        <hr style={{ margin: '40px 0' }} />
        
        <footer>
          <Bio />
        </footer>
      </article>

      <nav className="blog-post-nav" style={{ marginTop: '40px' }}>
        <ul style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0,
          gap: '20px'
        }}>
          <li style={{ flex: 1, minWidth: '250px' }}>
            {previous && (
              <Link to={previous.fields.slug} rel="prev" style={navLinkStyle}>
                <div style={thumbContainerStyle}>
                   <GatsbyImage 
                      image={getImage(previous.frontmatter.hero_image)} 
                      alt="prev" 
                      style={thumbImageStyle} 
                   />
                </div>
                <span>→ {previous.frontmatter.title}</span>
              </Link>
            )}
          </li>

          <li style={{ flex: 1, minWidth: '250px', textAlign: 'left' }}>
            {next && (
              <Link to={next.fields.slug} rel="next" style={navLinkStyle}>
                <span>{next.frontmatter.title} ←</span>
                <div style={thumbContainerStyle}>
                   <GatsbyImage 
                      image={getImage(next.frontmatter.hero_image)} 
                      alt="next" 
                      style={thumbImageStyle} 
                   />
                </div>
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

const navLinkStyle = {
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: '#2d3748',
  fontWeight: '600',
  gap: '15px',
  padding: '10px',
  borderRadius: '10px',
  backgroundColor: '#fff',
  boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
}

const thumbContainerStyle = {
  width: '60px',
  height: '60px',
  borderRadius: '8px',
  overflow: 'hidden',
  flexShrink: 0
}

const thumbImageStyle = {
  width: '100%',
  height: '100%'
}

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        hero_image {
          childImageSharp {
            gatsbyImageData(width: 1200, placeholder: BLURRED)
          }
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        hero_image {
          childImageSharp {
            gatsbyImageData(width: 100, height: 100, layout: FIXED)
          }
        }
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        hero_image {
          childImageSharp {
            gatsbyImageData(width: 100, height: 100, layout: FIXED)
          }
        }
      }
    }
  }
`
