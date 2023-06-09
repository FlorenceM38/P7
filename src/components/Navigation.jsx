import React from 'react'

import { Link } from 'react-router-dom'

import '../styles/header.css'

import '../styles/about.css'

function Navigation() {
  return (
    <div>
      <ul className="navigationUl">
        <Link to="/" className="navigationLi">
          <li>Accueil</li>
        </Link>
        <Link to="/about" className="navigationLi">
          <li>A Propos</li>
        </Link>
      </ul>
    </div>
  )
}

export default Navigation
