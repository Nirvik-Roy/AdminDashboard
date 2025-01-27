import React from 'react'
import { Line, Circle } from 'rc-progress';
const Satisfactionrate = () => {
  return (
    <>
      <div className='satisfaction_rate_div'>
        <h3>Satisfaction Rate</h3>
        <h5>From all projects</h5>
        <div className='rc_progress_div_wrapper'>

        <Circle className='rc_progress_circle' percent={70} strokeWidth={8} trailWidth={8} trailColor='#21234a'  strokeColor="#0373f4" /> 


        {/* Emoji in the center */}
          <div
            className="emoji_center"
            style={{
              position: 'absolute',
              top: '40%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: '1.5rem', 
              backgroundColor: '#0075ff',
              padding: '10px 10px',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
           <i class="fa-solid fa-face-laugh" style={{color: "#FFF"}}></i>
          </div>



        <div className='likes_div'>
            <p>0%</p>
            <div>
            <h3>95%</h3>
            <h6>Based on likes</h6>
            </div>
            <p>100%</p>
           
        </div>
        </div>
      
      </div>
    </>
  )
}

export default Satisfactionrate
