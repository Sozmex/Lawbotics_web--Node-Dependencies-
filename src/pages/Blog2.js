import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import SearchPosts from "../components/searchPosts"
import * as blogstyle from '../styles/blogStyles.module.css'

class Blog2 extends React.Component {
  render() {
    const { data, navigate, location } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges
    const localSearchBlog = data.localSearchBlog

    // ... rest of the code

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <div className={blogstyle.container}>
          <SearchPosts
            posts={posts}
            localSearchBlog={localSearchBlog}
            navigate={navigate}
            location={location}
          />
          <div className={blogstyle.postItem}>
            {/* Your post list code */}
          </div>
          <Link className={blogstyle.goHomeButton} to="/">
            <Button marginTop="0">Go Home</Button>
          </Link>
        </div>
      </Layout>
    )
  }
}

export default Blog2

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    localSearchBlog {
      index
      store
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
