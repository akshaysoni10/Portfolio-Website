import React from 'react'
import './Navbar.css'
import {BiHomeHeart} from 'react-icons/bi'
import {FaUserGraduate} from 'react-icons/fa'
import {GiAchievement} from 'react-icons/gi'
import {RiServiceLine} from 'react-icons/ri'
import {RiContactsFill} from 'react-icons/ri'
import { useState } from 'react'

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHomeHeart /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserGraduate /></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><GiAchievement /></a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><RiServiceLine /></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><RiContactsFill /></a>
    </nav>
  )
}

export default Navbar