import React from 'react'
import './Dashboard.css'
import DashboardCards from './DashboardCards'
import DashboardUser from './DashboardUser'
import Satisfactionrate from './Satisfactionrate'
import ReferralTracking from './ReferralTracking'
import AreaChart5 from './AreaChart5'
const Dashboard = () => {
  return (
    <>
      <section className='dashboard_section'>
        <div className='uni_wrapper'>
             <div className='uni_container'>
               <DashboardCards/>
               <div className='dashboard_user_wrapper'>
               <DashboardUser/>
               <Satisfactionrate/>
               <ReferralTracking/>
               <AreaChart5/>
               </div>
            
             </div>
        </div>
      </section>
    </>
  )
}

export default Dashboard
