import React, { useState } from 'react'
import './Auth.css'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';

const Auth = () => {
    const [signinEmail , setSigninEmail] = useState("");
    const [signinPassword, setSigninPassword] = useState();
    const [showSigninPassword, setShowSigninPassword] = useState(false);
    
    const [signupName, setSignupName] = useState("");
    const [signupEmail , setSignupEmail] = useState("");
    const [signupPhone , setSignupPhone] = useState();
    const [signupPassword, setSignupPassword] = useState();
    const [signupConfirmPassword , setSignupConfirmPassword] = useState();
    const [showSignupPassword, setShowSignupPassword] = useState();
    
    const [showSignup , setShowSignUp] = useState(false);

  return (
    <div className='auth-main'>
        <div className={showSignup ? "active container" : "container"} id="container">
        <div className="form-container sign-up">
            <form>
                <h1>Create Account</h1>
                <div>
            <label>Name</label>
            <input type='text' placeholder='Name'  value={signupName} onChange={(e)=>{setSignupName(e.target.value)}}/>
        </div>
                <div>
            <label>Email</label>
            <input type='email' placeholder='Email'  value={signupEmail} onChange={(e)=>{setSignupEmail(e.target.value)}}/>
        </div>
        <div>
            <label>Phone</label>
            <input type='tel' placeholder='Phone No.'  value={signupPhone} onChange={(e)=>{setSignupPhone(e.target.value)}} pattern='[0-9]{10}' />
        </div>
        <div>
            <label>Password</label>
            <input type={showSignupPassword ? "text" : "password"} placeholder='Enter Your New Password' value={signupPassword} onChange={(e)=>{setSignupPassword(e.target.value)}} />
          <div
                onClick={() => {
                  setShowSignupPassword(!showSignupPassword);
                }}
              >
                {showSignupPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </div>

        </div>
        <div>
            <label>Confirm Password</label>
            <input type='password' placeholder='Confirm Password'  value={signupConfirmPassword} onChange={(e)=>{setSignupConfirmPassword(e.target.value)}} />
        </div>
        <div>
            <label>Upload Profile Photo</label>
            <input type='file'/>
        </div>
                <button>Sign Up</button>
                <Link onClick={()=>{setShowSignUp(false)}}>Already Registered! Login Here</Link>
            </form>
        </div>
        <div className="form-container sign-in">
            <form>
                <h1>Sign In</h1>
                <div>
            <label>Email</label>
            <input type='email' placeholder='Email'  value={signinEmail} onChange={(e)=>{setSigninEmail(e.target.value)}}/>
        </div>
                <div>
          <label>New Password</label>
          <input type={showSigninPassword ? "text" : "password"} placeholder='Enter Your New Password' value={signinPassword} onChange={(e)=>{setSigninPassword(e.target.value)}} />
          <div
                onClick={() => {
                  setShowSigninPassword(!showSigninPassword);
                }}
              >
                {showSigninPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
         </div>
        </div>
            <Link to="/password/forgot">Forgot Password</Link>
                <button>Sign In</button>
            <Link onClick={()=>{setShowSignUp(true)}}>Not Yet Registered! Register Here</Link>
            </form>
        </div>
        <div className="toggle-container">
            <div className="toggle">
                <div className="toggle-panel toggle-left">
                    <h1>Welcome Back!</h1>
                    <p>Enter your personal details to use all of site features</p>
                    <button className="hidden" onClick={()=>{setShowSignUp(false)}} >Sign In</button>
                </div>
                <div className="toggle-panel toggle-right">
                    <h1>Hello, Friend!</h1>
                    <p>Register with your personal details to use all of site features</p>
                    <button className="hidden" onClick={()=>{setShowSignUp(true)}} >Sign Up</button>
                </div>
            </div>
        </div>
    </div>
    <div className='auth-mobile'>
        <span>
            <button style={{ backgroundColor : !showSignup && "#3b11a0" }} onClick={()=>{setShowSignUp(false)}} >Signin</button>
            <button style={{ backgroundColor : showSignup && "#3b11a0" }} onClick={()=>{setShowSignUp(true)}} >Signup</button>
        </span>
        {showSignup ? 
        <div >
        <form>
            <h1>Create Account</h1>
            <div>
        <label>Name</label>
        <input type='text' placeholder='Name'  value={signupName} onChange={(e)=>{setSignupName(e.target.value)}}/>
    </div>
            <div>
        <label>Email</label>
        <input type='email' placeholder='Email'  value={signupEmail} onChange={(e)=>{setSignupEmail(e.target.value)}}/>
    </div>
    <div>
        <label>Phone</label>
        <input type='tel' placeholder='Phone No.'  value={signupPhone} onChange={(e)=>{setSignupPhone(e.target.value)}} pattern='[0-9]{10}' />
    </div>
    <div>
        <label>Password</label>
        <input type={showSignupPassword ? "text" : "password"} placeholder='Enter Your New Password' value={signupPassword} onChange={(e)=>{setSignupPassword(e.target.value)}} />
      <div
            onClick={() => {
              setShowSignupPassword(!showSignupPassword);
            }}
          >
            {showSignupPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </div>

    </div>
    <div>
        <label>Confirm Password</label>
        <input type='password' placeholder='Confirm Password'  value={signupConfirmPassword} onChange={(e)=>{setSignupConfirmPassword(e.target.value)}} />
    </div>
    <div>
        <label>Upload Profile Photo</label>
        <input type='file'/>
    </div>
            <button>Sign Up</button>
            <Link onClick={()=>{setShowSignUp(!showSignup)}}>Already Registered! Login Here</Link>
        </form>
    </div>
        :
        <div>
        <form>
            <h1>Sign In</h1>
            <div>
        <label>Email</label>
        <input type='email' placeholder='Email'  value={signinEmail} onChange={(e)=>{setSigninEmail(e.target.value)}}/>
    </div>
            <div>
      <label>New Password</label>
      <input type={showSigninPassword ? "text" : "password"} placeholder='Enter Your New Password' value={signinPassword} onChange={(e)=>{setSigninPassword(e.target.value)}} />
      <div
            onClick={() => {
              setShowSigninPassword(!showSigninPassword);
            }}
          >
            {showSigninPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
     </div>
    </div>
        <Link to="/password/forgot">Forgot Password</Link>
            <button>Sign In</button>
        <Link onClick={()=>{setShowSignUp(!showSignup)}}>Not Yet Registered! Register Here</Link>
        </form>
    </div>
        }

    </div>
    </div>
  )
}

export default Auth