import React from 'react'
import WindowButton from '../window-btn/windowButton'
import "./navbar.scss"

function Navbar (props) {

  return (
    <div className='navbar'>
      <WindowButton type={props.type} />
      <div className='text-box'>
        {props.type === "RESIZE_TERMINAL" ? 
          (<span>~/Desktop/info/index.js</span>) : 
          (<span className='title'><span className='http'>http://</span>saber-pourrahimi.com</span>)
        }
      </div>
      <div style={{ width: '60px' }} />
    </div>
  )
}

export default Navbar
