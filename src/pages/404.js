import * as React from "react"
import { useContext, useEffect } from 'react';
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import mixpanel from 'mixpanel-browser';

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  mixpanel.init(rocess.env.YOUR_MIXPANEL_API_TOKEN, {debug: false}); 
  mixpanel.track('Content Viewed');

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="404: Not Found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
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
