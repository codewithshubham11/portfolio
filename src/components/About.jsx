import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="space-y-6 text-gray-600">
            <p className="text-lg md:text-xl leading-relaxed">
              I am a passionate Full Stack Developer with experience in building dynamic and responsive web applications. 
              My journey in web development has equipped me with a strong foundation in both frontend and backend technologies.
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              My expertise includes:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-6 list-disc">
              <li>Frontend Development (React, Next.js)</li>
              <li>Backend Development (Node.js, Express)</li>
              <li>Database Management (MongoDB, MySQL)</li>
              <li>RESTful API Design</li>
              <li>UI/UX Design Principles</li>
              <li>Version Control (Git)</li>
            </ul>
            <p className="text-lg md:text-xl leading-relaxed">
              I am dedicated to creating user-friendly interfaces and improving user experience through thoughtful design and functionality. 
              My goal is to build scalable and maintainable applications that provide real value to users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


