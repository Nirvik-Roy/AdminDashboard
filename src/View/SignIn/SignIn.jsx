import React, { useEffect, useState } from 'react'
import './SignIn.css'
import Header2 from '../../Layout/Header2';

const SignIn = () => {

  const [rememberMe, setRememberMe] = useState(false);

  const handleToggle = () => {
    setRememberMe((prevState) => !prevState);
  };

  useEffect(()=>{
        window.scrollTo({top:0, behavior:'instant'})
      },[]);
  
  return (
    <>
      <div className="signin_page_wrapper">
      <Header2 />
  <div className="signin_left_section">
    <div className="image_text">
      <p className="future_text">Inspired by the future:</p>
      <h2 className="vision_text">The Vision UI Dashboard</h2>
    </div>
  </div>
  <div className="signin_right_section">
    <div className="signin_form_wrapper">
      <h2 className='signin_header_one'>Nice to see you!</h2>
      <p className='signin_header_two'>Enter your email and password to sign in</p>
      <form className="signin_form">
        <div className="signin_form_group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Your Email..." required />
        </div>
        <div className="signin_form_group">
          <label htmlFor="password">Password</label>
          <input  type="password"  id="password"  placeholder="Your Password..."  required  />
        </div>
        <div className="signin_form_group remember_me_toggle" style={{display:"flex"}}>  
          <div className="toggle_switch" onClick={handleToggle}>
            <input type="checkbox" id="remember_me" checked={rememberMe} onChange={handleToggle}/>
            <span className={`slider ${rememberMe ? 'active' : ''}`}></span>
          </div>
          <p className='remember_me'>Remember Me</p>
        </div>
        <button type="submit" className="signin_button">
          SIGN IN
        </button>
      </form>
      <p className="signup_prompt">
        Don’t have an account? <a href="/signup">Sign up</a>
      </p>
    </div>
    <div style={{position:"absolute", left:"8%", top: "90%", width:"100%", minWidth: "60%", maxWidth: "60%", fontSize: "14px"}}>
    <p style={{color:"#a0aec0", fontSize: "14px"}}>@2021,Made with ❤️ by Simmmple&Creative Tim for a better web</p>
    <div className="signin_footer_btns">
      <p>Marketplace</p>
      <p>Blog</p>
      <p>License</p>
    </div>
    
    </div>
  </div>
</div>

    </>
  )
}

export default SignIn
