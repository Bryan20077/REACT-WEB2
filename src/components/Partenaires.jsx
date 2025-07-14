import React from 'react';

const Partenaires = () => {
  const firstRowPartners = [
    "src/assets/firstPage_files/LOGO-NEXTA.jpg",
    "src/assets/firstPage_files/PN_Logo_baseline_color_ENG.png",
    "src/assets/firstPage_files/Yooz-2023-Logo-2.webp",
    "src/assets/firstPage_files/logo-etech.png",
    "src/assets/firstPage_files/logo_emit.png"
  ];

  const secondRowPartners = [
    "src/assets/firstPage_files/Logo-Numer-vf.png",
    "src/assets/firstPage_files/bp-logo-full-1024x331.jpg",
    "src/assets/firstPage_files/YIF_LOGO_512x512_BL_on_WH-1.webp",
    "src/assets/firstPage_files/logo-kante-company-1.png"
  ];

  return (
    <div className="bg-white py-16 px-12"> 
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#001a44] mb-6">
            Nos partenaires
          </h1>
          <p className="text-xl text-[#001a44]">
            L'employabilité de nos étudiants se base sur la pertinence de notre programme pédagogique 
            et de la composition de notre corps enseignant mais aussi du soutien et la collaboration 
            des entreprises partenaires.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
          {firstRowPartners.map((partner, index) => (
            <div key={`first-${index}`} className="w-48 h-24 flex items-center justify-center p-2">
              <img 
                src={partner} 
                alt={`Partenaire ${index + 1}`}
                className="max-h-full max-w-full object-contain  "
              />
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8">
          {secondRowPartners.map((partner, index) => (
            <div key={`second-${index}`} className="w-48 h-24 flex items-center justify-center p-2">
              <img 
                src={partner} 
                alt={`Partenaire ${index + 6}`}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partenaires;