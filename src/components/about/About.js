import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import {GoDeviceDesktop} from 'react-icons/go'
import {GiStarFormation} from 'react-icons/gi'
import {AiOutlineSafetyCertificate} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Image' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <GoDeviceDesktop className='about__icon' />
              <h5>Coding</h5>
              <small>5+ Months Learning</small>
            </article>

            <article className='about__card'>
              <AiOutlineSafetyCertificate className='about__icon' />
              <h5>Certificates</h5>
              <small>3+ Certificates</small>
            </article>

            <article className='about__card'>
              <GiStarFormation className='about__icon' />
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>

          <p>
            Hi! My name is Akshay Soni. I am doing my Bachelors in Computer Science Engineering and currently in
            my second year of college. I have deep interest in Web Development and Programming.
          </p>

          <a href='#contact' className='btn talk-btn'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
