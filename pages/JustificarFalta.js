import Head from "next/head";
import styles from "../styles/JustificarFalta.module.css";
import { useState } from "react";
import { useRouter } from "next/router";

export default function JustificarFalta() {
  const [anexoNome, setAnexoNome] = useState("");
  const router = useRouter();

  const handleAnexo = (event) => {
    const file = event.target.files[0];
    if (file) {
      setAnexoNome(file.name);
    }
  };

  return (
    <>
      <Head>
        <title>Justificar Falta - EasyControl</title>
        <meta name="description" content="Tela para justificar ausência no sistema EasyControl" />
      </Head>

      <div className={styles.page}>
        <div className={styles.topBar}>
          <button className={styles.backButton} onClick={() => router.push("/Menu")}>
            ←
          </button>
        </div>

        <h1 className={styles.title}>Justificar Falta</h1>

        <div className={styles.infoBox}>
          <p><strong>Data:</strong> 07/03/2023</p>
          <p><strong>Módulo:</strong> TDS</p>
          <p><strong>Etapa:</strong> 1TDS</p>
          <p><strong>Turno:</strong> NOITE</p>
          <p><strong>Componente:</strong> TDS</p>
          <p><strong>Conteúdo:</strong> Justificar falta porque perdeu o dia</p>
        </div>

        <div className={styles.justifyBox}>
          <label htmlFor="justificativa" className={styles.label}>Justificativa</label>
          <textarea
            id="justificativa"
            className={styles.textarea}
            placeholder="Descreva o motivo da ausência..."
          />
        </div>

        <div className={styles.actions}>
          <label htmlFor="fileInput" className={styles.anexoBotao}>
            Adicionar anexo
          </label>
          <input
            type="file"
            id="fileInput"
            className={styles.fileInput}
            onChange={handleAnexo}
          />
          {anexoNome && <p className={styles.anexoNome}>Arquivo selecionado: {anexoNome}</p>}

          <button className={styles.btnEnviar}>Justificar Falta</button>
        </div>
      </div>
    </>
  );
}
