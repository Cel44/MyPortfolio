import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Projects from  './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import CustomCursor from './components/CustomCursor';
import IntroAnimation from './components/IntroAnimation';
import Education from './sections/Education';
import { useState } from 'react';
import { motion } from 'framer-motion';


export default function App () {
   const [introDone, setIntroDone] = useState(false);

   return (
      <>

      {/* {introDone && (
      <motion.div className='relative gradient text-white'
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{opacity: introDone ? 1 : 0, y: introDone ? 0 : 20, scale: introDone ? 1 : 0.98 }}
      transition={{duration: 0.7, ease: [0.22, 1, 0.36, 1]}}
      > */}

         <CustomCursor />
         <Navbar />
         <Home />
         <About />
         <Skills />
         <Education />
         <Projects />
         <Contact />
         <Footer />
      {/* </motion.div> */}
      {/* )} */}

      {/* {!introDone && <IntroAnimation onFinish={() => setIntroDone(true)} />} */}
   </>
   )
}