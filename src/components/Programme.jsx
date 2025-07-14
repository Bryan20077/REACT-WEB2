import React from 'react';

const Programme = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 flex justify-center align-items-center">
            <img 
              src="src/assets/firstPage_files/IMG-03-e1720537524581-1024x950-1.jpg" 
              alt="Notre programme en action"
              className="h-120"
            />
          </div>
          
          <div className="lg:w-1/2 pr-10">
            <h1 className="text-4xl font-bold text-[#001a44] mb-8">
            Le programme pédagogique
            </h1>
            
            <p className="text-lg text-[#001a44] mb-10 pr-40">
            Suivant le système LMD, jusqu’au Master, notre formation repose sur un programme pédagogique conçu en adéquation avec les attentes du marché. La formation est sanctionnée par un diplôme de Licence et de Master en Informatique reconnu par le MESupRes de Madagascar.
            </p>
            
            <button className="px-8 py-3 bg-white text-[#001a44] font-bold border-3 border-[#001a44] hover:bg-[#001a44] hover:text-white transition duration-300">
              Notre Programme
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programme;