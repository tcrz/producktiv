import React, { useState } from 'react'
import { Loader } from '../Loader/Loader'
import { Form } from '../Signup/Form'

export const Login = (props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const loadingText = "Logging in..."

  const handleChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const handleChangePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleLoginSubmit = (event) => {
    event.preventDefault()
    props.logIn(email, password)
  }
  
  const statusCodeCheck = (code) => {
      if (code !== null) {
        if (code === 401) {
          return <p style={{color:"red"}}>Invalid username or password</p>
        } else {
          return <p style={{color:"red"}}>Sorry, an error occured! Try again. </p>
        }
      } else {
        return <p>Log in to your Producktiv account</p>
      }
    }
  
  const statusCodeText = statusCodeCheck(props.statusCode)
    
    return (
      (props.isLoading ? <Loader loadingText={loadingText}/> :
      <form onSubmit={handleLoginSubmit}>
         <Form
          formType="Log In"
          email={email} 
          password={password}
          handleChangeEmail={handleChangeEmail}
          handleChangePassword={handleChangePassword}
          statusCodeText={statusCodeText}
        />
      </form>)
    )
}