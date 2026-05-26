export default function ProjectCard({project, onOpen}) {

   return (
     <div className="bg-gray-300 rounded-2xl shadow-xl flex flex-col min-h-107.5">
 
      <div className="h-64 overflow-hidden rounded-t-2xl">
         <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-fit transition-transform rounded-t-2xl pointer-events-none"
         />
      </div>
 
       <div className="p-4 flex flex-col flex-1 gap-2" >
         <h3 className="font-semibold text-xl flex-1 text-black">
           {project.title}
         </h3>
 
         <p className="text-sm text-gray-600 flex-1">
           {project.shortDescription}
         </p>

         <div className="flex gap-3">
            <button
            onClick={() => onOpen(project.id)}
            className="inline-block bg-linear-to-r from-[#1E5F8A] via-[#9587ff] to-[#B06CFF] text-white px-3 py-1 rounded-full hover:scale-105 transition"
            >
            See Details
            </button>

            <div className="p-0.5 bg-linear-to-r from-[#B06CFF] via-[#9587ff] to-[#1E5F8A] rounded-full hover:scale-105 transition">
               <a href={project.link} target="_blank" rel="noopener" className="inline-block bg-white text-black px-3 py-1 rounded-full ">View Repo</a>
            </div>
         </div>

       </div>
     </div>
   );
 }