import Link from "next/link";
import Texts from "../public/textDetails.json";

export default function Areas() {
  return (
    <div className="py-36 min-h-[100vh] font-work w-[90%] mx-auto items-center flex p-5 select-none">
      <div className="flex justify-between w-full gap-5 flex-wrap">
        {Texts.map((item) => (
          <div
            key={item.titulo}
            className="relative bg-black p-4 flex-1 hover:scale-110 text-white duration-700"
          >
            <h3 className="font-semibold text-2xl">{item.titulo}</h3>
            <p className="pt-10 text-sm">{item.desc}</p>
            <div className="pt-16">
              <Link href={`/${item.button}`}>
                <button className="bg-white p-2 hover:scale-105  text-black absolute bottom-3  right-2">
                  {item.button}
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
