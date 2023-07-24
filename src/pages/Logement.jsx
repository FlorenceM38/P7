import React from 'react'
import { useParams } from 'react-router-dom'
import logements from '../datas/logements.json'
import Carrousel from '../components/Carrousel'
import Tag from '../components/Tag'
import Collapse from '../components/Collapse'
import '../styles/logements.css'
import '../styles/collapseLogement.css'
import '../styles/rating.css'
//

import starActive from '../assets/starActive.png'
import starInactive from '../assets/starInactive.png'

import { Navigate } from 'react-router-dom'

function Logement() {
  const { id } = useParams()
  const logement = logements.find((log) => log.id === id)

  if (logement === undefined) {
    return <Navigate to="./404" />
  }

  /*if (!logement) {
    return <Error />
  }*/

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
            <div className="containerHostRating">
              <div className="hostLogement">
                <p className="hostNameLogement">{logement.host.name}</p>
                <img
                  className="hostPictureLogement"
                  src={logement.host.picture}
                  alt="visage du propriétaire"
                />
              </div>
              <div className="rating">
                {[...Array(5)].map((star, index) => {
                  const ratingV = index + 1
                  return (
                    <img
                      key={index}
                      src={
                        ratingV <= logement.rating ? starActive : starInactive
                      }
                      alt="note"
                    />
                  )
                })}
              </div>
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
