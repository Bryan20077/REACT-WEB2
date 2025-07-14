import heiBg from '../assets/hei-bg.jpg';

function Hero() {
  return (
    <section
      className="relative h-screen  bg-center flex items-center justify-center text-center text-white"
      style={{ backgroundImage: `url(${heiBg})` }}
    >
      <div className=" bg-opacity-50 p-8 rounded ">
        <h2 className="text-7xl mb-25  font-bold">Haute École d'Informatique</h2>
        <p className="mb-5 text-2xl">
          Une infrastructure de qualité et un programme pédagogique qui répond au besoin du marché pour l’employabilité de nos étudiants.
        </p>
        <div className="flex flex-wrap gap-40 justify-center mt-10">
          <button className="bg-white text-black px-8 py-4 rounded font-semibold text-xl">Inscrivez-vous ici</button>
          <button className="bg-yellow-400 text-black px-6 py-2 rounded font-semibold text-xl">Emploi du temps</button>
          <button className="bg-blue-900 text-white px-6 py-2 rounded font-semibold text-xl">Programme pédagogique</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
