import React from 'react'
import BannerAbout from '../components/BannerAbout'
import Collapse from '../components/Collapse'
import AboutData from '../datas/about.json'
import '../styles/about.css'
//

function About() {
  return (
    <div>
      <BannerAbout />
      <div className="about">
        {AboutData.map((about) => {
          return (
            <Collapse
              key={about.id}
              id={about.id}
              title={about.title}
              description={about.description}
            />
          )
        })}
      </div>
    </div>
  )
}

export default About
