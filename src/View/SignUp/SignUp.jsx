import React, { useEffect, useState } from 'react'
import './SignUp.css'
import Header2 from '../../Layout/Header2';

const SignUp = () => {
  const [rememberMe, setRememberMe] = useState(false);
  
    const handleToggle = () => {
      setRememberMe((prevState) => !prevState);
    };
  
  useEffect(()=>{
          window.scrollTo({top:0, behavior:'instant'})
        },[]);
  return (
    <>
      <div className="signup_page_wrapper">
        <Header2 />
        <div className="signup_left_section">
          <div className="signup_image_text">
            <p className='signup_future_text'>Inspired by the future:</p>
            <p className='signup_vision_text'>The Vision UI Dashboard</p>
          </div>
        </div>
        <div className="signup_right_section">
          <div className="signup_form_wrapper">
          <h2 className='signup_header_one'>Welcome!</h2>
          <p className='signup_header_two'>Use these awesome forms to login or create new account in your project for free.</p>
          <form className="signup_form">
            <div className="signup_form_group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name..." required />
            </div>
            <div className="signup_form_group">
            <label htmlFor="email">Email</label>
            <input  type="text"  id="email"  placeholder="Your Email..."  required  />
            </div>
            <div className="signup_form_group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder='Your Password...'/>
            </div>
            <div className="signup_form_group remember_me_toggle" style={{display:"flex"}}>  
          <div className="toggle_switch" onClick={handleToggle}>
            <input type="checkbox" id="remember_me" checked={rememberMe} onChange={handleToggle}/>
            <span className={`slider ${rememberMe ? 'active' : ''}`}></span>
          </div>
          <p className='remember_me'>Remember Me</p>
        </div>
        <button type="submit" className="signup_button">
          SIGN UP
        </button>
          </form>
          <p className="signin_prompt">
        Already have an account? <a href="/sign-in">Sign In</a>
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

export default SignUp
