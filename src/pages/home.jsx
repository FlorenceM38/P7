import React from 'react'
import Banner from '../components/Banner'
import Card from '../components/Card'
import Logements from '../datas/logements.json'
import '../styles/home.css'

function Home() {
  return (
    <section>
      <Banner />
      <div className="home">
        {Logements.map((logements) => {
          return (
            <Card
              key={logements.id}
              id={logements.id}
              title={logements.title}
              cover={logements.cover}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Home
