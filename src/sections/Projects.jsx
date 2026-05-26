import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import { projects } from "../data/projects";
import { motion } from "framer-motion";
import ComingSoonCard from "../components/ComingSoonCard";

export default function Project() {
   const glows = [
      "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
      "bottom-0 right-10 w-[420px] h-[420px] opacity-20 blur-[140px] delay-300",
      "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] opacity-10 blur-[100px]",
   ]

   const [selectedProject,
      setSelectedProject] =
      useState(null);

   return (
      <section 
      id="projects" 
      className="w-full min-h-screen flex flex-col items-center justify-center relative bg-black text-white overflow-hidden py-20">
         <div className="absolute inset-0 pointer-events-none">
               {glows.map((c, i) => (
                  <div
                  key={i} 
                  className={`absolute rounded-full bg-linear-to-r from-[#1E5F8A] via-[#9587ff] to-[#B06CFF] animate-pulse ${c}`}
                  />
               ))}
         </div>

         <motion.h2 className='text-3xl mt-5 sm:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-[#B06CFF] via-[#9587ff] to-[#B06CFF] Z-10 mb-20'
         initial={{ opacity: 0, y: -30 }}
         whileInView={{opacity: 1, y:0}}
         transition={{duration:0.5, delay:0.3}}
         >
            Projects
         </motion.h2>

         <motion.div className="max-w-7xl w-full px-6 mx-auto grid md:grid-cols-3 grid-cols-1 gap-8"
         initial={{ opacity: 0, y: -30 }}
         whileInView={{opacity: 1, y:0}}
         transition={{duration:0.5, delay:0.3}}
         >
            {projects.map((project) => (
               <ProjectCard
                  key={project.id}
                  project={project}
                  onOpen={
                  setSelectedProject
                  }
               />
            ))}
         </motion.div>

         <ProjectModal
         project={projects.find((p) => p.id === selectedProject)}
         onClose={() =>
         setSelectedProject(null)
         }/>

         <ComingSoonCard />
      </section>
   );
}