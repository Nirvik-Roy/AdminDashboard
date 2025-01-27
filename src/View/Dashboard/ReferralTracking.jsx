import React from 'react'
import { Line, Circle } from 'rc-progress';
const ReferralTracking = () => {
  return (
    <>
     <div className='refer_tracking_div'>
        <div className='refer_head_wrapper'>
            <h3>Referral Tracking</h3>
            <i class="fa-solid fa-ellipsis"></i>
        </div>
        <div className='refer_invited_wrapper'>
            <div className='left_refer'>
                <div className='invited_div'>
                    <p>Invited</p>
                    <h2>145 <br/>
                    people
                    </h2>
                </div>

                <div className='invited_div'>
                    <p>Bonus</p>
                    <h2>1,465 <br/>
               
                    </h2>
                </div>
            </div>
            <div className='right_refer'>
                  <Circle className='rc_progress_circle5' percent={70} strokeWidth={8} trailWidth={8} trailColor='#21234a'  strokeColor="#0373f4" />
                  <div className='safety_div'>
                    <p>Safety</p>
                    <h3>9.3</h3>
                    <p>Total Score</p>
                  </div> 
            </div>
        </div>
     </div>
    </>
  )
}

export default ReferralTracking
