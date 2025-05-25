import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ThemeToggle from './components/darkMode'

function App() {

  return (
    <>
      <div className='dark:bg-gray-50 transition-colors duration-300'>
        <Navbar/>
        <ThemeToggle/>
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
