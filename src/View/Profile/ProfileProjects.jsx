import React from 'react'
import project_img_1 from '../../assets/profile-2.9c96bf40.png'
import project_img_2 from '../../assets/profile-1.b93e4339.png'
import project_img_3 from '../../assets/profile-3.bc197530.png'
import small_img_1 from '../../assets/avatar4.2a4ba26c.png'
import small_img_2 from '../../assets/avatar3.4d26ce02.png'
import small_img_3 from '../../assets/avatar2.b8132c3c.png'
import small_img_4 from '../../assets/avatar1.1d9e1978.png'

const ProfileProjects = () => {
  return (
    <>
      <div className="profile_projects_section_wrapper">
        <p className='profile_projects_heading'>Projects</p>
        <p className='profile_projects_para'>Architects design houses</p>
        <div className="users_projects_wrapper">

          <div className="project_card">
            <img src={project_img_2} alt="" />
            <p style={{color: "#8e9bae", fontSize: "10px", fontWeight: "500", marginTop:"20px"}}>Project #2</p>
            <h2>Modern</h2>
            <p className='project_card_para'>As Uber works through a huge amount of internal management turmoil.</p>
            <div className="project_card_btn_wrapper">
              <div className="view_all_btn">VIEW ALL</div>
              <div className="small_imgs_wrapper">
                <img src={small_img_4} alt="" className='small_img_4'/>
                <img src={small_img_3} alt="" className='small_img_3'/>
                <img src={small_img_2} alt="" className='small_img_2'/>
                <img src={small_img_1} alt="" className='small_img_1'/>
              </div>
            </div>
          </div>


          <div className="project_card">
            <img src={project_img_1} alt="" />
            <p style={{color: "#8e9bae", fontSize: "10px", fontWeight: "500", marginTop:"20px"}}>Project #2</p>
            <h2>Modern</h2>
            <p className='project_card_para'>As Uber works through a huge amount of internal management turmoil.</p>
            <div className="project_card_btn_wrapper">
              <div className="view_all_btn">VIEW ALL</div>
              <div className="small_imgs_wrapper">
              <img src={small_img_4} alt="" className='small_img_4'/>
                <img src={small_img_3} alt="" className='small_img_3'/>
                <img src={small_img_2} alt="" className='small_img_2'/>
                <img src={small_img_1} alt="" className='small_img_1'/>
              </div>
            </div>
          </div>


          <div className="project_card">
            <img src={project_img_3} alt="" />
            <p style={{color: "#8e9bae", fontSize: "10px", fontWeight: "500", marginTop:"20px"}}>Project #2</p>
            <h2>Modern</h2>
            <p className='project_card_para'>As Uber works through a huge amount of internal management turmoil.</p>
            <div className="project_card_btn_wrapper">
              <div className="view_all_btn">VIEW ALL</div>
              <div className="small_imgs_wrapper">
              <img src={small_img_4} alt="" className='small_img_4'/>
                <img src={small_img_3} alt="" className='small_img_3'/>
                <img src={small_img_2} alt="" className='small_img_2'/>
                <img src={small_img_1} alt="" className='small_img_1'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileProjects
