export default function Navbar() {
  return (
    <nav className="fixed min-w-full z-50 bg-black">
      <ul className="font-work font-bold p-2 flex justify-around items-center">
        <li className="navbar_item">HOME</li>
        <li className="navbar_item">CONTACTO</li>
        <li className=" hover:scale-105 text-black cursor-pointer h-full py-6 px-2 bg-slate-100 duration-700">
          CARGA TU CV
        </li>
      </ul>
    </nav>
  );
}
