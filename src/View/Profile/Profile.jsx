import React from 'react'
import './Profile.css'
import Header from '../../Layout/Header'
import ProfileInfo from './ProfileInfo'
import WelcomeCard from './WelcomeCard'
import CarinfoCard from './CarinfoCard'
import AboutCard from './AboutCard'

const Profile = () => {
  return (
    <>
      <Header name={"Profile"}/>
      <section className='profile_section'>
        <div className="uni_wrapper">
          <div className="uni_container">
            <p className='profile_dashboard_heading'>Profile</p>
            <ProfileInfo />
            <div className="profile_user_wrapper">
              <WelcomeCard />
              <CarinfoCard />
              <AboutCard />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Profile
