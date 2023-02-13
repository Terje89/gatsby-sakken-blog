import * as React from "react"
import { useEffect } from "react";
import { Link, graphql } from "gatsby"
import { useMixpanel } from 'gatsby-plugin-mixpanel'
import { StaticImage } from "gatsby-plugin-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteAuthor = data.site.siteMetadata?.author.name || `Author`
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const siteDescription = data.site.siteMetadata?.description || `Description`
  const posts = data.allMarkdownRemark.nodes
  const mixpanel = useMixpanel()

  useEffect(() => {
    mixpanel.track('Viewed Content', {
      'title': {siteAuthor},
    });
  }, []);

  return (
    <Layout location={location} title={siteTitle}>
      <Seo 
      title={siteAuthor} 
      description={siteDescription}
      />
      <div class="float-container">

        <div class="float-child">
          <StaticImage
            formats={["auto", "webp", "avif"]}
            src="../images/terje.jpg"
            width={250}
            height={250}
            quality={95}
            alt="Profile picture"
          />
        </div>

        <div class="float-child">
          <h1>Hei 👋 <br />Jeg er Terje</h1>
          <p>Product Manager, markedsfører, skriv mer tekst her!</p>
        </div>

      </div>
      <h2>Mine prosjekter 👇</h2>
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h3>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h3>
                  <small>{post.frontmatter.date}</small>
                  <small> - {post.frontmatter.timeToRead} minutter å lese</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
      <Bio />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author {
          name
        }
      }
    }
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/(prosjekter)/"  } }
      sort: { fields: [frontmatter___date], order: DESC }
      ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "DD.MM.YYYY")
          title
          description
          timeToRead
        }
      }
    }
  }
`
