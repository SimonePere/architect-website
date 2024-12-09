/** @format */

import { Project } from "@/components";
import projectData from "@/data/data";

const ProjectCaseStudy = () => {
  return (
    <>
      <div className="container px-6 pb-10 mx-auto justify-center  ">
        <h2 className=" capitalize  ">
          I miei{" "}
          <span className="underline decoration-[#fcca46]">Progetti</span>{" "}
          <br />
          principali.
        </h2>

        <p className="mt-4 text-[#adadad] ">Ultimi lavori racchiusi per importanza.</p>
      </div>
      <Project projects={projectData} />
    </>

  );
};

export default ProjectCaseStudy;
