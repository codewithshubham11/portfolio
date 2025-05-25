import React from 'react'
import { FaGithub } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: "iNoteBook",
      description: "Secore Note Taking application with authentication and authorization.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      image: "./image/inotebookimage.png",
      githubLink: "https://github.com/codewithshubham11/inotebook"
    },
    {
      title: "TextUtils",
      description: "React Text Manipulation Application.",
      technologies: ["React", "JavaScript", "CSS"],
      image: "./image/Textutilsimage.png",
      liveLink: "https://codewithshubham11.github.io/TEXTUTILIS/",
      githubLink: "https://github.com/codewithshubham11/textutilis"
    },
    {
      title: "NewsApp",
      description: "NewsApp - React Web Application.",
      technologies: ["Javascript", "React", "REST API", "Bootstrap", "GitVersion Control"],
      image: "./image/newsapp.jpeg",
    },
    // Add more projects
  ]

  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                {(!project.liveLink && !project.githubLink) ? (
                  <span className="text-gray-500 italic">No links available</span>
                ) : (
                  <>
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors flex items-center gap-2"
                      >
                        <FaGithub className="text-xl" />
                      </a>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects