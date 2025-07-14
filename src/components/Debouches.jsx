import React from 'react';

const Debouches = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-20">
      <div className=" mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-bold text-[#001a44] mb-6">
            Quelques débouchés
            </h1>
            
            <p className="text-xl text-[#001a44] mb-6">
            Formez-vous à une panoplie de métiers du numérique avec nous et venez acquérir les fondements de la programmation (qui vous servira pour les différents métiers) ! Ce sont des métiers porteurs, des métiers du présent, des métiers du futur…
            </p>
            
            <p className="text-xl text-[#001a44] mb-8 mt-15">
            Développeur back end, développeur front end, développeurs mobile, chefs de projet, exploitants cloud, analystes cybersécurité, pentesters, auditeur technique SSI, auditeur organisationnel SSI, administrateur système et réseau, développeur de sécurité…
            </p>
            
            
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden flex justify-center">
              <img 
                src="src/assets/firstPage_files/IMG-02-e1720543344824-987x1024-1.jpg" 
                alt="Notre solution en action"
                className="w-140 h-150"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Debouches;