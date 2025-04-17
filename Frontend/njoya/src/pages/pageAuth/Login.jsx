import React, { useState, useContext } from 'react'

// CONSTANTS
import { LOGIN_FIELDS } from '../../utils/configs/FormFields'

// CONTEXT
import { AuthContext } from '../../utils/context/AuthContext'

const Login = () => {
  const [user, setUser] = useState({})
  const {Login} = useContext(AuthContext)

  // HandleChange
  const handleChange = (event) => {
    const {name, value} = event.target
    setUser(prevUser => ({...prevUser, [name]: value}))
}

// HandleSubmit
const HandleSubmit = async event => {
  event.preventDefault()
  Login(user)
}
  return (

    <div>
      <h1>Login</h1>
        <form onSubmit={HandleSubmit}>
          {LOGIN_FIELDS.map((field) => (
          <div key={field.id}>
            <label htmlFor={field.id}>{field.label}</label>
                    <input 
                    type={field.type}
                    name={field.name}
                    id={field.id}
                    placeholder={field.placeholder}
                    onChange={handleChange}
                    />
            </div>
        ))}
        <button>LOGIN</button>
      </form>
    </div>
  )
}

export default Login