import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/akshay-soni-a37a2b222/' target='_blank'><BsLinkedin/></a>
      <a href='https://github.com/akshaysoni10' target='_blank'><FaGithub /></a>
      <a href='https://leetcode.com/ak_soni_10/' target='_blank'><SiLeetcode /></a>
    </div>
  )
}

export default HeaderSocials
