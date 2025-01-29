import React from 'react'
import { Line, Circle } from 'rc-progress';
import blue_small_graph from '../../assets/download (12).png'
import green_small_graph from '../../assets/download (11).png'


const CarinfoCard = () => {
  return (
    <>
      <div className="car_info_wrapper">
        <p className='car_info_heading'>Car Informations</p>
        <p className='car_para'>Hello, Mark Johnson! Your Car is ready.</p>
        <div className="carinfo_graph">
          <Circle className='car_info_circle' percent={70} strokeWidth={8} trailWidth={8} trailColor='#21234a'  strokeColor="#0373f4" />
          <div className='current_load_div'>
          <i class="fa-solid fa-bolt" style={{color: "#09ad8f", fontSize:"20px"}}></i>
                    <h3>68%</h3>
                    <p>Current Load</p>
                  </div> 
        </div>
        <p style={{textAlign:"center", marginTop: "20px", fontSize: "17px", color: "#FFF", fontWeight: "600"}}>0h 58 min</p>
        <p style={{textAlign:"center", color:"#8e9bae", fontSize: "15px",}}>Time to full charge</p>
        <div className="battery_efficiency_wrapper">
          <div className="battery_health_div">
            <div className="battery_health_content"><p style={{color:"#8e9bae", fontSize: "12px", fontWeight: "500"}}>Battery Health</p><p style={{fontSize: "20px", color: "#FFF", fontWeight: "600"}}>76%</p></div>
            <div className="battery_health_logo"><i class="fa-solid fa-car-on"></i></div>
          </div>
          <div className="efficiency_div">
          <div className="efficiency_div_content"><p style={{color:"#8e9bae", fontSize: "12px", fontWeight: "500"}}>Efficiency</p><p style={{fontSize: "20px", color: "#FFF", fontWeight: "600"}}>+20%</p></div>
          <div className="efficiency_div_logo"><img src={green_small_graph} alt="" /></div>
          </div>
        </div>
        <div className="consumption_week_wrapper">

          <div className="consumption_div">
          <div className="consumption_content"><p style={{color:"#8e9bae", fontSize: "12px", fontWeight: "500"}}>Consumption</p><p style={{fontSize: "20px", color: "#FFF", fontWeight: "600"}}>163W/km</p></div>
          <div className="consumption_logo"><i class="fa-solid fa-bolt"></i></div>
          </div>
          <div className="week_div">
          <div className="week_div_content"><p style={{color:"#8e9bae", fontSize: "12px", fontWeight: "500"}}>This Week</p><p style={{fontSize: "20px", color: "#FFF", fontWeight: "600"}}>1.342km</p></div>
          <div className="week_div_logo"><img src={blue_small_graph} alt="" /></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CarinfoCard
