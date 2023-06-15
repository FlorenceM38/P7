import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/card.css'

function Card({ title, id, cover }) {
  return (
    <Link to={`../logement/${id}`} className="card">
      <img src={cover} alt={title} className="coverCard" />
      <h3 className="h3Card">{title}</h3>
    </Link>
  )
}

export default Card
