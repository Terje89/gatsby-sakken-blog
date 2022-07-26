 import * as React from "react"
 import { useStaticQuery, graphql } from "gatsby"
 import { StaticImage } from "gatsby-plugin-image"
 
 const Newsletter = ({ magnetTitle, magnetDescription }) => {
   return (
     <div className="CardContainer">
        <div className="DetailsContainer">
            <div className="InnterContainer">
                <h2>{magnetTitle}</h2>
                <p>{magnetDescription}</p>
                <div className="FormGroup">
                    <input type="text" placeholder="ola@nordmann.no"></input>
                    <button>Send inn</button>
                </div>
             </div>
         </div>
        <div className="SideImageContainer">
            <StaticImage
                layout="fixed"
                formats={["auto", "webp", "avif"]}
                src="../images/workbook.png"
                object-fit="scale-down"
                object-position="50% 50%"
                alt="Arbeidsbok"
            />
         </div>
     </div>
   )
 }
 
 export default Newsletter
 