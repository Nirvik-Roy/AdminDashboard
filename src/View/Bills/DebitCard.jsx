import React from 'react'
import circles_logo from '../../assets/download (6).png'

const DebitCard = () => {
  return (
    <>
      <div className="debitcard_section_wrapper">
        <div className="debitcard_header_wrapper">
          <p>Vision UI</p>
          <img src={circles_logo} alt="" />
        </div>
        <div className="card_number_div">7812   2139   0823   7916</div>
        <div className="card_expire_info">
          <div className="vaild_date"><p style={{fontSize: "11px", color: "#FFF", fontWeight: "500"}}>VALID THRU</p><p style={{color:"#FFF", fontSize: "15px", fontWeight: "500"}}>05/24</p></div>
          <div className="cvv"><p style={{fontSize: "11px", color: "#FFF", fontWeight: "500"}}>CVV</p><p style={{color:"#FFF", fontSize: "15px", fontWeight: "500"}}>09X</p></div>
        </div>
      </div>
    </>
  )
}

export default DebitCard
