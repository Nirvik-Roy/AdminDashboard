import React from 'react'

const SigninNavbar = () => {
  return (
    <>
      <div className="signin_navbar_wrapper">
      <span class="vision_free_logo">VISION UI FREE</span>
      <nav class="nav">
      <a href="#"><i class="fa-solid fa-circle-notch" style={{marginRight: '5px'}}></i>Dashboard</a>
      <a href="#"><i class="fa-solid fa-user" style={{marginRight: '5px'}}></i>Profile</a>
      <a href="#"><i class="fa-solid fa-circle-user" style={{marginRight: '5px'}}></i>Sign Up</a>
      <a href="#"><i class="fa-solid fa-key" style={{marginRight: '5px'}}></i>Sign In</a>
    </nav>
    <button class="buy_now_btn">Buy Now</button>
      </div>
    </>
  )
}

export default SigninNavbar
