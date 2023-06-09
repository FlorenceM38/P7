import { useState } from 'react'

import arrowTop from '../assets/arrowTop.png'

import arrowBottom from '../assets/arrowBottom.png'

import '../styles/collapse.css'

function Collapse({ title, description }) {
  const [isOpen, setIsOpen] = useState(false)
  let classList = ''
  if (isOpen) {
    classList = 'collapse openCollapse'
  } else {
    classList = 'collapse closedCollapse'
  }
  return (
    <div className={classList}>
      <h3 className="collapseH3" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <img
          className="collapseArrow"
          src={arrowBottom}
          alt="voir la description"
        />
      </h3>
      <p className="collapseP">{description}</p>
    </div>
  )
}

export default Collapse
