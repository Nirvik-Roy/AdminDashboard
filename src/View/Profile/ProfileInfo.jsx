import React from 'react'
import profile_logo from '../../assets/profile_logo.png'

const ProfileInfo = () => {
  return (
    <>
      <div className="profileinfo_wrapper">
        <div className="profle_logo_name_wrapper">
          <img src={profile_logo} alt="" />
          <div className="profile_name_email_wrapper">
            <p className='profile_name'>Mark Johnson</p>
            <p className='profile_email'>mark@simmmple.com</p>
          </div>
        </div>
        <div className="overview_teams_wrapper">
          <div className="overview_btn"><i class="fa-solid fa-cube"></i><span>Overview</span></div>
          <div className="teams_btn"><i class="fa-solid fa-file"></i><span>TEAMS</span></div>
          <div className="projects_btn"><i class="fa-solid fa-wrench"></i><span>PROJECTS</span></div>
        </div>
      </div>
    </>
  )
}

export default ProfileInfo
