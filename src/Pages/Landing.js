import React from 'react'
import { Link } from 'react-router-dom'
import headshot from '../Images/headshot.jpeg'
import cover from '../Images/wiwimimcover.jpg'
import '../Styles/Landing.scss'

const Landing = () => {
  return (
    <div className = 'Landing'>
      <div className = 'Landing-intro'>
        <div className = 'Landing-intro-name'>
          <p>Hey everyone! I'm Mark!</p>
        </div>
        <div className = 'Landing-intro-image'>
          <img src = {headshot} />
        </div>
      </div>
      <div className = 'Landing-description'>
        <p>Writer | Poet</p>
      </div>
      <div className = 'Landing-minibio'>
        <div className = 'minibio-cover'>
          <Link to = 'https://www.amazon.co.uk/What-If-Whats-Inside-Isnt-ebook/dp/B0BST82LXY/' target = '_blank'>
            <img 
              src = {cover}
              alt = 'book'
            />
          </Link>
        </div>
        <div className = 'minibio-description'>
          <div className = 'minibio-description-quote'>
            <p>Mark Engelsson is a transatlantic nomad masquerading as a writer. He mostly focuses on poetry, with occasional forays into short stories and a couple of ideas for novels on the back-burner. What If What’s Inside Me Isn’t Me? is his début pamphlet, exploring the duality in life while being unafraid to shine a light on the darker side of humanity.</p>
          </div>
          <div className = 'minibio-description-source'>
            <p>- Amazon</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing 