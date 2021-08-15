import React from 'react'
import Lottie from 'react-lottie'
import animation from '../images/animation.json'
import gmail from '../images/gmail.png'
import github from '../images/github.png'
import linkdin from '../images/linkdin.png'
import p1 from '../images/massenger.png'
import p2 from '../images/card-challeng.png'
import Button from '@material-ui/core/Button'
import Navbar from './nav-bar/navbar'
import { useSelector } from 'react-redux'
import Draggable from 'react-draggable'
import Resizer from './resizer/resizer'

function Book () {

  const state = useSelector(state => state.book.state)

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <Draggable handle="span" bounds="parent">
        <div className="main-container" style={{justifyContent: state === "small" && "flex-end", alignItems: state === "small" && "flex-end"}}>
        <Resizer>
          <span>{state !== "close" && (<Navbar type="RESIZE_BOOK" />)}</span>
          <div className='book' style={{display: state !== "minimize" && "none"}}>
              <div className='book-text'>
                <Lottie options={defaultOptions} height="auto" width="auto" />
                <div><span className='subtitle'>Front-end Developer</span></div>
                <div><span className='info'>February 25, 1999</span></div>
                <div><span className='info'>Andishe St., Beheshti St., Tehran, I.R. Iran</span></div>
                <div><span className='info'>+98 (912) 956 8749</span></div>
                <div>
                  <a href='mailto:saber.pourrahimi.1999@gmail.com'>
                    <img src={gmail} alt="gmail" />
                  </a>
                  <a href='https://github.com/spr021'>
                    <img src={github} alt="github" />
                  </a>
                  <a href='https://www.linkedin.com/in/saber-pourrahimi-534795192'>
                    <img src={linkdin} alt="linkdin" />
                  </a>
                </div>
                <div className='container'>
                  <img src={p1} alt='Avocado' className='image' />
                  <div className='middle'>
                    <span className='infoo'>this is a massneger but the server is down and i get a scren shoot but you can see real project</span>
                    <a target='blank' href='https://spr021.github.io/avocado/'>
                      <Button variant='contained' color='primary'>
                        Viste
                      </Button>
                    </a>
                  </div>
                </div>
                <div className='container'>
                  <img src={p2} alt='Avocado' className='image' />
                  <div className='middle'>
                    <span className='infoo'>this is card challeg from ponisha company i like this :D</span>
                    <a target='blank' href='https://spr021.github.io/Card-Challenge/'>
                      <Button variant='contained' color='primary'>
                        Viste
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Resizer>
        </div>
    </Draggable>
  )
}

export default Book
