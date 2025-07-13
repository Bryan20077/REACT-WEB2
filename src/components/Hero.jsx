import heiBg from '../assets/hei-bg.jpg';

function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-center text-white"
      style={{ backgroundImage: `url(${heiBg})` }}
    >
      <div className=" bg-opacity-50 p-8 rounded max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Haute École d'Informatique</h1>
        <p className="mb-6 text-lg">
          Une infrastructure de qualité et un programme pédagogique qui répond au besoin du marché pour l’employabilité de nos étudiants.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="bg-white text-black px-6 py-2 rounded font-semibold">Inscrivez-vous ici</button>
          <button className="bg-yellow-400 text-black px-6 py-2 rounded font-semibold">Emploi du temps</button>
          <button className="bg-blue-900 text-white px-6 py-2 rounded font-semibold">Programme pédagogique</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
