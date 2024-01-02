import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className='news-outer'>
        <div className='news-inner'>
            <h1>Be the first to <span>know</span></h1>
            <h2>We will just give you the <span>right</span> amount of knowledge</h2>
            <h2>Sign up for our <span>Weekly Newsletter</span> and be the first to know about special</h2>
            <h3>no spams, we promise</h3>
            <div className='news-messagebox'>
                <h3>Subscribe Here!</h3>
                <form>
                    <input 
                    type='email'
                    placeholder='Enter your email' />
                    <input 
                    type='submit' value='Update Now' />
                </form>
            </div>
        </div>
    </div>
  )
}

export default Newsletter