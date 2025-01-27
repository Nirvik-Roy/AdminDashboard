import React from 'react'

const OrdersOverview = () => {
  return (
    <>
      <div className="orders_overview_wrapper">
        <p>Orders Overview</p>
        <h5><i class="fa-solid fa-circle-check" style={{color: '#008000', marginRight: '8px'}}></i><span>+30%</span> this month</h5>

        <div className="orders_wrapper">
          <div className="order_div">
            <div className="notification_icon"><i class="fa-solid fa-bell" style={{color: "#0075ff"}}></i></div>
            <div className="order_div_content"><p>$2400, Design changes</p><p>22 DEC 7:20 PM</p></div>
          </div>
          <div className="order_div">
          <div className="css_icon"><i class="fa-brands fa-css3-alt" style={{color:"#e11a1a"}}></i></div>
          <div className="order_div_content"><p>New order #1832412</p><p>21 DEC 11 PM</p></div>
          </div>
          <div className="order_div">
          <div className="cart_icon"><i class="fa-solid fa-cart-shopping" style={{color: "#0075ff"}}></i></div>
          <div className="order_div_content"><p>Server payments for April</p><p>21 DEC 9:34 PM</p></div>
          </div>
          <div className="order_div">
          <div className="notification_icon"><i class="fa-solid fa-bell" style={{color: "#0075ff"}}></i></div>
          <div className="order_div_content"><p>New card added for order #4395133</p><p>20 DEC 2:20 AM</p></div>
          </div>
          <div className="order_div">
          <div className="notification_icon"><i class="fa-solid fa-bell" style={{color: "#0075ff"}}></i></div>
          <div className="order_div_content"><p>New card added for order #4395133</p><p>18 DEC 4:54 AM</p></div>
          </div>
          <div className="order_div">
          <div className="notification_icon"><i class="fa-solid fa-bell" style={{color: "#0075ff"}}></i></div>
          <div className="order_div_content"><p>New order #9583120</p><p>17 DEC</p></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrdersOverview
