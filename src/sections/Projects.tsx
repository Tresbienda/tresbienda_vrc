const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        <div className="p-4 bg-white rounded shadow">Project 1</div>
        <div className="p-4 bg-white rounded shadow">Project 2</div>
        <div className="p-4 bg-white rounded shadow">Project 3</div>
      </div>
    </section>
  );
};
export default Projects;