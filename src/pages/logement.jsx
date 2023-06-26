import React from 'react'
import { useParams } from 'react-router-dom'
import logements from '../datas/logements.json'
import Carrousel from '../components/Carrousel'
import Rating from '../components/Rating'
import Tag from '../components/Tag'
import Collapse from '../components/Collapse'
import '../styles/logements.css'
import '../styles/collapseLogement.css'
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
                <p className="hostNameLogement">{logement.host.name}</p>
                <img
                  className="hostPictureLogement"
                  src={logement.host.picture}
                  alt="visage du propriétaire"
                />
              </div>
              <Rating />
            </div>
          </div>
        </div>
        <div className="containerCollapseLogement">
          <div className="collapseLogement">
            <Collapse
              title={'Description'}
              description={logement.description}
            />
          </div>
          <div className="collapseLogement">
            <Collapse title={'Équipement'} description={logement.equipments} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Logement
