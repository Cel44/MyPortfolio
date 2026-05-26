import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaNodeJs } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiTailwindcss, SiNestjs, SiMongodb, SiPostgresql, SiPrisma } from 'react-icons/si';
import { RiNextjsLine } from 'react-icons/ri';
import { motion, useMotionValue } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

export default function Skills() {

   const skills = [
      {icon: <FaHtml5 />, title: "HTML"},
      {icon: <FaCss3Alt />, title: "CSS"},
      {icon: <SiJavascript />, title: "JavaScript"},
      {icon: <SiTypescript />, title: "Typescript"},
      {icon: <SiTailwindcss />, title: "TailwindCSS"},
      {icon: <FaBootstrap />, title: "Bootstrap"},
      {icon: <FaReact />, title: "React"},
      {icon: <FaNodeJs />, title: "NodeJS"},
      {icon: <RiNextjsLine />, title: "NextJS"},
      {icon: <SiNestjs />, title: "NestJS"},
      {icon: <SiMongodb />, title: "MongoDB"},
      {icon: <SiPostgresql />, title: "PostgreSQL"},
      {icon: <SiPrisma />, title: "Prisma"},
   ];

   const repeated = [...skills, ...skills];

   const [dir, SetDir] = useState(-1);
   const [active, SetActive] = useState(false);
   const sectionRef = useRef(null);
   const trackRef = useRef(null);
   const touchY = useRef(0);
   const X = useMotionValue(0);

   useEffect(() => {
      const el = sectionRef.current;
      if(!el) return;

      const io = new IntersectionObserver((
         [entry]) => {
            SetActive(entry.isIntersecting && entry.intersectionRatio > 0.1);
         },
      {threshold: [0.1] }
      )
      io.observe(el);
      return () => io.disconnect();
   }, [])

   useEffect(() => {
      if(!active) return;

      const onWheel = (e) => SetDir(e.deltaY > 0 ? -1 : 1);
      const onTouchStart = (e) => touchY.current = e.touches[0].clientY;

      const onTouchMove = (e) => {
         if (touchY.current == null) return;
         const delta = e.touches[0].clientY - touchY.current;
         setDir(delta > 0 ? 1 : -1);
         touchY.current = e.touches[0].clientY;
      };

      window.addEventListener('wheel', onWheel, { passive: true });
      window.addEventListener('touchstart', onTouchStart, { passive: true });
      window.addEventListener('touchmove', onTouchMove, { passive: true });

      return () => {
         window.removeEventListener('wheel', onWheel);
         window.removeEventListener('touchstart', onTouchStart);
         window.removeEventListener('touchmove', onTouchMove);
      };
      
   }, [active]);

   useEffect(() => {
      let id;
      let last = performance.now();
      const SPEED = 80;

      const tick = (now) => {
         const dt = (now - last) / 1000;
         last = now;
         let next = X.get() + SPEED*dir*dt;
         const loop = trackRef.current.scrollWidth/2 || 0;

         if(loop){
            if(next <=  -loop) 
               next += loop;
            if (next >= loop)
               next -= loop;
         }

         X.set(next);
         id = requestAnimationFrame(tick);
      };
         id = requestAnimationFrame(tick);
         return () => cancelAnimationFrame(id);
      
   }, [dir, X]);


   return (
      <section id="skills"
      ref={sectionRef}
      className="h-1/2 w-full pb-8 flex flex-col items-center justify-center relative bg-black text-white overflow-hidden"
      >
         <div className='absolute inset-0 pointer-events-none'>
            <div className='absolute top-1/4 left-0 w-75 h-75 rounded-full bg-linear-to-r from-[#1E5F8A] via-[#9587ff] to-[#B06CFF] opacity-2 blur-[120px] animate-pulse' />
            
            <div className='absolute bottom-1/4 right-0 w-75 h-75 rounded-full bg-linear-to-r from-[#1E5F8A] via-[#9587ff] to-[#B06CFF] opacity-2 blur-[120px] animate-pulse' />
         </div>

         <motion.h2 className='text-3xl mt-5 sm:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-[#B06CFF] via-[#9587ff] to-[#1E5F8A] z-10'
         initial={{ opacity: 0, y: -30 }}
         whileInView={{opacity: 1, y:0}}
         transition={{duration:0.5, delay:0.3}}
         >
            Skills
         </motion.h2>

         <motion.p className='mt-2 mb-8 text-white/90 text-base sm:text-lg z-10'
         initial={{ opacity: 0, y: -10 }}
         whileInView={{opacity: 1, y:0}}
         transition={{duration:0.5, delay:0.3}}
         >
            Modern Application | Modern Technologies
         </motion.p>

         <div className='relative w-full'>
            <motion.div
            ref={trackRef}
            className='flex md:gap-10 sm:gap-3 text-5xl text-[#B06CFF]'
            style={{x: X, whiteSpace:"nowrap", willChange:"transform" }}
            >
               {repeated.map((skill, index) => (
                  <div key={index}
                  className='flex flex-col items-center gap-2 min-w-30'
                  aria-label= {skill.title}
                  title= {skill.title}
                  >
                     <span className='hover:scale-125 transition-transform duration-300'>{skill.icon}</span>
                     <p className='font-medium text-sm'>{skill.title}</p>
                  </div>
               ))}
            </motion.div>
         </div>

      </section>
   )
}