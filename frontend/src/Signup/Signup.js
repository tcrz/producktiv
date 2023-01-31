import React, { useState } from 'react'
import { Loader } from '../Loader/Loader'
import { FormUI } from '../FormUI/FormUI'

export const Signup = (props) => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [statusCode, setStatusCode] = useState(null)
  const loadingText = "Creating account..."

  const clearSignUpForm = () => {
    setUsername("")
    setEmail("")
    setPassword("")
  }

  const handleChangeUsername = (event) => {
    setUsername(event.target.value)
  }

  const handleChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const handleChangePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleSignUpSubmit = (event) => {
    event.preventDefault()
    setIsLoading(true)
    clearSignUpForm()
    fetch('https://producktiv-backend.onrender.com/api/users', {
      method: "POST",
      body: JSON.stringify({username, email, password}),
      headers: {'Content-Type': 'application/json'}
    })
    .then((response) => {
      setStatusCode(response.status)
      console.log(response)
      if (!response.ok) {
        throw Error(`${response.status}: ${response.statusText}`)
      }
      return response.json()
    })
    .then((data) => {
      setIsLoading(false)
      setTimeout(()=>props.toggleForm(), 1200)
    })
    .catch((error)=>{
      setIsLoading(false)
      console.log(error)
    })
  }

  const statusCodeCheck = (code) => {
      if (code === null) {
        return <p>Create your Productiv account</p>
      } else if (code === 201){
        return <p style={{color:"green"}}>Account Created! Proceed to log in.</p>
      } else if (code === 400){
        return <p style={{color:"red"}}>This email is already linked to an account. </p>
      } else if (code === 401){
        return <p style={{color:"red"}}>Sorry, an error occured! Try again. </p>
      }
    }

  const statusCodeText = statusCodeCheck(statusCode)
  
    return (
      <>
       { isLoading ? <Loader loadingText={loadingText}/> : (
      <form onSubmit={handleSignUpSubmit}>
        <FormUI
          formType="Sign Up"
          username={username} 
          email={email} 
          password={password} 
          handleChangeUsername={handleChangeUsername}
          handleChangeEmail={handleChangeEmail}
          handleChangePassword={handleChangePassword}
          statusCodeText={statusCodeText}
        />
      </form> )
      }
      </>
    )
}