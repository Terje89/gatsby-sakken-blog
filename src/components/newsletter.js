 import * as React from "react"
 import { useStaticQuery, graphql } from "gatsby"
 import { StaticImage } from "gatsby-plugin-image"

 const handleSubmit = e => {
    e.preventDefault();
    addToMailchimp(email) // listFields are optional if you are only capturing the email address.
    .then(data => {})
    .catch(() => {})
  }
 
 const Newsletter = ({ magnetTitle, magnetDescription }) => {
   return (
     <div className="CardContainer">
        <div className="DetailsContainer">
            <div className="InnterContainer">
                <h2>{magnetTitle}</h2>
                <p>{magnetDescription}</p>
                <div className="FormGroup">
                    <form       
                    method="post"
                    onSubmit={handleSubmit}
                    >
                    <input type="text" placeholder="ola@nordmann.no" id="email"></input>
                    <button>Ja! send meg en kopi</button>
                    </form>
                </div>
             </div>
         </div>
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
     </div>
   )
 }
 
 export default Newsletter
 