import React from 'react'

const handleSubmit = e => {
  window.open(
    `${process.env.GATSBY_TINY_LETTER_URL}`,
    'popupwindow',
    'scrollbars=yes,width=800,height=600'
  )
  return true
}

const SignupForm = () => {
  return (
    <form
      action={`${process.env.GATSBY_TINY_LETTER_URL}`}
      method="post"
      target="popupwindow"
      onSubmit={handleSubmit}
      className="SignupForm"
    >
      <h2>Subscribe for more!</h2>
      <div className="Wrapper">
        <input
          aria-label="Email address"
          placeholder="Enter your email..."
          name="email"
          type="text"
          required
          id="tlemail"
        />
        <input type="hidden" value="1" name="embed" />
        <button type="submit">OK</button>
      </div>
    </form>
  )
}
export default SignupForm