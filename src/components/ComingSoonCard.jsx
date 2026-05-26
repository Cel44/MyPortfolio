import { motion } from "framer-motion";

export default function ComingSoonCard() {
   return (
      <motion.div
         className="min-h-50 w-100 rounded-2xl border border-dashed border-indigo-400/40 bg-white/5 backdrop-blur-sm flex flex-col items-center justify-center text-center px-6 transition duration-300 hover:-translate-y-2 hover:border-indigo-400 m-10"
         initial={{ opacity: 0, y: -30 }}
         whileInView={{opacity: 1, y:0}}
         transition={{duration:0.5, delay:0.3}}
      >
         <a href="https://github.com/Cel44" target="_blank" rel="noopener">
            <h3 className="text-4xl m-4">
               More Projects
            </h3>
   
            <h3 className="text-xl font-semibold text-white">
               On GitHub
            </h3>
   
            <p className=" mt-3 text-sm text-gray-300 max-w-xs">
               Check back for more projects! < br/>
               Or view them now on GitHub.
            </p>
         </a>

     </motion.div>
   );
 }