import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Meu Projeto Next.js</title>
        <meta name="description" content="Projeto criado com Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif"
      }}>
        <h1>🚀 Next.js funcionando!</h1>
        <p>Edite o arquivo <strong>pages/index.tsx</strong> para começar.</p>
      </main>
    </>
  );
}
