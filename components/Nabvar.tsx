import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [modal, setModal] = useState(false);
  return (
    <nav className="fixed min-w-full z-50 bg-black">
      <ul className="font-work font-bold p-2 flex justify-around items-center">
        <Link href={"/areas"}>
          <li onClick={() => setModal(!modal)} className="navbar_item relative">
            ÁREAS
          </li>
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
