import * as React from "react"
import { useEffect } from "react";
import { graphql } from "gatsby"
import { useMixpanel } from 'gatsby-plugin-mixpanel'

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const mixpanel = useMixpanel()

  useEffect(() => {
    mixpanel.track('Viewed Content', {
      'title': "404 Page",
    });
  }, []);

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="404: Not Found" />
          <h1>404</h1>

          <h2>
          Ser ut som du har gått deg vil
          </h2>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
