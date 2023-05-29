import React from 'react'
import logoBlanc from '../assets/logoBlanc.svg'
import '../styles/footer.css'

function Footer() {
  return (
    <footer className="footer">
      <img src={logoBlanc} alt="logo kasa" className="logoFooter" />
      <p className="paragrapheFooter"> © 2020 Kasa. All rights reserved </p>
    </footer>
  )
}

export default Footer
