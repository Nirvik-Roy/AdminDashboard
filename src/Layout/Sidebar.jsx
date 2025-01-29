import React from 'react'
import { NavLink } from 'react-router-dom'
const Sidebar = () => {
  return (
    <>
      <div className='sidebar_wrapper'>
        <div className='sidebar_logo_top'>
        <i class="fa-solid fa-shield-halved"></i>
        <p>V I S I O N  U I  F R E E</p>
        </div>
      <div className='mt-3' style={{
        display:'flex',
        flexDirection:'column',
        rowGap:'0px'
      }}>
      <NavLink to={'/'} className='sidebar_icons_div'>
        <div  className='sidebar_icons_div2'>
        <i class="fa-solid fa-house-user"></i>
        <NavLink className={'link5'}>Dashboard</NavLink>
        </div>
      
        </NavLink>

        <NavLink to={'/tables'} className='sidebar_icons_div'>
        <div  className='sidebar_icons_div2'>
        <i class="fa-solid fa-chart-simple"></i>
        <NavLink className={'link5'}>Tables</NavLink>
        </div>
      
        </NavLink>

        <NavLink to={'/bills'} className='sidebar_icons_div'>
        <div  className='sidebar_icons_div2'>
        <i class="fa-solid fa-credit-card"></i>
        <NavLink className={'link5'}>Billing</NavLink>
        </div>
      
        </NavLink>

<p style={{
    color:'white',
    fontSize:'14px',
    fontWeight:'bold',
    marginTop:'20px'
}}>ACCOUNT PAGES</p>
        <NavLink to={'/profile'} className='sidebar_icons_div'>
        <div  className='sidebar_icons_div2'>
        <i class="fa-solid fa-user"></i>
        <NavLink className={'link5'}>Profile</NavLink>
        </div>
      
        </NavLink>

        <NavLink to={'/cc'} className='sidebar_icons_div'>
        <div  className='sidebar_icons_div2'>
        <i class="fa-solid fa-file"></i>
        <NavLink className={'link5'}>Sign In</NavLink>
        </div>
      
        </NavLink>

        <NavLink to={'/cc'} className='sidebar_icons_div'>
        <div  className='sidebar_icons_div2'>
        <i class="fa-solid fa-rocket"></i>
        <NavLink className={'link5'}>Sign Up</NavLink>
        </div>
      
        </NavLink>
      </div>
      <div className='sidebar_box'>
      <i class="fa-solid fa-star"></i>
      <h5>Need help?</h5>
      <h6>Please check our docs</h6>
      <button>Documentation</button>
      </div>
      <button className='btn-grad'>Upgrade to PRO</button>
      </div>
    </>
  )
}

export default Sidebar
