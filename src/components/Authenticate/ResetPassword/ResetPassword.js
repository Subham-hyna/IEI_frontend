import React, { useState } from 'react'
import './ResetPassword.css'

const ResetPassword = () => {
    const [password , setPassword] = useState();
    const [confirmPassword , setConfirmPassword] = useState();
  return (
    <div className='reset-password'>
    <div>
    <div>
       <label>New Password</label>
       <input type='password' placeholder='New Password'  value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
   </div>
    <div>
       <label>Confirm Password</label>
       <input type='password' placeholder='Confirm Password'  value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
   </div>
   <div>
    <button>Update</button>
   </div>
    </div>
</div>
  )
}

export default ResetPassword