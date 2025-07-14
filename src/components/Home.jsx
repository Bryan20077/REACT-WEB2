import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselSlides = [
    {
      title: "Haute Ecole d'Informatique",
      content: "Une infrastructure de qualité et un programme pédagogique qui répond au besoin du marché pour l'employabilité de nos étudiants.",
      image: "src/assets/firstPage_files/image1.jpg"
    },
    {
      title: "Haute Ecole d'Informatique",
      content: "« L'éducation est l'arme la plus puissante pour changer le monde » selon Nelson Mandela. « L'éducation dans l'informatique est une arme très puissante pour lutter contre la pauvreté à Madagascar » selon HEI. C'est notre mission.",
      image: "src/assets/firstPage_files/image2.jpg"
    },
    {
      title: "Haute Ecole d'Informatique",
      content: "Des entreprises partenaires et une équipe pédagogique et administrative qui travaille sans relâche pour la montée en compétences de nos étudiants.",
      image: "src/assets/firstPage_files/image3.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="flex justify-between items-center px-12 py-5 bg-[#001a44]">
        <div className="text-3xl font-bold">
          <img 
            src="src/assets/firstPage_files/cropped-Logo-e1662790239183.png" 
            alt="Logo HEI" 
            className="h-16" 
          />
        </div>
        <div className="flex items-center space-x-8 text-lg">
          <a href="#" className="text-yellow-500 hover:text-yellow-400">Accueil</a>
          <a href="#" className="hover:text-yellow-500">Actualités</a>
          <a href="#" className="hover:text-yellow-500">Bourse d'études</a>
          <a href="#" className="hover:text-yellow-500">Inscription</a>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-2 rounded font-medium">
            INTRANET
          </button>
        </div>
      </nav>

      <header className="relative">
        <div className="absolute inset-0 bg-black/10 z-10"></div>
        <Carousel 
          showThumbs={false} 
          showStatus={false} 
          infiniteLoop 
          autoPlay 
          interval={3000}
          selectedItem={currentSlide}
          onChange={(index) => setCurrentSlide(index)}
          className="h-screen"
        >
          {carouselSlides.map((slide, index) => (
            <div 
              key={index} 
              className="h-screen flex items-center justify-center bg-cover bg-center"
              style={{ backgroundImage: `url('${slide.image}')` }}
            >
              <div className="relative z-20 text-center max-w-4xl px-4 mb-40">
                <h1 className="text-5xl md:text-6xl font-bold mb-8 md:mb-12">{slide.title}</h1>
                <p className="text-lg md:text-xl mb-12">{slide.content}</p>
              </div>
            </div>
          ))}
        </Carousel>

        <div className="absolute bottom-20 left-0 right-0 z-20 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 px-4">
          <button className="bg-white text-[#001a44] hover:bg-yellow-600 text-gray-900 px-6 md:px-8 py-2 md:py-3 rounded-lg font-medium shadow-lg w-full md:w-auto">
            Inscrivez-vous ici
          </button>
          <button className="bg-yellow-500 text-white border border-yellow-500 px-6 md:px-8 py-2 md:py-3 rounded-lg font-medium shadow-lg w-full md:w-auto">
            Emploi du temps
          </button>
          <button className="bg-[#001a44] text-white border border-[#001a44] px-6 md:px-8 py-2 md:py-3 rounded-lg font-medium shadow-lg w-full md:w-auto">
            Programme pédagogique
          </button>
        </div>
      </header>
    </div>
  );
};

export default Home;