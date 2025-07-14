import React from 'react';

const Langages = () => {
  const firstRowLogos = [
    "src/assets/firstPage_files/Java-150x150.png",
    "src/assets/firstPage_files/python-150x150.png",
    "src/assets/firstPage_files/JS-150x150.png",
    "src/assets/firstPage_files/C-150x150.png",
    "src/assets/firstPage_files/TS-150x150.png"
  ];

  const secondRowLogos = [
    "src/assets/firstPage_files/docker-300x77.png",
    "src/assets/firstPage_files/next.png",
    "src/assets/firstPage_files/aws.png",
    "src/assets/firstPage_files/serverless.png",
    "src/assets/firstPage_files/react.png",
    "src/assets/firstPage_files/openapi.png"
  ];

  return (
    <div className="bg-gray-100 py-16 px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#001a44] mb-6">
            Les technos et langages utilisées
          </h1>
          <p className="text-xl text-[#001a44]">
            Nos étudiants sont formés à l'utilisation et à la maîtrise des langages de programmation Java et JavaScript. 
            Ces deux langages occupent une place de choix dans le domaine du développement logiciel et du web, 
            offrant une polyvalence et une robustesse appréciées par les développeurs à travers le monde.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {firstRowLogos.map((logo, index) => (
            <div key={`first-${index}`} className="w-40 h-40 flex items-center justify-center p-4">
              <img 
                src={logo} 
                alt={`Tech logo ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {secondRowLogos.map((logo, index) => (
            <div key={`second-${index}`} className="w-35 h-25 flex items-center justify-center p-4x">
              <img 
                src={logo} 
                alt={`Tech logo ${index + 6}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Langages;