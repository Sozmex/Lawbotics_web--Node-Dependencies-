// Blog2.js
import React from "react";
import { Link, graphql } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Button from "../components/button";
import SearchPosts from "../components/searchPosts";
import * as blogstyle from "../styles/blogStyles.module.css";

class Blog2 extends React.Component {
  render() {
    const { data, navigate, location } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMdx.edges;
    const localSearchBlog = data.localSearchBlog;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <div className={blogstyle.container}>
          <h1 className={blogstyle.title}>Blog</h1>
          <SearchPosts
            posts={posts}
            localSearchBlog={localSearchBlog}
            navigate={navigate}
            location={location}
          />
          <div className={blogstyle.postItem}>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug;
              return (
                <div key={node.fields.slug}>
                  <h2 className={blogstyle.postTitle}>
                    <Link to={node.fields.slug}>{title}</Link>
                  </h2>
                  <small className={blogstyle.postDate}>
                    {node.frontmatter.date}
                  </small>
                  <p
                    className={blogstyle.excerpt}
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </div>
              );
            })}
          </div>
          <Link className={blogstyle.goHomeButton} to="/">
            <Button marginTop="0">Go Home</Button>
          </Link>
        </div>
      </Layout>
    );
  }
}

export default Blog2;

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
`;
