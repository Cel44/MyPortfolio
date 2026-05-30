import { motion } from "framer-motion";
import my_pic from "../assets/my_pic.jpg";

export default function About() {

   const stats = [
      {title: "Years of Experience", value: "1 Years"},
      {title: "Focus", value: "Frontend | Backend | FullStack"},
   ]

   const glows = [
      "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
      "bottom-0 right-10 w-[420px] h-[420px] opacity-20 blur-[140px] delay-300",
      "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] opacity-10 blur-[100px]",
   ]
   
   return (
      <section id="about"
      className="w-full min-h-screen flex items-center justify-center relative bg-black text-white overflow-hidden"
      >
         <div className="absolute inset-0 pointer-events-none"
         >
            {glows.map((c, i) => (
               <div
               key={i} 
               className={`absolute rounded-full bg-linear-to-r from-[#1E5F8A] via-[#9587ff] to-[#B06CFF] animate-pulse ${c}`}
               />
            ))}
         </div>

         <div
         className="relative z-10 max-w-6xl w-full mx-auto px-6 md:px-10 lg:px-12 py-20 flex flex-col gap-12"
         >
            <motion.div
            className="flex flex-col md:flex-row items-center md:items-stretch gap-8"
            initial={{opacity: 0, y:24}}
            whileInView={{opacity: 1, y:0}}
            transition={{duration: 0.6}}
            viewport={{ once: true, amount:0.4 }}
            >

               <motion.div
               className="relative w-40 h-40 md:w-50 md:h-50 rounded-2xl overflow-hidden shadow-2xl bg-linear-to-br from-[#1E5F8A] via-[#9587ff] to-[#B06CFF] border border-[#1E5F8A]/25"
               whileHover={{scale:1.02}}
               transition={{type:"spring", stiffness:200, damping:18}}
               >
                  <img src={my_pic} alt="profile picture" 
                  className="absolute inset-0" 
                  />
               </motion.div>

               <div className="flex-1 flex flex-col justify-center text-center md:text-left">
                  <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent 
                  bg-linear-to-r from-[#B06CFF] via-[#9587ff] to-[#B06CFF]">
                     Celine
                  </h2>

                  <p className="mt-2 text-lg sm: text:xl  text-white font-semibold">
                  Web Developer | Frontend Developer | Backend Developer | FullStack Developer
                  </p>

                  <p className="mt-4 text-gray-300 leading-relaxed text-base sm:text-lg max-w-2xl md:max-w-3xl">
                  I am a fullstack software engineering graduate with hands-on experience building end-to-end web applications.
                  </p>

                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-xl">
                     {stats.map((item, i) => (
                        <motion.div key={i} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center"
                        initial={{opacity: 0, y:10}}
                        whileInView={{opacity:1, y:0}}
                        transition={{delay:0.5*i , duration: 0.4}}
                        viewport={{once:true, amount:0.3}}
                        >
                           <div className="text-sm font-semibold text-gray-400"> {item.title} </div>
                           <div className="font-semibold text-sm"> {item.value} </div>
                        </motion.div>
                     ))}
                  </div>

                  <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                     <a href="#" className="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-white bg-linear-to-r from-[#1E5F8A]/30 via-[#9587ff]/70 to-[#B06CFF]/30 border border-black rounded-2xl hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-white">View Projects</a>
                  </div>

               </div>
               
            </motion.div>

            <motion.div className="text-center md:text-left"
            initial={{opacity: 0, x:-30}}
            whileInView={{opacity:1, x:0}}
            transition={{duration: 0.6}}
            viewport={{once: true, amount:0.4}}
            >
               <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 ">
                  About Me
               </h3>

               <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
               Through the REVOU Full-Stack Software Engineering Program, I developed frontend solutions using React, Next.js, and styling using Tailwind CSS, and built backend systems with NestJS, PostgreSQL, and Prisma. I am passionate about building user-friendly and responsive web applications, and I am constantly learning and improving my skills.
               </p>
            </motion.div>
         </div>

         

      </section>
   )
}