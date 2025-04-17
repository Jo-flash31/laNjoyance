import React, { useState } from 'react'
import axios from 'axios'

// CONSTANTS
import URLS  from '../../utils/constants/Api'
import { REGISTER_FIELDS } from '../../utils/configs/FormFields'

const Register = () => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
    })
    // HandleChange
    const handleChange = (event) => {
        const {name, value} = event.target
        setUser(prevUser => ({...prevUser, [name]: value}))
    }
    // HandleSubmit
    const HandleSubmit = async event => {
        event.preventDefault()
        try {
            const  response = await axios.post(URLS.POST_REGISTER, user)
            console.log('response : ', response);
            console.log(error.message);
            console.log(response.data);
            
        } catch (error) {
            
        }
        
        
    }

  return (
    <div>
        Register
        <form onSubmit={HandleSubmit}>
            {REGISTER_FIELDS.map((field) => (
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
            <button>REGISTER</button>
        </form>
    </div>
  )
}

export default Register