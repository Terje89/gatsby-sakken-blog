 import * as React from "react"
 import { useStaticQuery, graphql } from "gatsby"
 import { StaticImage } from "gatsby-plugin-image"
 import addToMailchimp from 'gatsby-plugin-mailchimp'


 const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await addToMailchimp(email)
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
                    onSubmit={handleSubmit(email)}
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
 