import Link from "next/link";

export default function CargaCV() {
  return (
    <div className="py-36 min-h-[100vh] font-work w-[90%] mx-auto justify-center items-center flex p-5 select-none">
      <div className="bg-black text-white p-5">
        <h3 className="text-3xl font-bold">Envíanos tu CV:</h3>
        <p className="py-20">
          Completa el formulario y envíanos tu CV. <br />
          Nos pondremos en contacto contigo para una entrevista
        </p>
        <Link
          className="flex justify-center"
          href={
            "https://docs.google.com/forms/d/e/1FAIpQLSfOtwO_TgG19O1JbzHPcDfUzYjyVLC7VtNNipCF9TVO2DnzCA/viewform"
          }
        >
          <button className="bg-white py-4 md:py-2 px-8 md:px-6 text-black font-semibold hover:scale-110 duration-300">
            CARGA TU CV
          </button>
        </Link>
      </div>
    </div>
  );
}
