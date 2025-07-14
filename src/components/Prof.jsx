import React from 'react';

const Prof = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Jean-Aimé Maxa",
      role: "Responsable technique cybersécurité chez CES France Continental (Toulouse - France)",
      image: "src/assets/firstPage_files/Jean-Aime-Maxa-modified-150x150.jpg"
    },
    {
      id: 2,
      name: "Parison Ravalomanda",
      role: "Ingénieur en informatique | Ingénieur logiciel chez Google (Londre - UK)",
      image: "src/assets/firstPage_files/Parison-e1716502987165-150x150.png"
    },
    {
      id: 3,
      name: "Julien RAJERISON ",
      role: "Lead Développeur | Fondateur de l'association Techzara Madagascar",
      image: "src/assets/firstPage_files/Julien-150x150.jpg"
    }
  ];

  return (
    <div className="bg-[#6a89cc] py-12 sm:px-6">
      <div className="text-center px-4 sm:px-8 md:px-12 lg:px-30">
        <h1 className="text-4xl text-white font-bold mb-6">L'équipe pédagogique</h1>
        
        <p className="text-xl text-white mb-12">
        Notre équipe pédagogique se compose d’experts nationaux et internationaux de l’informatique, de la cybersécurité, de l’intelligence artificielle, dont un ingénieur chez Google. Ils sont passionnés par l’informatique et sont engagés vers l’excellence. Nous sommes conscients que cette équipe est la pierre angulaire de l’employabilité de nos étudiants, elle a été soigneusement sélectionnée.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 h-110">
              <div className="p-4 flex justify-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-50 h-50 rounded-full object-cover border-4 border-gray-100"
                />
              </div>
              
              <div className="px-6 py-4">
                <h3 className="text-2xl font-bold text-[#001a44] mb-2">{member.name}</h3>
                <p className="text-[#001a44]">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prof;