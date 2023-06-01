import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
//import Logement from '/pages/Logement'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './pages/404'
import './styles/index.css'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/*<Route path="/pages/logement" element={<Logement />} />*/}
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
)
