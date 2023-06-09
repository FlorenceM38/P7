import React from 'react'
import { useParams } from 'react-router-dom'
import logements from '../datas/logements.json'
import Gallery from '../components/Gallery'
import '../styles/logements.css'

function Logement() {
  const { id } = useParams()
  const logement = logements.find((log) => log.id === id)
  return (
    <section>
      <div className="logement">
        <Gallery />
        <h1>{logement.title}</h1>
      </div>
    </section>
  )
}

export default Logement
