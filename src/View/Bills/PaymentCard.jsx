import React from 'react'
import payment_card_edit_img from '../../assets/download (8).png'

const PaymentCard = () => {
  return (
    <>
      <div className="payment_card_wrapper">
        <div className="payment_header_button_wrapper">
          <p>Payment Method</p>
          <div className="add_new_card_button">ADD NEW CARD</div>
        </div>
        <div className="card_number_edit_wrapper">
          <div className="payment_card_edit_section">
            <img src={payment_card_edit_img} alt="" />
            <input type="text" />
            <i class="fa-solid fa-pen"></i>
          </div>
        </div>
      </div>
    </>
  )
}

export default PaymentCard
