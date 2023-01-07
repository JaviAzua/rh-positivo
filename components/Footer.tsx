import Image from "next/image";
import { FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="fixed z-50 bottom-0 w-full bg-black flex justify-around items-center">
      <div className=" opacity-75">
        <Image
          src={"/logo.svg"}
          alt=""
          width={200}
          height={100}
          className="py-2"
        />
      </div>
      <div className="flex  items-center gap-2">
        <FaInstagramSquare className="text-white w-9 h-9 cursor-pointer hover:scale-110 duration-300" />
        <p className="text-white text-sm">Seguinos en Instagram</p>
      </div>
      <p className="text-white text-right absolute bottom-0 right-2 text-[0.50rem] ">
        Pagina web creada por Javier Azua, 2023
      </p>
    </div>
  );
}
