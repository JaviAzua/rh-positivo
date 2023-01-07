import Head from "next/head";
import Navbar from "./Nabvar";
import Footer from "./Footer";

export interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <title>RH positivo</title>
        <meta name="description" content="RH positivo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <h1 className="hidden">Recursos Humanos Positivo</h1>

      <main> {children} </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
