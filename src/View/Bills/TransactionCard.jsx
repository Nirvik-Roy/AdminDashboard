import React from 'react'

const TransactionCard = () => {
  return (
    <>
      <div className="transaction_card_wrapper" style={{overflowX: 'auto'}}>
        <div className="transaction_card_header">
          <p>Your Transaction's</p>
          <div className="transaction_calender_section">
          <i class="fa-solid fa-calendar-week" style={{color:"#FFF"}}></i>
          <p style={{color:'#a0aec0', fontSize:"13px", marginLeft:"10px"}}>23 - 30 March 2020</p>
          </div>
        </div>


        <table style={{marginTop:"10px"}} className='transaction_table_1'>
          <thead>
            <tr><th className='transaction_table_heading'>NEWEST</th></tr>
          </thead>
          <tbody>
            <tr>

              <td className='transaction_data_1'><div className="transaction_data">
                <div className="transaction_arrow_down"><i class="fa-solid fa-arrow-down" style={{color: 'red',fontSize: "10px"}}></i></div>
                <div className="transaction_content">
                    <p style={{fontSize:"13px",}}>Netflix</p>
                    <p style={{fontSize:"12px", fontWeight:"500", color:"#a0aec0"}}>27 March 2020, at 12:30 PM</p>
                </div>
              </div></td>
              <td style={{color:"red"}} className='transaction_data_2'>- $ 2,500</td>
            </tr>


            <tr>

              <td className='transaction_data_1'><div className="transaction_data">
                <div className="transaction_arrow_up"><i class="fa-solid fa-arrow-up" style={{color: '#03a871',fontSize: "10px"}}></i></div>
                <div className="transaction_content">
                    <p style={{fontSize:"13px",}}>Netflix</p>
                    <p style={{fontSize:"12px", fontWeight:"500", color:"#a0aec0"}}>27 March 2020, at 12:30 PM</p>
                </div>
              </div></td>
              <td style={{color:"green"}} className='transaction_data_2'>- $ 2,500</td>
            </tr>
          </tbody>
        </table>


        <table className='transaction_table_2'>
          <thead>
            <tr><th className='transaction_table_heading'>YESTERDAY</th></tr>
          </thead>


          <tbody>
          <tr>

                <td className='transaction_data_1'><div className="transaction_data">
                  <div className="transaction_arrow_up"><i class="fa-solid fa-arrow-up" style={{color: '#03a871',fontSize: "10px"}}></i></div>
                  <div className="transaction_content">
                      <p style={{fontSize:"13px",}}>Netflix</p>
                      <p style={{fontSize:"12px", fontWeight:"500", color:"#a0aec0"}}>27 March 2020, at 12:30 PM</p>
                  </div>
                </div></td>
                <td style={{color:"red"}} className='transaction_data_2'>- $ 2,500</td>
                </tr>


                <tr>

                <td className='transaction_data_1'><div className="transaction_data">
                  <div className="transaction_arrow_up"><i class="fa-solid fa-arrow-up" style={{color: '#03a871',fontSize: "10px"}}></i></div>
                  <div className="transaction_content">
                      <p style={{fontSize:"13px",}}>Netflix</p>
                      <p style={{fontSize:"12px", fontWeight:"500", color:"#a0aec0"}}>27 March 2020, at 12:30 PM</p>
                  </div>
                </div></td>
                <td style={{color:"green"}} className='transaction_data_2'>- $ 2,500</td>
                </tr>



                <tr>

                <td className='transaction_data_1'><div className="transaction_data">
                  <div className="transaction_arrow_up"><i class="fa-solid fa-arrow-up" style={{color: '#03a871',fontSize: "10px"}}></i></div>
                  <div className="transaction_content">
                      <p style={{fontSize:"13px",}}>Netflix</p>
                      <p style={{fontSize:"12px", fontWeight:"500", color:"#a0aec0"}}>27 March 2020, at 12:30 PM</p>
                  </div>
                </div></td>
                <td style={{color:"green"}} className='transaction_data_2'>- $ 2,500</td>
                </tr>



                <tr>

                <td className='transaction_data_1'><div className="transaction_data">
                  <div className="transaction_arrow_up"><i class="fa-solid fa-arrow-up" style={{color: '#03a871',fontSize: "10px"}}></i></div>
                  <div className="transaction_content">
                      <p style={{fontSize:"13px",}}>Netflix</p>
                      <p style={{fontSize:"12px", fontWeight:"500", color:"#a0aec0"}}>27 March 2020, at 12:30 PM</p>
                  </div>
                </div></td>
                <td style={{color:"green"}} className='transaction_data_2'>- $ 2,500</td>
                </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default TransactionCard
