function Navbar() {
  return (
    <nav className="bg-[#001a44] text-white flex items-center justify-arround px-8 py-6">
      <img src="src/assets/firstPage_files/cropped-Logo-e1662790239183.png" alt=""  className="h-15"/>
      <ul className="hidden md:flex space-x-6 font-semibold text-xl ml-125">
        <li className="text-yellow-400 cursor-pointer">ACCUEIL</li>
        <li className="cursor-pointer">ACTUALITÉS</li>
        <li className="cursor-pointer ">BOURSE D’ÉTUDES</li>
        <li className="cursor-pointer">INSCRIPTION</li>
      </ul>
      <button className="bg-yellow-400 text-black px-4 py-2 rounded font-semibold">INTRANET</button>
    </nav>
  );
}

export default Navbar;
