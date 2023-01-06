import React from 'react'
import './Experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
            <h3 className='experience__sec'>Frontend Development</h3>
            <div className='experience__content'>
                <article className='experience__details'>
                    <BsFillPatchCheckFill className='experience__details-icon' />
                    <div>
                        <h4>HTML</h4>
                        <small className='text-light'>Experienced</small>
                    </div>
                </article>
                <article className='experience__details'>
                    <BsFillPatchCheckFill className='experience__details-icon' />
                    <div>
                        <h4>CSS</h4>
                        <small className='text-light'>Intermediate</small>
                    </div>
                </article>
                <article className='experience__details'>
                    <BsFillPatchCheckFill className='experience__details-icon' />
                    <div>
                        <h4>Javascript</h4>
                        <small className='text-light'>Intermediate</small>
                    </div>
                </article>
                <article className='experience__details'>
                    <BsFillPatchCheckFill className='experience__details-icon' />
                    <div>
                        <h4>Bootstrap</h4>
                        <small className='text-light'>Experienced</small>
                    </div>
                </article>
                <article className='experience__details'>
                    <BsFillPatchCheckFill className='experience__details-icon' />
                    <div>
                        <h4>Reactjs</h4>
                        <small className='text-light'>Intermediate</small>
                    </div>
                </article>
            </div>
        </div>

        <div className='experience__backend'>
            <h3 className='experience__sec'>Backend Development</h3>
            <div className='experience__content'>
                <article className='experience__details'>
                    <BsFillPatchCheckFill className='experience__details-icon' />
                    <div>
                        <h4>Nodejs</h4>
                        <small className='text-light'>Beginner</small>
                    </div>
                </article>
                <article className='experience__details'>
                    <BsFillPatchCheckFill className='experience__details-icon' />
                    <div>
                        <h4>Express</h4>
                        <small className='text-light'>Beginner</small>
                    </div>
                </article>
                <article className='experience__details'>
                    <BsFillPatchCheckFill className='experience__details-icon' />
                    <div>
                        <h4>MongoDB</h4>
                        <small className='text-light'>Intermediate</small>
                    </div>
                </article>
                <article className='experience__details'>
                    <BsFillPatchCheckFill className='experience__details-icon' />
                    <div>
                        <h4>MySQL</h4>
                        <small className='text-light'>Intermediate</small>
                    </div>
                </article>
                <article className='experience__details'>
                    <BsFillPatchCheckFill className='experience__details-icon' />
                    <div>
                        <h4>API</h4>
                        <small className='text-light'>Beginner</small>
                    </div>
                </article>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
