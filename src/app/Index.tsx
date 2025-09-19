import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";

function Index() {
  return (
    // <div className="bg-gray-900 text-white min-h-screen"> // sebaiknya jangan menggunakan text-white di posisi yang terlalu tinggi
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Index;
