import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home'
import AboutPage from './components/aboutPage'
import WhychoosePage from './components/whychoosePage'
import TeamPage from './components/teamPage'
import ContactPage from './components/contactPage'
// import About from './components/about'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/about' element={<About />} /> */}
          <Route path='/aboutPage' element={<AboutPage />} />
          <Route path='/whychoosePage' element={<WhychoosePage />} />
          <Route path='/teamPage' element={<TeamPage />} />
          <Route path='/contactPage' element={<ContactPage />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
