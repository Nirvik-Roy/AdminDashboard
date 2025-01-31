import React, { useEffect } from 'react'
import './SignUp.css'
import Header2 from '../../Layout/Header2';

const SignUp = () => {
  useEffect(()=>{
          window.scrollTo({top:0, behavior:'instant'})
        },[]);
  return (
    <>
      <div className="signup_page_wrapper">
        <Header2 />
        <div className="signup_left_section">
          <div className="signup_image_text">
            
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp
