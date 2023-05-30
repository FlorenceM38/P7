import { Link } from 'react-router-dom'

import '../styles/404.css'

function Error() {
  return (
    <div className="section404">
      <h2 className="h2404">404</h2>
      <p className="p404">
        Oups! La page que <br className="retourLigne404" /> vous demandez
        n'existe pas.
      </p>
      <Link to={'./pages/home'} className="lien404">
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}

export default Error
