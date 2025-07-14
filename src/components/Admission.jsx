import React from 'react';

const Admission = () => {
  const boxes = [
    {
      id: 1,
      number: "01",
      title: "Dépôt de dossiers : ",
      description: "pour les bacheliers de toutes séries sans limite d’âge",
      icone: "fas fa-arrow-right",
      bgColor: "bg-orange-100"
    },
    {
      id: 2,
      number: "02",
      title: "Test de niveau : ",
      description: "composé d’une épreuve de français niveau B2 et d’une épreuve de mathématiques niveau Terminale D",
      icone: "fas fa-arrow-right",
      bgColor: "bg-orange-200"
    },
    {
      id: 3,
      number: "03",
      title: "Inscription définitive : ",
      description: "(si test réussi)",
      bgColor: "bg-orange-300"
    }
  ];

  return (
    <div className="bg-[#6a89cc] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">Admission</h1>
          <p className="text-lg text-white max-w-3xl mx-auto">
Ouverte aux bacheliers de toutes les séries, l’admission chez HEI se fait par test de niveau :
une épreuve de français niveau B2 et d’une épreuve de mathématiques niveau Terminale D. 
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-0 mb-12 overflow-hidden h-60 w-full shadow-lg">
          {boxes.map((box) => (
            <div 
              key={box.id}
              className={`${box.bgColor} p-8 flex-1`}
            >
              <div className="text-5xl font-bold text-white mb-4">{box.number}</div>
              <div className="flex flex-row">
              <p className="text-[#001a44]"><span className='text-xl font-semibold text-[#001a44] mb-3'>{box.title} </span>{box.description}</p><i className={`${box.icone} text-white text-5xl`} ></i>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-3 border-3 text-xl text-white font-medium rounded-lg hover:bg-[#001a44] hover:border-[#001a44] transition duration-300 shadow-md">
            Inscrivez-vous ici
          </button>
          <button className="px-8 py-3 bg-[#001a44] text-xl text-white font-medium rounded-lg hover:bg-gray-300 transition duration-300 shadow-md hover:text-[#001a44]">
            Résultat Concours
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admission;