import React from 'react'
import { useParams } from 'react-router-dom'
import logements from '../datas/logements.json'
import Carrousel from '../components/Carrousel'
import Tag from '../components/Tag'
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
        <Carrousel imagesCarrousel={logement.pictures} />
        <div>
          <div className="section2Logement">
            <div>
              <h1 className="h1Logement">{logement.title}</h1>
              <h2 className="locationLogement">{logement.location}</h2>
              <Tag index={logement.tags} tag={logement.tags} />
            </div>
            <div>
              <div className="hostLogement">
                <p>{logement.host.name}</p>
                <img src={logement.host.picture} alt="visage du propriétaire" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Logement
