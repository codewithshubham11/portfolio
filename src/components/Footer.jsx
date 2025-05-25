import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/codewithshubham11" className="hover:text-blue-400">GitHub</a>
          <a href="https://www.linkedin.com/in/shubham-yadav-541b7a296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:text-blue-400">LinkedIn</a>
          <a href="https://www.instagram.com/shubhamyadav_143?igsh=OWkxamlzczg4ZDRh" className="hover:text-blue-400">Instagram</a>
        </div>
        <p>© {new Date().getFullYear()} Shubham Yadav. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer