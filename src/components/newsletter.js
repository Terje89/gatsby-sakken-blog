 import * as React from "react"
 import { useStaticQuery, graphql } from "gatsby"
 import { StaticImage } from "gatsby-plugin-image"
 
 const Newsletter = ({ magnetTitle, magnetDescription }) => {
   return (
     <div className="CardContainer">
        <div className="SideImageContainer">
            <StaticImage
                layout="fixed"
                formats={["auto", "webp", "avif"]}
                src="../images/checklist.png"
                object-fit="scale-down"
                object-position="50% 50%"
                alt="Checklist"
                width={200}
                height={200}
            />
         </div>
        <div className="DetailsContainer">
            <div className="InnterContainer">
                <h2>{magnetTitle}</h2>
                <p>{magnetDescription}</p>
                <div className="FormGroup">
                    <input type="text" placeholder="ola@nordmann.no"></input>
                    <button>Ja! send meg en kopi</button>
                </div>
             </div>
         </div>
     </div>
   )
 }
 
 export default Newsletter
 