 import * as React from "react"
 import { useStaticQuery, graphql } from "gatsby"
 import { StaticImage } from "gatsby-plugin-image"
 
 const Newsletter = ({ magnetTitle, mangetDescription }) => {
   return (
     <div className="CardContainer">
        <div className="DetailsContainer">
            <div className="InnterContainer">
                <h2>{magnetTitle}</h2>
                <p>{mangetDescription}</p>
                <div className="FormGroup">
                    <input type="text" placeholder="ola@nordmann.no"></input>
                    <button>Send inn</button>
                </div>
             </div>
         </div>
        <div className="SideImageContainer">
            <StaticImage
            className="Image"
            layout="fixed"
            placeholder="tracedSVG"
            formats={["auto", "webp", "avif"]}
            src="../images/workbook.svg"
            object-fit="scale-down"
            object-position="50% 50%"
            alt="Workbook"
            />
         </div>
     </div>
   )
 }
 
 export default Newsletter
 