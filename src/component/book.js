import React, { useState } from 'react'
import Lottie from 'react-lottie'
import animation from './animation.json'
import CloseButton from './images/close.png'
import SmaillButton from './images/minus.png'
import MinimizeButton from './images/minimize.png'
import gmail from './images/gmail.png'
import github from './images/github.png'
import linkdin from './images/linkdin.png'
import p1 from './images/massenger.png'
import p2 from './images/card-challeng.png'
import Button from '@material-ui/core/Button'

function Book () {
  const [interC, setInterC] = useState('none')
  const [interS, setInterS] = useState('none')
  const [interM, setInterM] = useState('none')
  const [colorC, setColorC] = useState('#f75959')
  const [colorS, setColorS] = useState('#fac536')
  const [colorM, setColorM] = useState('#39ea49')

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <>
      <div className='book book-dark-mod'>
        <div className='book-light book-dark-mod'>
          <div className='navbar'>
            <div
              onMouseDown={() => setColorC('#b72b38')}
              onMouseUp={() => setColorC('#f75959')}
              onMouseLeave={() => setInterC('none')}
              onMouseEnter={() => setInterC('flex')}
              style={{ backgroundColor: colorC }}
              className='close'
            >
              <img style={{ display: interC }} src={CloseButton} />
            </div>
            <div
              onMouseDown={() => setColorS('#da9e10')}
              onMouseUp={() => setColorS('#fac536')}
              onMouseLeave={() => setInterS('none')}
              onMouseEnter={() => setInterS('flex')}
              style={{ backgroundColor: colorS }}
              className='small'
            >
              <img style={{ display: interS }} src={SmaillButton} />
            </div>
            <div
              onMouseDown={() => setColorM('#0e8c16')}
              onMouseUp={() => setColorM('#39ea49')}
              onMouseLeave={() => setInterM('none')}
              onMouseEnter={() => setInterM('flex')}
              style={{ backgroundColor: colorM }}
              className='minimize'
            >
              <img style={{ display: interM }} src={MinimizeButton} />
            </div>
            <div className='text-box'><span className='title'><span className='http'>http://</span>saber-pourrahimi.com</span></div>
            <div style={{ width: '60px' }} />
          </div>

          <div className='book-text'>
            <Lottie options={defaultOptions} height={400} width={400} />
            <div><span className='subtitle'>Front-end Developer</span></div>
            <div><span className='info'>February 25, 1999</span></div>
            <div><span className='info'>Andishe St., Beheshti St., Tehran, I.R. Iran</span></div>
            <div><span className='info'>+98 (901) 749 9608</span></div>
            <div>
              <a href='mailto:saber.pourrahimi.1999@gmail.com'>
                <img src={gmail} />
              </a>
              <a href='https://github.com/spr021'>
                <img src={github} />
              </a>
              <a href='https://www.linkedin.com/in/saber-pourrahimi-534795192'>
                <img src={linkdin} />
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
      </div>

    </>
  )
}

export default Book
