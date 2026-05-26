import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { motion } from "framer-motion";

export default function Contact() {
   const glows = [
      "-top-10 -left-10 w-[360px] h-[120px] opacity-20 blur-[120px]",
      "bottom-0 right-10 w-[210px] h-[210px] opacity-20 blur-[140px] delay-300",
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

   const socials = [
      {Icon : FaGithub, label: "Github", link: "https://github.com/Cel44"},
      {Icon : CgMail, label:"Email", link: "mailto:celineoei04@gmail.com"},
      {Icon : FaLinkedin, label:"LinkedIn", link: "https://www.linkedin.com/in/virginia-celine-oei-12235a3b1/"},
   ]

   return (
      <section 
      id="contact" 
      className="w-full h-1/4 flex flex-col items-center relative bg-black text-white overflow-hidden py-10">
         <div className="absolute inset-0 pointer-events-none">
               {glows.map((c, i) => (
                  <div
                  key={i} 
                  className={`absolute rounded-full bg-linear-to-r from-[#1E5F8A] via-[#9587ff] to-[#B06CFF] animate-pulse ${c}`}
                  />
               ))}
         </div>

         <div className="container mx-auto px-4 flex flex-col items-center">
            <motion.h2 className='text-3xl sm:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-[#B06CFF] via-[#9587ff] to-[#1E5F8A] z-10'
            initial={{ opacity: 0, y: -30 }}
            whileInView={{opacity: 1, y:0}}
            transition={{duration:0.5, delay:0.3}}
            >
               Contact Me
            </motion.h2>

            <div className="mt-10 flex gap-15 text-xl md:text-2xl lg:text-6xl justify-center">
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
                  className=" hover:text-white text-gray-300 transition-colors duration-300"
                  >
                     <div className="flex flex-col items-center">
                        <Icon />
                        <span className="text-base">{label}</span>
                     </div>
                  </motion.a>
               ))}
            </div>

         </div>
      </section>
   )
}