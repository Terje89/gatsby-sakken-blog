 import * as React from "react"
 import { useState } from "react";
 import { StaticImage } from "gatsby-plugin-image"
 import addToMailchimp from 'gatsby-plugin-mailchimp'
 import { navigate } from "gatsby"
 
 const Newsletter = ({ magnetTitle, magnetDescription }) => {
    const [email, setEmail] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const [emailError, setEmailError] = useState('')  

    function errorHandling(data) {
        // your error handling
      }
      
      const handleSubmit = () => {
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!email || regex.test(email) === false){
            setEmailError("Sikker på at du skrev inn en gylding epost? 🤔")
        }  else {
            addToMailchimp(email).then((data) => {
    
                if (data.result == "error") {
                  errorHandling(data)
                } else {
                  setSubmitted(true)
                }
              })
        }
      }

   return (
     <div className="CardContainer">
        <div className="DetailsContainer">
            <div className="InnterContainer">
                <h2>{magnetTitle}</h2>
                <p>{magnetDescription}</p>
                <>
                {submitted ? (
                    navigate(
                        "/ebok/",
                        {
                            state: { email },
                        }
                    )
                ) : (
                <div className="FormGroup">
                    <input 
                        id="outlined-email-input"
                        label="Email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        variant="outlined"
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                    <button onClick={() => handleSubmit()}>Ja! send meg en kopi</button>
                </div>)}
                </>
                <p className="SubsmitError">{emailError}</p>
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
 