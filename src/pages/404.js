import * as React from "react"
import { graphql } from "gatsby"
import { useMixpanel } from 'gatsby-plugin-mixpanel'

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const mixpanel = useMixpanel()

  useEffect(() => {
    mixpanel.track('Viewed Homepage');
  }, []);

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="404: Not Found" />
          <h1>404</h1>

          <h2>
          Ser ut som du har gått deg vill
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
