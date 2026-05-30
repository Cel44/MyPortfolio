import ParticlesBackground from "../components/ParticlesBackground";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { CgMail } from "react-icons/cg";
import { FaGithub, FaLinkedin} from "react-icons/fa";
import avatar from "../assets/avatar.png";

const socials = [
   {Icon : FaGithub, label: "Github", link: "https://github.com/Cel44"},
   {Icon : CgMail, label:"Email", link: "mailto:celineoei04@gmail.com"},
   {Icon : FaLinkedin, label:"LinkedIn", link: "https://www.linkedin.com/in/virginia-celine-oei-12235a3b1/"},
]

const glowVariants = {
   initial: { scale: 1, y:0, filter:"drop-shadow(0px 0px 0px rgba(0, 0, 0, 0))" },
   hover: {
      scale: 1.2,
      y:-3,
      filter:"drop-shadow(0 0 8px rgba(13, 88, 204, 0.9)) drop-shadow(0 0 8px rgba(16, 185, 129, 0.8))",
      transition: {type: "spring", stiffness: 300, damping: 15}
   },
   tap: {scale: 0.9, y:0, transition: {duration:0.08} }
}

export default function Home() {

   const roles = useMemo(() => ["Web Developer", "Frontend Developer", "Backend Developer", "FullStack Developer"], []);

   const [index, setIndex] = useState(0);
   const [subIndex, setSubIndex] = useState(0);
   const [deleting, setDeleting] = useState(false);

   useEffect(() => {
      const current = roles[index];
      const timeout = setTimeout(() => {
         if(!deleting && subIndex < current.length) setSubIndex(v => v + 1);
         else if(!deleting && subIndex === current.length) setTimeout(() => setDeleting(true), 1200);
         else if(deleting && subIndex > 0) setSubIndex(v => v - 1);
         else if(deleting && subIndex === 0) {setDeleting(false); setIndex (p => (p + 1) % roles.length);}

      }, deleting ? 40 : 60);

      return () => clearTimeout(timeout);
   }, [subIndex, index, deleting, roles]);

   return (
      <section
      id="home" className="w-full h-screen relative bg-black overflow-hidden pl-4">
         <ParticlesBackground />

         <div className="absolute inset-0">
            <div className="absolute -top-32 -left-32 
            w-[70vw] sm:w-[50vw] md:w-[40vw]
            h-[70vw] sm:h-[50vw] md:h-[40vw]
            max-w-125 max-h-125
            rounded-full
            bg-linear-to-r from-[#1E5F8A] via-[#9587ff] to-[#B06CFF]
            opacity-30 sm:opacity-20 md:opacity-10
            blur-[100px] sm:blur-[130px] md:blur-[150px]
            animate-pulse"
            ></div>

            <div className="absolute bottom-0 right-0
            w-[70vw] sm:w-[50vw] md:w-[40vw]
            h-[70vw] sm:h-[50vw] md:h-[40vw]
            max-w-125 max-h-125
            rounded-full
            bg-linear-to-r from-[#1E5F8A] via-[#9587ff] to-[#B06CFF]
            opacity-30 sm:opacity-20 md:opacity-10
            blur-[100px] sm:blur-[130px] md:blur-[150px]
            animate-pulse delay-1000"
            ></div>
         </div>

         <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col justify-center h-full text-center lg:text-left relative">
               <div className="w-full lg:pr-24 mx-auto max-w-3xl">
                  <motion.div
                  className="mb-3 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white tracking-wide min-h-[1.6rem]"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  >
                     <span>
                        {roles[index].substring(0, subIndex)}
                     </span>

                     <span
                     className="inline-block w-0.5 ml-1 bg-white animate-pulse align-middle"
                     style={{height:"1em"}}>
                     
                     </span>
                  </motion.div>

                  <motion.h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 text-transparent bg-clip-text bg-linear-to-r from-[#1E5F8A] via-[#9587ff] to-[#B06CFF] font-black drop-shadow-2xl"
                  initial={{opacity: 0, y:40}}
                  animate={{opacity: 1, y:0}}
                  transition={{duration: 1}}
                  >
                     Hello, I'm &nbsp; <br />
                     <span className="text-white font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:whitespace-nowrap">
                     Celine
                     </span>
                  </motion.h1>
                  
                  <motion.p 
                  className="mt-6 text-sm md:text-lg lg:text-xl font-semibold text-gray-300 max-w-2xl mx-auto lg:mx-0"
                  initial={{opacity: 0, y:20}}
                  animate={{opacity: 1, y:0}}
                  transition={{duration: 0.8, delay: 0.4}}
                  >
                  Developing Websites and Applications One Line of Code at a Time
                  </motion.p>

                  <motion.div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6 "
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  transition={{duration: 0.8, delay: 0.8}}
                  >
                     <a href="#projects"
                     className="px-6 py-3 rounded-full font-medium text-base text-white bg-linear-to-r from-[#1E5F8A] via-[#9587ff] to-[#B06CFF] shadow-lg hover:scale-105 transition-all"
                     >View My Works
                     </a>

                     <a href="/CV_Virginia Celine Oei.pdf"
                     download
                     className="px-6 py-3 rounded-full font-medium text-base text-black bg-white shadow-lg hover:scale-105 transition-all"
                     >
                        Download CV
                     </a>
                  </motion.div>

                  <div className="mt-10 flex gap-5 text-xl md:text-2xl justify-center lg:justify-start ">
                     {socials.map(({Icon, label, link}) => (
                        <motion.a 
                        href={link}
                        key={label}
                        target="_blank"
                        aria-label={label}
                        rel="noopener noreferrer"
                        variants={glowVariants}
                        initial="initial"
                        whileHover="hover"
                        whileTap="tap"
                        className="hover:text-white text-gray-300 transition-colors duration-300"
                        >
                           <Icon />
                        </motion.a>
                     ))}
                  </div>

               </div>

            </div>

            <div className="relative hidden lg:block">

                  {/* Glow effect behind the image */}
                  {/* <div
                  className="absolute top-1/2 -translate-y-1/2 pointer-events-none"
                  style={{ 
                     right: "50%", 
                     transform: "translateX(50%)",
                     width: "min(22vw, 410px)", height: "min(40vw, 780px)", borderRadius: "50%",
                     filter: "blur(38px)", opacity: 0.32 , 
                     background: "conic-gradient(from 0deg, #B06CFF, #9587ff, #B06CFF)"
                  }}
                  /> */}

                  <motion.img src={avatar} alt="Celine" 
                  className="absolute top-1/2 -translate-y-1/2 object-contain select-none pointer-events-none"
                  style={{ 
                     right: "-30px", width: "min(45vw, 780px)", maxHeight: "90vh"
                  }}
                  initial={{opacity: 0, y:40, scale: 0.98}}
                  animate={{opacity: 1, y:0, scale: 1}}
                  transition={{duration: 0.2, duration: 0.8}}
                  />
            </div>
            

         </div>
      </section>
   )
}