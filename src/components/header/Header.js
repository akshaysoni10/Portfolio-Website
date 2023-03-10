import React from 'react'
import './Header.css'
import Resume from './Info' 
import ME from '../../assets/me.jpg'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Akshay Soni</h1>
        <h5 className='text-light'>Fullstack Developer and Programmer</h5>
        <Resume />
        <HeaderSocial />

        <div className='me'>
          <img src={ME} alt="me" />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header