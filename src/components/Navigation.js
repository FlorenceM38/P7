import React from 'react'

import { Link } from 'react-router-dom'

import '../styles/header.css'

function Navigation() {
  return (
    <div>
      <ul className="navigationUl">
        <Link to="./pages/home" className="navigationLi">
          <li>Accueil</li>
        </Link>
        <Link to="./pages/about" className="navigationLi">
          <li>A Propos</li>
        </Link>
      </ul>
    </div>
  )
}

export default Navigation
