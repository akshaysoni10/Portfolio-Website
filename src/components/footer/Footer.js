import React from 'react'
import './Footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>AKSHAY</a>

      <ul className='peramlinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.facebook.com/profile.php?id=100050575067457' target='_blank'><BsFacebook /></a>
        <a href='https://www.instagram.com/ak_soni_10' target='_blank'><BsInstagram /></a>
        <a href='https://twitter.com/AkshayS92565434' target='_blank'><BsTwitter /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; All rights are reserved.</small>
      </div>
    </footer>
  )
} 

export default Footer