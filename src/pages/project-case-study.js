/** @format */

import { Project } from "@/components";
import projectData from "@/data/data";

const ProjectCaseStudy = () => {
  return (
    <div className=" py-10 mx-auto flex flex-col">
      <div className="container px-6 pb-10 mx-auto ">
        <h2 className=" capitalize  ">
          I miei{" "}
          <span className="underline decoration-[#fcca46]">Progetti</span>{" "}
          <br />
          principali.
        </h2>

        <p className="mt-4 ">
          Ultimi lavori racchiusi per importanza.
        </p>

        
      </div>

<Project projects={projectData}/>
      
    </div>
  );
};

export default ProjectCaseStudy;
