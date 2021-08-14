import React, { useState } from 'react'
import CloseButton from '../../images/close.png'
import SmaillButton from '../../images/minus.png'
import MinimizeButton from '../../images/minimize.png'
import { useDispatch } from 'react-redux'
import "./windowButton.scss"

function WindowButton (props) {

  const [interC, setInterC] = useState('none')
  const [interS, setInterS] = useState('none')
  const [interM, setInterM] = useState('none')
  const [colorC, setColorC] = useState('#f75959')
  const [colorS, setColorS] = useState('#fac536')
  const [colorM, setColorM] = useState('#39ea49')
  const dispatch = useDispatch()

  const close = () => {
    setColorC('#f75959')
    dispatch({type: props.type, book: "close", terminal: "close"})
  }

  const small = () => {
    setColorS('#fac536')
    dispatch({type: props.type, book: "small", terminal: "small"})
  }

  const minimize = () => {
    setColorM('#39ea49')
    dispatch({type: props.type, book: "minimize", terminal: "minimize"})
  }

  return (
    <>
      <div
        onMouseDown={() => setColorC('#b72b38')}
        onMouseUp={close}
        onMouseLeave={() => setInterC('none')}
        onMouseEnter={() => setInterC('flex')}
        style={{ backgroundColor: colorC }}
        className='close'
      >
        <img style={{ display: interC }} src={CloseButton} alt="close-btn" />
      </div>
      <div
        onMouseDown={() => setColorS('#da9e10')}
        onMouseUp={small}
        onMouseLeave={() => setInterS('none')}
        onMouseEnter={() => setInterS('flex')}
        style={{ backgroundColor: colorS }}
        className='small'
      >
        <img style={{ display: interS }} src={SmaillButton} alt="small-btn" />
      </div>
      <div
        onMouseDown={() => setColorM('#0e8c16')}
        onMouseUp={minimize}
        onMouseLeave={() => setInterM('none')}
        onMouseEnter={() => setInterM('flex')}
        style={{ backgroundColor: colorM }}
        className='minimize'
      >
        <img style={{ display: interM }} src={MinimizeButton} alt="minimiz-btn" />
      </div>
    </>
  )
}

export default WindowButton
