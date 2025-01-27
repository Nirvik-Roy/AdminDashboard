import React from 'react'

const DashboardCards = () => {
  return (
    <>
       <div className='dashboard_cards_wrapper'>
                    <div className='dashboard_card'>
                        <div className='money_para_div'>
                            <p>Today's Money</p>
                            <h5>$53,000<span> +55%</span></h5>
                        </div>
                 
                        <i class="fa-solid fa-wallet"></i>
                    </div>
                    <div className='dashboard_card'>
                    <div className='money_para_div'>
                            <p>Today's Users</p>
                            <h5>23,00<span> +53%</span></h5>
                        </div>
                        <i class="fa-solid fa-globe"></i>
                    </div>
                    <div className='dashboard_card'>
                    <div className='money_para_div'>
                            <p>New Clients</p>
                            <h5>+3,462<span className='text-danger'> -2%</span></h5>
                        </div>
                        <i class="fa-solid fa-file"></i>
                    </div>
                    <div className='dashboard_card'>
                    <div className='money_para_div'>
                            <p>Total Sales</p>
                            <h5>$103,430<span > +5%</span></h5>
                        </div>
                        <i class="fa-solid fa-cart-shopping"></i>
                    </div>
                </div>
    </>
  )
}

export default DashboardCards
