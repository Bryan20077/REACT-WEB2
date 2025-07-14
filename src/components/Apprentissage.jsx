import React from 'react';

const StatsAndGalleryPage = () => {
  const stats = [
    {
      id: 1,
      percentage: "25%",
      text: "Apprentissage théoriques en présentiel"
    },
    {
      id: 2,
      percentage: "25%",
      text: "Apprentissage sur supports numériques"
    },
    {
      id: 3,
      percentage: "25%",
      text: "Travaux individuels de l’étudiant"
    },
    {
      id: 4,
      percentage: "25%",
      text: "Apprentissage en entreprise"
    }
  ];

  const images = [
    "src/assets/firstPage_files/Mask-group-1.jpg",
    "src/assets/firstPage_files/Mask-group-2.webp",
    "src/assets/firstPage_files/Mask-group-3.webp"
  ];

  return (
    <div className="bg-white px-50 pb-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-5">
        {stats.map((stat) => (
          <div key={stat.id} className="bg-red-50 p-6 rounded-lg h-50">
            <div className="text-5xl font-bold text-yellow-500 mb-2">{stat.percentage}</div>
            <div className="text-2  xl font-medium text-[#001a44]">{stat.text}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg">
            <img 
              src={image} 
              alt={`Gallery ${index + 1}`}
              className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsAndGalleryPage;