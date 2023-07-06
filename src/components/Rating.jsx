import React from 'react'
import '../styles/rating.css'
import starActive from '../assets/starActive.png'
import starInactive from '../assets/starInactive.png'

function Rating({ rate }) {
  {
    ;[...Array(5)].map((star, index) => {
      const ratingV = index + 1
      return (
        <img
          key={index}
          src={ratingV <= rate ? starActive : starInactive}
          alt="note"
        />
      )
    })
  }
}

export default Rating
