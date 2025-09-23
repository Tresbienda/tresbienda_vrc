import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* Left column: About text */}
        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-6">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            I’m a Mechanical Engineering graduate currently working as an FEA
            Engineer. Outside of engineering, I enjoy working on creative
            projects such as 3D Unity avatar modelling, illustration, and
            actively involved in a language learning community.
          </p>
        </div>

        {/* Right column: Skills / Achievements */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">Highlights</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Finite Element Analysis (FEA) in oil & gas industry</li>
            <li>Experienced in ANSYS, Abaqus, and MATLAB</li>
            <li>Creative projects in 3D Unity avatar modelling</li>
            <li>Freelance illustrator & digital design</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
