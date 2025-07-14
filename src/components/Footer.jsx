import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#001a44] text-white px-12 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
            <img src="src/assets/firstPage_files/cropped-Logo-e1662790239183.png" alt="" className="w-25" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className='px-10'>
            <h3 className="text-gray-300 text-lg mb-4">Formation habilitée par l'Etat suivant le système LMD</h3><br />
            <p className="text-lg text-gray-200">Habilitation MESupRes n°31309/2023</p>
          </div>
          <div>
            <h3 className="text-xl   font-semibold mb-4">Adresse</h3>
            <address className="text-lg not-italic text-gray-300">
              II J 161 R Ambedivoenjo<br /><br />
              Nandry Aniamanarivo<br /><br />
              101, Madagascar
            </address>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Navigation</h3>
            <nav className="flex flex-col space-y-2 text-lg text-gray-300 font-bold">
              <a href="#" className="hover:text-yellow-500 ">Accueil</a>
              <a href="#" className="hover:text-yellow-500">Actualités</a>
              <a href="#" className="hover:text-yellow-500">Bourse d'études</a>
              <a href="#" className="hover:text-yellow-500">Inscription</a>
            </nav>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Médias sociaux</h3>
            <div className="flex space-x-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center p-5 bg-yellow-500">
                  <span className="text-xs"><i className="fab fa-facebook-f text-white text-2xl"></i>
                    </span>
                </div>
                <div className="w-8 h-8 rounded-full flex items-center justify-center p-5 bg-yellow-500">
                  <span className="text-xs"><i className="fab fa-linkedin-in text-white text-2xl"></i>
                    </span>
                </div>
                <div className="w-8 h-8 rounded-full flex items-center justify-center p-5 bg-yellow-500">
                  <span className="text-xs"><i className="fab fa-instagram text-white text-2xl"></i>
                    </span>
                </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm">
          © HEI Madagascar
        </div>
      </div>
    </footer>
  );
};

export default Footer;