import { Resizable } from 're-resizable'
import React, { useState } from 'react'
import Draggable from 'react-draggable'
import { useSelector } from 'react-redux'
import Typewriter from 'typewriter-effect'
import Navbar from './nav-bar/navbar'

function Terminal () {

  const state = useSelector(state => state.terminal.state)
  const [enter1, setEnter1] = useState(false)
  const [enter2, setEnter2] = useState(false)
  const [enter3, setEnter3] = useState(false)

  setTimeout(() => { setEnter1(true) }, 3000)
  setTimeout(() => { setEnter2(true) }, 3100)
  setTimeout(() => { setEnter3(true) }, 3300)

  return (
    <Draggable handle="span" bounds="parent">
      <Resizable className="resiz" minWidth={350} defaultSize={{
        width:600,
        height:800,
      }}>
      <span>{state !== "close" && (<Navbar type="RESIZE_TERMINAL" />)}</span>
      <div className='terminal' style={{display: state !== "minimize" && "none"}}>
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
    </Resizable>
    </Draggable>
  )
}

export default Terminal
