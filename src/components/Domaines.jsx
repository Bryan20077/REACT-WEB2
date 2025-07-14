import React from 'react';

const Domaines = () => {
  const features = [
    {
      id: 1,
      title: "Cloud et cybersécurité",
      description: "Maîtrisez les engrenages des outils en ligne interconnectés sur les nuages (comme sur AWS). Ou encore, devenez maître de la sécurisation des données en ligne ou des programmes et applications contre les cybermenaces. Chez HEI, vous allez vous former dans le domaine du cloud et de la cybersécurité.",
      image: "src/assets/firstPage_files/Cloud-et-cybersecurite_Plan-de-travail-1-150x150.png"
    },
    {
      id: 2,
      title: "Intelligence artificielle",
      description: "Le monde de la reconnaissance faciale ou la détection d’obstacles par les voitures semi-autonomes vous fascinent ? Ce n’est pas sorcier, cela s’apprend. Apprenez les bases de l’intelligence artificielle lors de vos cours chez HEI.",
      image: "src/assets/firstPage_files/Intelligence-artificielle_Plan-de-travail-1-150x150.png"
    },
    {
        id: 3,
        title: "Ingénierie logicielle",
        description: "Apprenez les principes de la conception ou le développement de programmes et d’applications web et mobile et explorez le monde fascinant des “codes”. A la fin de votre formation, vous serez aptes à proposer des solutions pratiques, créatives et innovantes à des particuliers ou des entreprises pour leurs besoins numériques.",
        image: "src/assets/firstPage_files/Ingenierie-logicielle_Plan-de-travail-1-1-150x150.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#001a44] mb-6">Domaines</h1>
          <p className="text-xl text-[#001a44] ">
          Au cours de vos trois ans de formation, naviguez entre les domaines les plus porteurs du numérique du présent et de l’avenir :
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-150">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-8">
                <div className="text-5xl mb-6 text-center flex justify-center">
                <img 
                  src={feature.image} 
                  alt={feature.name}
                />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-yellow-400 mb-4 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-center text-xl text-[#001a44]">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Domaines;