import React from 'react'
import Banner from '../components/Banner'
import Card from '../components/Card'
import { logements } from '../datas/logements.json'

function Home() {
  return (
    <section>
      <Banner />
      <div>
        {logements.map((logements) => {
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
