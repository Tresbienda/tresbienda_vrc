// import Navbar from "./components/Navbar";
// import Hero from "./sections/Hero";
// import About from "./sections/About";
// import Projects from "./sections/Projects";
// import Skills from "./sections/Skills";
// import Contact from "./sections/Contact";
// import Footer from "./components/Footer";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Index from "./app/Index";
import AboutPage from "./app/About";
import ProjectPage from "./app/Projects";
import ContactPage from "./app/Contact";
import ExperiencePage from "./app/Experience";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/projects",
    element: <ProjectPage />,
  },
  {
    path: "/experience",
    element: <ExperiencePage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
]);

function App() {
  return (
    // <div className="bg-gray-900 text-white min-h-screen"> // sebaiknya jangan menggunakan text-white di posisi yang terlalu tinggi
    // <div className="bg-gray-900 min-h-screen">
    //   <Navbar />
    //   <Hero />
    //   <About />
    //   <Projects />
    //   <Contact />
    //   <Footer />
    // </div>
    <RouterProvider router={router} />
  );
}

export default App;
