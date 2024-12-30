
import './App.css'
import About from './Components/FunctionalComponents/About'
import Contact from './Components/FunctionalComponents/contact'
import Example from './Components/FunctionalComponents/Example'
import Footer from './Components/FunctionalComponents/Footer'
import Gallary from './Components/FunctionalComponents/Gallary'
import Home from './Components/FunctionalComponents/Home'
import NavBar from './Components/FunctionalComponents/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About college="KEC" />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/gallary' element={<Gallary />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App

