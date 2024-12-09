/** @format */
import Image from "next/image";
import Link from "next/link";

const Project = ({ projects }) => {
  return (
    
    <div className=" mx-auto flex flex-col gap-10">
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`design-card lg:w-4/5 mx-auto ${
            index % 2 === 0 ? "flex-row" : "flex-row-reverse"
          }`}
        >
          <div className="h-64 overflow-hidden">
            <Image
              alt="project image"
              className="object-cover object-center h-full w-full"
              src={project.image}
              width={1200}
              height={500}
            />
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
            {project.sections.map((section, secIndex) => (
              <div
                key={secIndex}
                className={`sm:w-1/3 sm:pr-8 sm:py-8 ${
                  secIndex === 0
                    ? "order-first"
                    : secIndex === 1
                    ? "order-last"
                    : "order-none"
                }`}
              >
                <div className="flex flex-col justify-center">
                  <h2 className="mt-4">{section.title}</h2>
                  <div className="w-12 h-1 mt-2 mb-4"></div>
                  <p >{section.content}</p>
                </div>
              </div>
            ))}
          </div>
          <Link
            href={project.url}
            target="_blank" // Aggiungi target="_blank"
            rel="noopener noreferrer" // Aggiungi rel="noopener noreferrer" per sicurezza
            className="inline-flex items-center focus:outline-none mt-4 "
            aria-label={`Learn more about ${project.title}`}
          >
            Fonti correlate: {project.source}
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Project;
