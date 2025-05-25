import React from 'react'
import { FiDownload } from 'react-icons/fi'

const Hero = () => {
    const handleDownloadCv = () => {
        const link = document.createElement('a');
        link.href = 'https://drive.google.com/file/d/1of1z9otQLw5zlsbswSjfciO2TLa-vif8/view?usp=drivesdk'; 
        link.download = 'Shubham.resume.pdf'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
            <div className="container mx-auto px-4 py-20">
                <div className="text-center animate-fadeIn">
                    <div className="mb-8">
                        <h2 className="text-lg md:text-xl text-blue-600 font-medium mb-4 animate-slideDown">
                            Welcome to my portfolio
                        </h2>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-slideDown">
                            Hi, I'm Shubham Yadav
                        </h1>
                        <div className="h-1 w-20 bg-blue-600 mx-auto mb-6 animate-scaleX"></div>
                        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto animate-slideUp">
                            Full Stack Developer passionate about creating innovative web solutions
                        </p>
                    </div>

                    <div className="space-x-4 animate-fadeIn">
                        <button 
                            onClick={handleDownloadCv}
                            className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg
                                     hover:from-blue-700 hover:to-blue-800 
                                     transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl
                                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            <span className="flex items-center space-x-2">
                                <span>Download CV</span>
                                <FiDownload className="w-5 h-5 group-hover:animate-bounce" />
                            </span>
                        </button>
                        <a
                            href="#contact"
                            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg border-2 border-blue-600
                                     hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1
                                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Let's Talk
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero