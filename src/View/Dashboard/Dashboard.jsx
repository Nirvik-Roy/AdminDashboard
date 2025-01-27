import React from 'react'
import './Dashboard.css'
import DashboardCards from './DashboardCards'
import DashboardUser from './DashboardUser'
import Satisfactionrate from './Satisfactionrate'
import ReferralTracking from './ReferralTracking'
import AreaChart5 from './AreaChart5'
import BarChart2 from './BarChart'
import Projects from './Projects'
import OrdersOverview from './OrdersOverview'
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
               <BarChart2 />
               <Projects />
               <OrdersOverview />
               </div>
            
             </div>
        </div>
      </section>
    </>
  )
}

export default Dashboard
