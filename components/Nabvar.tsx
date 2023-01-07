import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed min-w-full z-50 bg-black">
      <ul className="font-work font-bold p-2 flex justify-around items-center">
        <Link href={"/"}>
          <li className="navbar_item">INICIO</li>
        </Link>
        <Link href={"/areas"}>
          <li className="navbar_item">ÁREAS</li>
        </Link>
        <Link href={"/Contacto"}>
          <li className="navbar_item">CONTACTO</li>
        </Link>
        <Link href={"/Carga%20tu%20CV"}>
          <li className=" hover:scale-105 text-black cursor-pointer h-full py-6 px-2 bg-slate-100 duration-700">
            CARGA TU CV
          </li>
        </Link>
      </ul>
    </nav>
  );
}
