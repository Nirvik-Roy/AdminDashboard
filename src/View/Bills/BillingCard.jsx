import React from 'react'

const BillingCard = () => {
  return (
    <>
      <div className="billing_card_wrapper">
        <p className='billing_card_heading'>Billing Information</p>


        <div className="users_bill">
          <div className="users_bill_header">
            <p>Oliver Liam</p>
            <div className="users_btns">
              <div className="bill_delete_btn" style={{fontSize:"12px"}}><i class="fa-solid fa-trash" style={{color:"#e31a1a"}}></i><span style={{color:"#e31a1a",marginLeft:"8px"}}>DELETE</span></div>
              <div className="bill_edit_btn" style={{fontSize:"12px", marginLeft:"30px", color:"#a0aec0"}}><i class="fa-solid fa-pen"></i><span style={{marginLeft:"5px"}}>EDIT</span></div>
            </div>
          </div>
          <div className="users_bill_content">
            <p>Company Name:   Viking Burrito</p>
            <p>Email Address:   oliver@burrito.com</p>
            <p>VAT Number:   FRB1235476</p>
          </div>
        </div>


        <div className="users_bill">
        <div className="users_bill_header">
            <p>Oliver Liam</p>
            <div className="users_btns">
              <div className="bill_delete_btn" style={{fontSize:"12px"}}><i class="fa-solid fa-trash" style={{color:"#e31a1a"}}></i><span style={{color:"#e31a1a",marginLeft:"8px"}}>DELETE</span></div>
              <div className="bill_edit_btn" style={{fontSize:"12px", marginLeft:"30px", color:"#a0aec0"}}><i class="fa-solid fa-pen"></i><span style={{marginLeft:"5px"}}>EDIT</span></div>
            </div>
          </div>
          <div className="users_bill_content">
            <p>Company Name:   Viking Burrito</p>
            <p>Email Address:   oliver@burrito.com</p>
            <p>VAT Number:   FRB1235476</p>
          </div>
        </div>


        <div className="users_bill">
        <div className="users_bill_header">
            <p>Oliver Liam</p>
            <div className="users_btns">
              <div className="bill_delete_btn" style={{fontSize:"12px"}}><i class="fa-solid fa-trash" style={{color:"#e31a1a"}}></i><span style={{color:"#e31a1a",marginLeft:"8px"}}>DELETE</span></div>
              <div className="bill_edit_btn" style={{fontSize:"12px", marginLeft:"30px", color:"#a0aec0"}}><i class="fa-solid fa-pen"></i><span style={{marginLeft:"5px"}}>EDIT</span></div>
            </div>
          </div>
          <div className="users_bill_content">
            <p>Company Name:   Viking Burrito</p>
            <p>Email Address:   oliver@burrito.com</p>
            <p>VAT Number:   FRB1235476</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default BillingCard
