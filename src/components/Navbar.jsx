import React, { useState, useEffect } from 'react'
import { FiCode,FiHome, FiUser, FiFolder, FiMail } from 'react-icons/fi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#home', label: 'Home', icon: <FiHome className="w-5 h-5" /> },
    { href: '#about', label: 'About', icon: <FiUser className="w-5 h-5" /> },
    { href: '#projects', label: 'Projects', icon: <FiFolder className="w-5 h-5" /> },
    { href: '#contact', label: 'Contact', icon: <FiMail className="w-5 h-5" /> },
    
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled
      ? 'bg-white/90   backdrop-blur-md shadow-lg'
      : 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm'
      }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="#"
              className=" flex items-center gap-2 text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 
                         bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700
                         transition-all duration-300"
            >
              <FiCode className="w-8 h-8 text-blue-600" />
              <span>Portfolio</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative font-medium text-gray-800 hover:text-blue-600
                      transition-colors duration-300 group py-2 flex items-center gap-2"
              >
                {link.icon}
                {link.label}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r 
                           from-blue-600 to-purple-600 scale-x-0 
                           group-hover:scale-x-100 transition-transform duration-300" />
              </a>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen
            ? 'opacity-100 h-64 bg-white/95 backdrop-blur-md rounded-lg shadow-lg'
            : 'opacity-0 h-0 pointer-events-none'
            }`}>
            <div className="py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className=" text-gray-800 hover:text-blue-600 
                       transition-colors duration-300 px-4 py-2
                       hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 
                       rounded-lg flex items-center gap-2"
                >
                  {link.icon}
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar