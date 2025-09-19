const Navbar = () => {
  return (
    <nav className="p-4 bg-white shadow sticky top-0 z-50">
        <ul className="flex space-x-6 justify-center font-semibold">
            <li><a href="#hero" className="hover:text-blue-600">Home</a></li>
            <li><a href="#about" className="hover:text-blue-600">About</a></li>
            <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
            <li><a href="#experience" className="hover:text-blue-600">Experience</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
    </nav>
  );
};

export default Navbar;
