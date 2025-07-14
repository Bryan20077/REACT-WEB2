import heiBg from '../assets/hei-bg.jpg';

function Hero() {
  return (
    <section
      className="relative h-screen  bg-center flex items-center justify-center text-center text-white"
      style={{ backgroundImage: `url(${heiBg})` }}
    >
      <div className=" bg-opacity-50 p-8 rounded mb-40 ">
        <h2 className="text-7xl mb-25  font-bold" style={{ textShadow: "3px 3px 10px black" }}>Haute École d'Informatique</h2>
        <p className="mb-5 text-2xl px-40">
        Une infrastructure de qualité et un programme pédagogique qui répond au besoin du marché pour employabilité de nos étudiants.
        </p>
        <div className="flex flex-wrap gap-40 justify-center mt-40">
          <button className="bg-white text-[#001a44] px-8 py-4 rounded font-semibold text-xl">Inscrivez-vous ici</button>
          <button className="bg-yellow-400 text-white px-6 py-2 rounded font-semibold text-xl">Emploi du temps</button>
          <button className="bg-[#001a44] text-white px-6 py-2 rounded font-semibold text-xl">Programme pédagogique</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
