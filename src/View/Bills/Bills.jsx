import React, { useEffect } from 'react'
import './Bills.css'
import Header from '../../Layout/Header'
import DebitCard from './DebitCard'
import CreditCard from './CreditCard'
import PaymentCard from './PaymentCard'
import InvoiceCard from './InvoiceCard'

const Bills = () => {
  useEffect(()=>{
      window.scrollTo({top:0, behavior:'instant'})
    },[])
  return (
    <>
      <Header name={"Bills"}/>
      <section className='billing_section'>
        <div className="uni_wrapper">
          <div className="uni_container">
            <p className='billing_heading'>Billing</p>
            <div className="credit_vision_invoices_wrapper">
            <div className="credit_vision_div">
              <div className="credit_vision_wrapper">
                <DebitCard />
                <CreditCard />
              </div>
              <div className="payment_method_wrapper">
                <PaymentCard />
              </div>
            </div>
            <InvoiceCard />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Bills
