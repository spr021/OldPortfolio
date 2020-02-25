import React, { useState } from 'react'
import Typewriter from 'typewriter-effect'
import Lottie from 'react-lottie'
import CloseButton from './images/close.png'
import SmaillButton from './images/minus.png'
import MinimizeButton from './images/minimize.png'

function Terminal () {
  const [interC, setInterC] = useState('none')
  const [interS, setInterS] = useState('none')
  const [interM, setInterM] = useState('none')
  const [colorC, setColorC] = useState('#f75959')
  const [colorS, setColorS] = useState('#fac536')
  const [colorM, setColorM] = useState('#39ea49')
  const [enter1, setEnter1] = useState(false)
  const [enter2, setEnter2] = useState(false)
  const [enter3, setEnter3] = useState(false)

  setTimeout(() => { setEnter1(true) }, 3000)
  setTimeout(() => { setEnter2(true) }, 3100)
  setTimeout(() => { setEnter3(true) }, 3300)
  return (
    <>
      <div className='terminal terminal-dark-mod'>
        <div className='terminal-light terminal-dark-mod'>
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
            <div className='text-box'><span>~/Desktop/info/index.js</span></div>
            <div style={{ width: '60px' }} />
          </div>

          <div className='terminal-text'>
            <div className='body'>
              <ol className='code'>
                <li><span className='code'><span className='v'>spr007@spr007:~$</span><Typewriter onInit={(typewriter) => { typewriter.typeString(' git status').start() }} /></span></li>
                {enter1 && <li><span className='code'>On branch master</span></li>}
                {enter2 &&
                  <>
                    <li><span className='code'>Position : Front end developer</span></li>
                    <li><span className='code'>level : junior</span></li>
                    <li><span className='code'>skills for commit:</span></li>
                  </>}
                {enter3 &&
                  <>
                    <li><span className='code'><span className='e'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;expert:   Reactjs</span></span></li>
                    <li><span className='code'><span className='e'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;expert:   Redux</span></span></li>
                    <li><span className='code'><span className='y'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;familar:   React Native</span></span></li>
                    <li><span className='code'><span className='y'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;familar:   Android</span></span></li>
                    <li><span className='code'><span className='y'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;familar:   PWA</span></span></li>
                    <li><span className='code'><span className='y'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;familar:   Electronjs</span></span></li>
                  </>}

              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Terminal
