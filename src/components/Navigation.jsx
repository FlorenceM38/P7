import React from 'react'

import { Link, useLocation } from 'react-router-dom'

import '../styles/header.css'

import '../styles/about.css'

function Navigation() {
  const pathName = useLocation().pathname

  return (
    <div>
      <ul className="navigationUl">
        <Link
          to="/"
          className={pathName === '/' ? 'navigationLiActive' : 'navigationLi'}
        >
          <li>Accueil</li>
        </Link>
        <Link
          to="/about"
          className={
            pathName === '/about' ? 'navigationLiActive' : 'navigationLi'
          }
        >
          <li>A Propos</li>
        </Link>
      </ul>
    </div>
  )
}

export default Navigation
