import React from 'react'

const WelcomeCard = () => {
  return (
    <>
      <div className="welcomecard_wrapper">
        <h1 className='welcomeback_heading'>Welcome back!</h1>
        <p>Nice to see you, Mark Johnson!</p>
        <div className="tap_to_record">Tap to record<i class="fa-solid fa-arrow-right" style={{marginLeft:"5px"}}></i></div>
      </div>
    </>
  )
}

export default WelcomeCard
