import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { Project } from "../typings";
import ProjectItem from "./ProjectItem";

interface ProjectsProps {
  projects: Project[];
}

function Projects({ projects }: ProjectsProps) {
  return (
    <div className="h-screen px-4 md:px-24 relative flex flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <SectionTitle title="Projetos" />

      <div className="relative w-full p-8 mt-24 flex gap-8 z-20 overflow-x-scroll overflow-y-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-track-rounded-lg scrollbar-thumb-red-500/80 hover:scrollbar-thumb-red-800/80 active:scrollbar-thumb-red-700/80 scrollbar-thumb-rounded-lg">
        {
          projects?.map(project => (
          <ProjectItem key={project?._id} project={project}/>
            ))
        }
        </div>
    </div>
  );
}

export default Projects;
