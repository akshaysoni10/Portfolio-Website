import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="Todo-list" />
          </div>
          <h3>React Todo-list</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/akshaysoni10/Todo-list' className='btn btn-secondary' target='_blank'>Github</a>
            <a href='https://akshay-react-todo-list.netlify.app/' className='btn btn-secondary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="Dragon-dino game" />
          </div>
          <h3>Dragon-Dino game</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/akshaysoni10/Dragon-Dino-Game-' className='btn btn-secondary' target='_blank'>Github</a>
            <a href='https://dragon-dino-game.netlify.app/' className='btn btn-secondary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt="Calculator" />
          </div>
          <h3>Calculator App</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/akshaysoni10/React-Calculator' className='btn btn-secondary' target='_blank'>Github</a>
            <a href='https://ak-soni-react-calculator.netlify.app/' className='btn btn-secondary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio