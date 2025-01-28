import React from 'react'
import credit_balance_img from '../../assets/graph-billing.b9f0ef12.png'

const CreditCard = () => {
  return (
    <>
      <div className="creditcard_section_wrapper">
        <div className="credit_balance_section">
          <div className="credit_balance_head">
            <p>Credit Balance</p>
            <i class="fa-solid fa-ellipsis"></i>
          </div>
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <h2 style={{color: "#FFF", fontWeight: "600"}}>$25,215</h2>
            <img src={credit_balance_img} alt="" />
          </div>
          
        </div>
        <div className="creditcard_newest">
            NEWEST
          </div>
      </div>
    </>
  )
}

export default CreditCard
