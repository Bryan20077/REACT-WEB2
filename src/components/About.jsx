import React from 'react';

const SplitPage = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden">
          <div className="md:w-1/2 flex justify-end">
            <img 
              src="src/assets/firstPage_files/A-propos-left-1.jpg" 
              alt="Description de l'image"
              className="w-150 h-full object-cover"
            />
          </div>
          
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <h1 className="text-5xl font-bold text-[#001a44] mb-4">A propos de nous</h1>
            <div>
            <h2 className="text-3xl font-semibold text-[#001a44] mb-6">+3ans</h2>
            
            <p className="text-xl text-[#001a44] mb-4">
              Depuis 3 ans, nous formons ceux qui décodent le futur, aux métiers de l’informatique. Nous sommes un groupe d’experts, de professionnels et des passionnés de l’informatique de Madagascar et du monde entier.
            </p>
            </div>
            <div>
            <h2 className="text-3xl font-semibold text-[#001a44] mb-6">+250 étudiants</h2>
            
            <p className="text-xl text-[#001a44] mb-4">
            Plus de 250 étudiants et plus d’une dizaine d’entreprises ont déjà fait confiance à notre formation habilitée par l’État malgache. Avec eux tous, nous sommes fiers de pouvoir parler de la “grande famille HEI”.
            </p>
            </div>
            <div>
            <h2 className="text-3xl font-semibold text-[#001a44] mb-6">
            Notre mission</h2>
            
            <p className="text-xl text-[#001a44] mb-4">
            Notre mission est d’amener des jeunes malgaches sur des domaines porteurs comme l’intelligence artificielle, la cybersécurité ou la programmation afin de favoriser leur employabilité et le développement de Madagascar.
            </p>
            </div>
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplitPage;