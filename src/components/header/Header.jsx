import React from 'react'
import './Header.css'
// import CTA from './CTA'

const Header = () => {
  return (
    <Header>
      <div className="contaniner header_container">
        <h5>Hello I'm</h5>
        <h1>Vikash Yadav</h1>
        <h5 className='text-light'>fullstack Developer</h5>
        {/* <CTA/> */}
      </div>
    </Header>
  )
}

export default Header