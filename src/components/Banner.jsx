import React from 'react'
import bannerHome from '../assets/bannerHome.png'
import '../styles/banner.css'

function Banner() {
  return (
    <div className="banner">
      <img
        src={bannerHome}
        alt="montagne sur une cote"
        className="backgroundBanner"
      />
      <h2 className="h2Banner">
        Chez vous,
        <br className="retourLigneBanner" /> partout et ailleurs
      </h2>
    </div>
  )
}

export default Banner
