import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Contact from "../sections/Contact";

function ProjectPage() {
  return (
    // <div className="bg-gray-900 text-white min-h-screen"> // sebaiknya jangan menggunakan text-white di posisi yang terlalu tinggi
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      <Contact />
      <Footer />
    </div>
  );
}

export default ProjectPage;
