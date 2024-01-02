import React from 'react'
import './DeleteAccount.css'

const DeleteAccount = () => {
  return (
    <div className='delete-account'>
      <span><p>To Delete Your Account,</p> <span> Please Enter the your password</span></span>
      <input type='password' placeholder='Enter Your Password'/>
      <button>Delete</button>
    </div>
  )
}

export default DeleteAccount