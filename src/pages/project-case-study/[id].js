/** @format */

import { Breadcrumb, Project } from "@/components";
import projectData from "@/data/data";  // I tuoi dati dei progetti

// 1. getStaticPaths per generare le URL dinamiche
export async function getStaticPaths() {
  const paths = projectData.map((project) => ({
    params: { id: project.id },  // Qui "id" è il parametro dinamico
  }));

  return { paths, fallback: false };  // Se fallback è false, restituisce un 404 se il progetto non esiste
}

// 2. getStaticProps per recuperare i dati del progetto specifico
export async function getStaticProps({ params }) {
  const project = projectData.find((proj) => proj.id === params.id);

  if (!project) {
    return { notFound: true }; // Se il progetto non viene trovato, mostra un 404
  }

  return {
    props: {
      project,  // Passiamo i dati del progetto alla pagina
    },
  };
}

// 3. Il componente che renderizza la pagina
const ProjectCaseStudy = ({ project }) => {
  return (
    <div className=" mx-auto flex flex-col">
      <div className="container px-6 pb-10 mx-auto ">
        <h2 className="capitalize">
          {project.title}
          <br />
          <span className="underline decoration-[#fcca46]">{project.sponsor }</span>{" "}
        </h2>

        <p className="mt-4">
          {project.description}
        </p>
        <div  className="mt-10">

      <Breadcrumb/>
        </div>
      </div>


      <Project projects={[project]} />  {/* Usa il componente per mostrare il progetto */}
    </div>
  );
};

export default ProjectCaseStudy;
