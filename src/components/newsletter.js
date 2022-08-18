 import * as React from "react"
 import { useState } from "react";
 import { StaticImage } from "gatsby-plugin-image"
 import addToMailchimp from 'gatsby-plugin-mailchimp'
 import { useMixpanel } from 'gatsby-plugin-mixpanel'
 
 const Newsletter = ({ magnetTitle, magnetDescription }) => {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const [emailError, setEmailError] = useState('')
    const [nameError, setNameError] = useState('')  
    const mixpanel = useMixpanel() 

    function errorHandling(data) {
        // your error handling
      }
      
      const handleSubmit = () => {
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!email || regex.test(email) === false){
            setEmailError("🤔 Det ser ikke ut som en gyldig adresse")
        } else if (!name){
            setNameError("🤔 Du må skrive inn ditt fornavn")
      }  else {
            const listFields = { "FNAME" : name }
            addToMailchimp(email).then((data) => {

                mixpanel.track('Form Submitted', {
                  'type': 'Lead Magnet',
                  'title': magnetTitle,
                });
                mixpanel.identify(email);
                mixpanel.people.set({
                  "User Type": 'Subscriber',
                  "$email": email,
                  "$first_name" : name
                });
    
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
                    <p>Supert! Jeg har sendt boken til din epost</p>
                ) : (
                <div className="FormGroup">
                    <input 
                        id="outlined-email-input"
                        label="Fornavn"
                        type="fname"
                        name="fname"
                        autoComplete="fname"
                        variant="outlined"
                        placeholder="Fornavn"
                        onChange={(e) => setName(e.target.value)}
                    ></input>
                    <input 
                        id="outlined-email-input"
                        label="Email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        variant="outlined"
                        placeholder="Epost"
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                    <button onClick={() => handleSubmit()}>Ja takk!</button>
                </div>)}
                </>
                <p className="SubmitError">{emailError}</p>
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
 