import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 via-blue-50 to-blue-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        
        {/* LEFT: Text */}
        <div className="flex-1 flex flex-col items-start text-left">
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-lg italic text-blue-700 mb-2"
          >
            Hi, I’m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl font-extrabold text-blue-900 mb-4"
          >
            Tresbienda <span className="text-blue-600 font-thin">(Nanda)</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-gray-700 text-lg leading-relaxed max-w-lg"
          >
            Mechanical Engineer / Energy Enthusiast / FEA Engineer / 3D Unity
            Avatar Modeller / Illustrator / Language Learning Enthusiast
          </motion.p>

          <motion.a
           href="/Projects"
           initial={{ opacity: 0, x: -50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 1.2, ease: "easeOut" }}
            className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition inline-block"
            >
            View My Work
          </motion.a>
        </div>

        {/* RIGHT: Caricature PNG */}
        <motion.div
          className="flex-1 flex justify-center mt-10 md:mt-0"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            src="/caricature.png" // put your file inside public/
            alt="Caricature"
            className="w-auto h-auto object-contain drop-shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
