import { motion } from 'framer-motion';
import ParticlesBackground from '../components/ParticlesBackground';


export default function Education() {
   return (
      <section id="education" className="w-full min-h-screen relative bg-black overflow-hidden pl-4">
         <ParticlesBackground />

            <div className="max-w-5xl mx-auto px-6">

               <motion.h2 className='text-3xl mt-5 sm:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-[#1E5F8A] via-[#9587ff] to-[#B06CFF] z-10 flex justify-center py-10'
               initial={{ opacity: 0, y: -30 }}
               whileInView={{opacity: 1, y:0}}
               transition={{duration:0.5, delay:0.3}}
               >
                  Education
               </motion.h2>

               <motion.ul
               className="w-full max-w-4xl space-y-10"
               initial={{ opacity: 0, y: -30 }}
               whileInView={{opacity: 1, y:0}}
               transition={{duration:0.5, delay:0.3}}
               >

                  {/* REVOU */}
                  <li className="relative pl-8 border-l border-[#4338CA]/40">

                     {/* timeline dot */}
                     <div className="absolute -left-2.25 top-4 w-4 h-4 rounded-full
                        bg-linear-to-r from-[#0F172A] via-[#312E81] to-[#5B21B6]
                        shadow-[0_0_18px_rgba(124,58,237,0.6)]"
                     />

                     {/* card */}
                     <div className="rounded-2xl border border-white/10
                        bg-white/5 backdrop-blur-md
                        shadow-xl p-6">

                        <div className="flex flex-col md:flex-row md:items-center gap-3 mb-4">

                        <span className="w-fit rounded-full bg-linear-to-r from-[#312E81] to-[#5B21B6] px-3 py-1 text-xs font-semibold text-white shadow-lg">
                           July 2025 – Jan 2026
                        </span>

                        <span className="text-sm text-gray-400">
                           Revou
                        </span>
                        </div>

                        <h2 className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-[#B06CFF] via-[#9587ff] to-[#1E5F8A] ">
                        Revou Full Stack Software Engineering Program
                        </h2>

                        <p className="mt-4 text-gray-300 leading-relaxed">
                        Completed an intensive 29-week Full-Stack Software Engineering
                        bootcamp covering frontend, backend, and fullstack development
                        through hands-on projects. Built applications using HTML, CSS,
                        JavaScript, React, Next.js, Tailwind CSS, NestJS,
                        PostgreSQL, and Prisma.
                        </p>
                     </div>
                  </li>

                  {/* UNIVERSITY */}
                  <li className="relative pl-8 border-l border-[#4338CA]/40">

                     {/* timeline dot */}
                     <div className="absolute -left-2.25 top-4 w-4 h-4 rounded-full
                        bg-linear-to-r from-[#0F172A] via-[#312E81] to-[#5B21B6]
                        shadow-[0_0_18px_rgba(124,58,237,0.6)]"
                     />

                     <div className="
                        rounded-2xl
                        border border-white/10
                        bg-white/5
                        backdrop-blur-md
                        shadow-xl
                        p-6
                     ">

                        <div className="flex flex-col md:flex-row md:items-center gap-3 mb-4">

                        <span className="
                           w-fit rounded-full
                           bg-linear-to-r
                           from-[#312E81]
                           to-[#5B21B6]
                           px-3 py-1
                           text-xs font-semibold
                           text-white
                           shadow-lg
                        ">
                           2018 – 2024
                        </span>

                        <span className="text-sm text-gray-400">
                           Universitas Surabaya
                        </span>
                        </div>

                        <h2 className="
                        text-xl font-bold
                        bg-clip-text text-transparent
                        bg-linear-to-r
                        from-[#B06CFF]
                        via-[#9587ff]
                        to-[#1E5F8A]
                        ">
                        Faculty of Law
                        </h2>

                        <p className="mt-4 text-gray-300 leading-relaxed">
                        Completed a Bachelor of Law degree focusing on civil law.
                        Strengthened analytical thinking, legal research,
                        and problem-solving through academic projects and case studies.
                        </p>
                     </div>
                  </li>

                  </motion.ul>

         </div>
      </section>
   )
}