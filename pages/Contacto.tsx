import Link from "next/link";

export default function Contacto() {
  return (
    <div className="py-36 min-h-[100vh] font-work w-[90%] mx-auto justify-center items-center flex p-5 select-none">
      <div className="bg-black text-white p-5">
        <h3 className="text-3xl font-bold">Formulario de Contacto:</h3>
        <p>Por favor envíanos tu conslta y nos pondremos en contacto</p>
        <form action="https://formspree.io/f/mwkzbjwa" method="POST">
          <div className="pt-5 flex flex-col gap-2">
            <label htmlFor="email">E-mail de contacto:</label>
            <input type="email" name="email" required />
            <label htmlFor="subject">Asunto:</label>
            <input type="text" name="subject" required />
            <label htmlFor="mssj">Mensaje:</label>
            <textarea name="mssj" className="min-h-[15vh]" required />
          </div>
          <div className="flex justify-center pt-10">
            <button
              type="submit"
              className="bg-white py-4 md:py-2 px-8 md:px-6 text-black font-semibold hover:scale-110 duration-300"
            >
              ENVIAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
