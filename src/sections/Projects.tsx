import React from "react";
import useEmblaCarousel from "embla-carousel-react";

const Projects: React.FC = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "center", slidesToScroll: 1 });

  const cards = [
    { id: 1, title: "Pressure Vessel Nozzle Modification", desc: "Description of project 1", img: "/p1.png", link: "#" },
    { id: 2, title: "High Pressure High Temperature Pipe Modification", desc: "Description of project 2", img: "/p2.png", link: "#" },
    { id: 3, title: "Gas Exhaust Stack Modification", desc: "Description of project 3", img: "/p3.png", link: "#" },
    { id: 4, title: "Project 4", desc: "Description of project 4", img: "/p4.png", link: "#" },
    { id: 5, title: "Project 5", desc: "Description of project 5", img: "/p5.png", link: "#" },
    { id: 6, title: "Project 6", desc: "Description of project 6", img: "/p6.png", link: "#" },
    { id: 7, title: "Project 7", desc: "Description of project 7", img: "/p7.png", link: "#" },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-900">
        My Projects
      </h2>

      {/* Embla Carousel wrapper */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {cards.map((card) => (
            <a
              key={card.id}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-[0_0_80%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] mx-3 bg-white rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition transform"
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-40 object-cover rounded-t-xl"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600">{card.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
