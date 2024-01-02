import React, { useState } from 'react'
import './ChangePassword.css'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

const ChangePassword = ({ user }) => {
  const [showPassword, setShowPassword] = useState(false);

  const submitHandler = (e) =>{
    e.preventDefault();

  }

  return (
    <div className='change-password'>
      <form onSubmit={submitHandler}>
        <div>
          <label>Old Password</label>
          <input type='password' placeholder='Enter Your Old Password'/>
        </div>
        <div>
          <label>New Password</label>
          <input type={showPassword ? "text" : "password"} placeholder='Enter Your New Password'/>
          <div
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              >
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </div>

        </div>
        <div>
          <label>Confirm Password</label>
          <input type='password' placeholder='Confirm Your Password'/>
        </div>
        <div>
          <input 
          type='submit'
          value={"Update"}
          />
        </div>
      </form>
    </div>
  )
}

export default ChangePassword