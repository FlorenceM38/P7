import React from 'react'
import bannerAbout from '../assets/bannerAbout.png'
import '../styles/banner.css'

function BannerAbout() {
  return (
    <div className="banner">
      <img src={bannerAbout} alt="montagne" className="backgroundBanner" />
    </div>
  )
}

export default BannerAbout
