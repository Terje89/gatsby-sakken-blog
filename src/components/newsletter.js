 import * as React from "react"
 import { useStaticQuery, graphql } from "gatsby"
 import { StaticImage } from "gatsby-plugin-image"
 
 const Newsletter = () => {
   return (
     <div className="CardContainer">
        <div className="DetailsContainer">
            <div className="InnterContainer">
                <h2>Hei! Vent...</h2>
                <h3>Last ned</h3>
                <p>Lyst til å lære med om blablabla?</p>
             </div>
         </div>
        <div className="SideImageContainer">
        <Image>
            <img src="" />
        </Image>
         </div>
     </div>
   )
 }
 
 export default Newsletter
 