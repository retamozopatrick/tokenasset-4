import Head from "next/head";
import dynamic from "next/dynamic";

const App = dynamic(() => import("../components/App"), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>TokenAsset — Real Estate for Everyone</title>
        <meta name="description" content="Invierte en inmuebles premium y Bonos del Tesoro desde $100 por token. Propiedad fraccionada, asegurada por blockchain." />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="theme-color" content="#07101C" />
        <meta property="og:title" content="TokenAsset — Real Estate for Everyone" />
        <meta property="og:description" content="Invierte en inmuebles premium desde $100 por token." />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <App />
    </>
  );
}
