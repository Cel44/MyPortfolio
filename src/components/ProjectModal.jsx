import { useEffect } from "react";

export default function ProjectModal({project, onClose}) {
   useEffect(() => {
      function handleEsc(e) {
         if (e.key === "Escape") {
         onClose();
         }
      }

      if (project) {
         document.body.classList.add("overflow-hidden");
         document.addEventListener("keydown", handleEsc);
      }

      return () => {
         document.body.classList.remove("overflow-hidden");
         document.removeEventListener("keydown", handleEsc);
      };

   }, [onClose]);

   if (!project) return null;

   return (
      <div
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
      >
         <div className="bg-white rounded-2xl w-[90%] max-h-[80vh] relative max-w-4xl overflow-y-auto p-8 px-15"
         onClick={(e) => e.stopPropagation()}
         >
            <button
               onClick={onClose}
               className="mb-4 bg-red-500
               text-white px-4 py-2 rounded-b-2xl absolute right-8 top-0"
            >
               Close
            </button>

            <h2 className="text-3xl font-bold text-black mb-4">
               {project.title}
            </h2>

            <div>
               <h3 className="text-xl font-bold text-black">
                  Overview
               </h3>

               <p className="text-lg text-black">
                  {project.overview}
               </p>
            </div>

            <div className="mt-6">
               <h3 className="text-xl font-bold text-black">
                  Method
               </h3>

               <ul className="list-disc list-inside text-lg text-black">
                  {project.method.map((item, i) => (
                     <li key={i}>{item}</li>
                  ))}
               </ul>
            </div>

            <div className="mt-6">
               <h3 className="text-xl font-bold text-black -mb-4">
                  Features
               </h3>

               <div>
                  {Object.entries(project.features).map(([title, items], i) => (
                     <div key={i} className="flex flex-col">
                        <h4 className="text-lg font-semibold text-black mt-4">{title}</h4>
                        <ul className="list-disc list-inside text-lg text-black">
                           {items.map((item, i) => (
                              <li key={i}>{item}</li>
                           ))}
                        </ul>
                     </div>
                  ))}
               </div>

            </div>

            <div className="mt-6">
               <h3 className="text-xl font-bold text-black">
                  My Contributions
               </h3>

               <ul className="list-disc list-inside text-lg text-black">
                  {project.contributions.map((item, i) => (
                     <li key={i}>{item}</li>
                  ))}
               </ul>
            </div>

            <div className="mt-6">
               <h3 className="text-xl font-bold text-black">
                  Tech Stack
               </h3>

               <p className="text-lg text-black">
                  {project.techStack.join(", ")}
               </p>
            </div>

            <div className="mt-6">
               <h3 className="text-xl font-bold text-black">
                  Screenshots / Preview
               </h3>
               <div className="mt-2 grid grid-cols-3 gap-2">
                  {project.screenshots.map((screenshot, i) => (
                     <div key={i} className="bg-gray-100 rounded overflow-hidden h-32 flex items-center justify-center text-xs text-gray-500">
                        <img src={screenshot.src} alt={screenshot.alt} className="w-full h-full object-cover object-[0%_60%]" />
                     </div>
                  ))}
               </div>
            </div>

            <p className="mt-3 text-base text-gray-500">
               This modal contains project details only. Press [esc] or close to return to the page.
            </p>

         </div>
      </div>
   );
}