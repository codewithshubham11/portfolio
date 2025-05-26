import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
       <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar/>
        <main className='container mx-auto px-4'>
          <Hero/>
          <About/>
          <Projects/>
          <Contact/>
        </main>
        <Footer/>

      </div>
    </>
  )
}

export default App
