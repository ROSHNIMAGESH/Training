
import './App.css'
import About from './Components/FunctionalComponents/About'
import Contact from './Components/FunctionalComponents/contact'
import Footer from './Components/FunctionalComponents/Footer'
import Gallary from './Components/FunctionalComponents/Gallary'
import Home from './Components/FunctionalComponents/Home'
import NavBar from './Components/FunctionalComponents/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UseEffect from './Components/FunctionalComponents/UseEffect'
import UseRef from './Components/FunctionalComponents/useRef'
import UseContext from './Components/FunctionalComponents/UseContext'
import UseMemo from './Components/FunctionalComponents/UseMemo'
import Signup from './Components/FunctionalComponents/Signup'
import Login from './Components/FunctionalComponents/Login'

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
          <Route path='/useEffect' element={<UseEffect/>} />
          <Route path='/useRef' element={<UseRef/>} />
          <Route path='/useContext' element={<UseContext/>} />
          <Route path='/useMemo' element={<UseMemo/>} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App

