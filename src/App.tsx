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
    <RouterProvider router={router} />
  );
}

export default App;
