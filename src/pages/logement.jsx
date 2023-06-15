import React from 'react'
import { useParams } from 'react-router-dom'
import logements from '../datas/logements.json'
import Carrousel from '../components/Carrousel'
import '../styles/logements.css'
import Error from '../pages/404'
import axios from 'axios'

function Logement() {
  const { id } = useParams()
  const logement = logements.find((log) => log.id === id)

  if (!logement) {
    return <Error />
  }

  return (
    <section>
      <div className="logement">
        <Carrousel />
        <div>
          <h1>{logement.title}</h1>
        </div>
      </div>
    </section>
  )
}

export default Logement
