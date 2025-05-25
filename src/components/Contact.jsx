import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { FiMail, FiUser, FiMessageSquare } from 'react-icons/fi'
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const [status, setStatus] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('sending...')

        try {
            const result = await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formData,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            if (result.text === 'OK') {
                setStatus('Message sent successfully!')
                setFormData({ name: '', email: '', message: '' })
            } else {
                setStatus('Failed to send message. Please try again.')
            }
        } catch (error) {
            console.error('Error:', error)
            setStatus('Error sending message. Please try again.')
        }
    }
    return (
        <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Get In Touch</h2>
                <p className="text-secondary-500 text-center mb-12 max-w-2xl mx-auto">
                    Have a project in mind? Let's talk about it. I'm always open to discussing new projects and opportunities.
                </p>

                <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                                <FiUser className="mr-2" />
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-50 transition-all duration-200"
                                placeholder="Your name"
                            />
                        </div>

                        <div>
                            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                                <FiMail className="mr-2" />
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-50 transition-all duration-200"
                                placeholder="your.email@example.com"
                            />
                        </div>

                        <div>
                            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                                <FiMessageSquare className="mr-2" />
                                Message
                            </label>
                            <textarea
                                rows="5"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-50 transition-all duration-200"
                                placeholder="Your message here..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={status === 'sending...'}
                            className="group w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-4 rounded-lg
             hover:from-blue-600 hover:to-blue-700 
             disabled:opacity-50 disabled:cursor-not-allowed
             transition-all duration-300 transform hover:scale-[1.02]
             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
             shadow-lg hover:shadow-xl"
                        >
                            {status === 'sending...' ? (
                                <div className="flex items-center justify-center space-x-2">
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span>Sending...</span>
                                </div>
                            ) : (
                                <div className="flex items-center justify-center space-x-2">
                                    <span>Send Message</span>
                                    <svg
                                        className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        />
                                    </svg>
                                </div>
                            )}
                        </button>
                        {status && (
                            <div className={`text-center p-4 rounded-lg ${status.includes('success')
                                    ? 'bg-green-50 text-green-600'
                                    : 'bg-red-50 text-red-600'
                                }`}>
                                {status}
                            </div>
                        )}

                    </form>

                </div>
            </div>

        </section>
    )
}

export default Contact



