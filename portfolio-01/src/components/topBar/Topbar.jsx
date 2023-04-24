import React from 'react'
import './Topbar.scss'
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import AttachEmailOutlinedIcon from '@mui/icons-material/AttachEmailOutlined';


function Topbar({menuOpen,setMenuOpen}) {
  return (
    <div className={'topBar ' + (menuOpen && 'active')} >
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo' > CODE FATHER</a>
          <div className="itemContainer">
            <DeveloperModeIcon className='icon' />
            <span>+49 123 123 1214</span>
            </div>  
            <div className="itemContainer">
            <AttachEmailOutlinedIcon className='icon' />
            <span>mobi@codefather.com</span>
            </div>  
        </div>
      
        <div className="right">
          <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen) }>
            <span className='line1' ></span>
            <span className='line2' ></span>
            <span className='line3' ></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar