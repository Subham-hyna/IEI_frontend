import React, { useState } from 'react'
import './PasswordForgot.css'

const PasswordForgot = () => {
    const [email , setEmail] = useState();

  return (
    <div className='password-forgot'>
         <div>
            <label>Get Verification Link</label>
            <input type='email' placeholder='Email'  value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <button>Get Link</button>
        </div>
    </div>
  )
}

export default PasswordForgot