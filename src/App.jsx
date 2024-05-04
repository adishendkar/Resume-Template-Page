import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './components/Profile'
import Work from './components/Work.jsx'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {

  return (
    <>
     <div className='flex flex-col items-center justify-center w-full'> 
        <Profile/>
        <Work/>
        <Skills/>
        <Footer/>
     </div>
    </>
  )
}

export default App