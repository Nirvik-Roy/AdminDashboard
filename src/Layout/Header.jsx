import React from 'react'
import Sidebar from './Sidebar'

const Header = () => {
  
  return (
    <>
   <Sidebar/>
   <div className='header_wrapper_main uni_wrapper '>
    <div className='uni_container'>
       <div className='header_content_wrapper '>
        <p className='header_para1'>
        <i class="fa-solid fa-house"></i>
        / Dashboard
        </p>
        <div className='header_input_wrapper'>
        <div className='header_input_div'>
        <input placeholder='type here...' type='text'/>
        <i class="fa-solid fa-magnifying-glass"></i>
        </div>
           
            <div className='sign_div_header'>
            <i class="fa-solid fa-user"></i>
            <p>Sign in</p>
            </div>
            <i class="fa-solid fa-gear"></i>
            <i class="fa-solid fa-bell"></i>
        </div>
       </div>
    </div>
   </div>
    </>
  )
}

export default Header
