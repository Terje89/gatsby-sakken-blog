import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { MixpanelContext } from '../tracking';

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const mixpanel = React.useContext(MixpanelContext);

  useEffect(() => {
    mixpanel.track('Viewed Page');
  }, [mixpanel]);

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
