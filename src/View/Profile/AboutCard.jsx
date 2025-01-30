import React from 'react'

const AboutCard = () => {
  return (
    <>
      <div className="profile_about_section_wrapper">
        <p className='profile_about_section_heading'>Profile Information</p>
        <p style={{color: "#8e9bae", fontSize: "15px", marginTop: "15px"}}>Hi, I’m Mark Johnson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).</p>
        <p style={{color: "#8e9bae", fontSize:"14px", marginTop: "30px"}}>Full Name: <span style={{color: "#FFF", fontSize: "15px"}}>Mark Johnson</span></p>
        <p style={{color: "#8e9bae", fontSize:"14px", marginTop: "15px"}}>Mobile: <span style={{color: "#FFF", fontSize: "15px"}}>(44) 123 1234 123</span></p>
        <p style={{color: "#8e9bae", fontSize:"14px", marginTop: "15px"}}>Email: <span style={{color: "#FFF", fontSize: "15px"}}>mark@simmmple.com</span></p>
        <p style={{color: "#8e9bae", fontSize:"14px", marginTop: "15px"}}>Location: <span style={{color: "#FFF", fontSize: "15px"}}>United States</span></p>
        <p style={{color: "#8e9bae", fontSize:"14px", marginTop: "15px"}}>Social: <i class="fa-brands fa-square-facebook" style={{marginLeft: "10px", fontSize: "15px", color: "#FFF", cursor: "pointer"}}></i><i class="fa-brands fa-twitter" style={{marginLeft: "10px", fontSize: "15px", color: "#FFF", cursor: "pointer"}}></i><i class="fa-brands fa-instagram" style={{marginLeft: "10px", fontSize: "15px", color: "#FFF", cursor: "pointer"}}></i></p>
      </div>
    </>
  )
}

export default AboutCard
