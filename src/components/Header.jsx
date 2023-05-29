import React from 'react'
import logo from '../assets/logo.svg'
import Navigation from './Navigation'
import '../styles/header.css'

function Header() {
  return (
    <header className="header">
      <h1>
        <img src={logo} alt="Logo Kasa" className="logoHeader" />
      </h1>
      <nav className="navigation">
        <Navigation />
      </nav>
    </header>
  )
}

export default Header
