import NavBar from "./components/NavBar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from "./components/Hero"
import Home from './components/Pages/Home'
import Regions from './components/Pages/Regions'
import Footer from "./components/Footer"
import EspecificRegion from "./components/Pages/EspecificRegion"

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/regions" exact element={<Regions />} />
          <Route path="/e-region" exact element={<EspecificRegion />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
