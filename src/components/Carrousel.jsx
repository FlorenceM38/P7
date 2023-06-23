import React, { useState } from 'react'

import '../styles/carrousel.css'
import chevronLeft from '../assets/chevronLeft.png'
import chevronRight from '../assets/chevronRight.png'

function Carrousel({ imagesCarrousel }) {
  const [index, setIndex] = useState(0)

  const nextImage = () => {
    setIndex(index + 1)
    if (index === imagesCarrousel.length - 1) {
      setIndex(0)
    }
  }

  const prevImage = () => {
    setIndex(index - 1)
    if (index === 0) setIndex(imagesCarrousel.length - 1)
  }

  return (
    <div className="carrousel">
      <div className="contentCarrousel">
        <img
          className="imgCarrousel"
          src={imagesCarrousel[index]}
          alt="photos du logement"
        />
      </div>
      <div className="arrowCarrousel">
        <img
          className="chevronLeft"
          src={chevronLeft}
          alt="précedent"
          onClick={prevImage}
        />
        <img
          className="chevronRight"
          src={chevronRight}
          alt="suivant"
          onClick={nextImage}
        />
      </div>
      <p className="counterImages">
        {index + 1} / {imagesCarrousel.length}
      </p>
    </div>
  )
}

export default Carrousel
