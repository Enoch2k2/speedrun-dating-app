import React, { useState, useEffect } from 'react'


const Signup = ({ signup, currentUser, history }) => {
  const [formInputs, setFormInputs] = useState({
    firstName: '',
    lastName: '',
    bio: ''
  })

  const handleChange = event => {
    setFormInputs({
      ...formInputs,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault();
    signup(formInputs)
    // TODO: redirect to profiles page
    setFormInputs({
      firstName: '',
      lastName: '',
      bio: ''
    })
  }

  useEffect(() => {
    if(currentUser.id) {
      history.push("/")
    }
  })

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={ handleSubmit }>
        <div>
          <label>First Name</label>
          <input type="text" name="firstName" value={ formInputs.firstName } onChange={handleChange} />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" name="lastName" value={ formInputs.lastName} onChange={handleChange} />
        </div>
        <div>
          <label>Bio</label>
          <textarea name="bio" value={ formInputs.bio } onChange={handleChange} />
        </div>

        <input type="submit" value="Signup" />
      </form>
    </div>
  )
}

export default Signup
