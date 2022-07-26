 import * as React from "react"
 import { useStaticQuery, graphql } from "gatsby"
 import { StaticImage } from "gatsby-plugin-image"
 
 const Newsletter = () => {
   const data = useStaticQuery(graphql`
     query BioQuery {
        markdownRemark(id: { eq: $id }) {
            id
            excerpt(pruneLength: 160)
            html
            frontmatter {
              title
              date(formatString: "DD.MM.YYYY")
              description
              timeToRead
            }
          }
     }
   `)
 
   return (
     <div className="CardContainer">
        test
     </div>
   )
 }
 
 export default Newsletter
 