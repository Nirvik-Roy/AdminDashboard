import React, { useState } from 'react'
import payment_card_edit_img from '../../assets/download (8).png'
import visa_img from '../../assets/download (9).png'

const PaymentCard = () => {
  const [cardNumber, setCardNumber] = useState("7812 2139 0823 XXXX"); // Default masked card number
  const [isEditable, setIsEditable] = useState(false);

  const handleEditClick = () => {
    setIsEditable(true);
  };
  return (
    <>
      <div className="payment_card_wrapper">
        <div className="payment_header_button_wrapper">
          <p>Payment Method</p>
          <div className="add_new_card_button">ADD NEW CARD</div>
        </div>
        <div className="card_number_edit_wrapper">
          <div className="payment_card_edit_section">
          <div style={{display:"flex", columnGap:"20px", alignItems:"center"}}>
          <img src={payment_card_edit_img} alt="" style={{width:"22px",height:"16px"}}/>
          <input type="text" value={cardNumber} onChange={(e)=>setCardNumber(e.target.value)} disabled={!isEditable}/>
          </div>
            <i class="fa-solid fa-pen" style={{color:"#FFF", cursor: "pointer", fontSize:"15px"}} onClick={handleEditClick}></i>
          </div>
          <div className="visa_card_edit_section">
            <div style={{display:"flex", columnGap:"20px", alignItems:"center"}}>
              <img src={visa_img} alt="" />
              <input type="text" value={cardNumber} onChange={(e)=>setCardNumber(e.target.value)} disabled={!isEditable}/>
            </div>
            <i class="fa-solid fa-pen" style={{color:"#FFF", cursor: "pointer", fontSize:"15px"}} onClick={handleEditClick}></i>
          </div>
        </div>
      </div>
    </>
  )
}

export default PaymentCard
