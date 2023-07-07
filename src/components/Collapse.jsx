import { useState } from 'react'

import { useLocation } from 'react-router-dom'

import arrow from '../assets/arrow.png'

import '../styles/collapse.css'

function Collapse({ title, description }) {
  const pathName = useLocation().pathname

  const [isOpen, setIsOpen] = useState(false)

  let classList = ''
  if (isOpen) {
    classList = 'collapseopenCollapse'
  } else {
    classList = 'collapseclosedCollapse'
  }

  let classListImg = ''
  if (isOpen) {
    classListImg = 'collapseopenCollapseimg'
  } else {
    classListImg = 'collapseclosedCollapseimg'
  }

  return (
    <div className="collapse">
      <h3 className="collapseH3" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <img className={classListImg} src={arrow} alt="voir la description" />
      </h3>
      <div className={classList}>
        {Array.isArray(description) ? (
          description.map((line, key) => {
            return (
              <p className="collapseLi" key={key}>
                {line}
              </p>
            )
          })
        ) : (
          <p
            /*className="collapseP"*/ className={
              pathName === '/about' ? 'collapseP' : 'collapsePLogement'
            }
          >
            {description}
          </p>
        )}
      </div>
    </div>
  )
}

export default Collapse
