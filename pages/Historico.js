import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/Historico.module.css";

export default function Historico() {
  const router = useRouter();
  const [expandedIndex, setExpandedIndex] = useState(null);

  const registros = [
    { data: "01/11/2023", hora: "16:03", status: "PRESENTE", tempo: "05:00" },
    { data: "02/11/2025", hora: "16:03", status: "PRESENTE", tempo: "05:00" },
    { data: "03/11/2025", hora: "16:03", status: "PRESENTE", tempo: "05:00" },
    { data: "04/11/2025", hora: "16:03", status: "PRESENTE", tempo: "05:00" },
    { data: "05/11/2025", hora: "16:03", status: "AUSENTE", tempo: "00:00" },
    { data: "06/11/2025", hora: "16:03", status: "ABONO DE FALTA", tempo: "00:00" },
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const getObservacao = (status) => {
    if (status === "PRESENTE") return "Sem observações";
    if (status === "AUSENTE") return "Falta não justificada";
    if (status === "ABONO DE FALTA") return "Falta justificada";
    return "Sem observações";
  };

  return (
    <>
      <Head>
        <title>Histórico de Registro - EasyControl</title>
        <meta name="description" content="Histórico de registros de ponto" />
      </Head>

      <div className={styles.page}>
        <div className={styles.topBar}>
          <button className={styles.backButton} onClick={() => router.push("/Menu")}>
            ←
          </button>
        </div>

        <div className={styles.content}>
          <h2 className={styles.title}>Histórico de Registro</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Data</th>
                <th>Hora</th>
                <th>Status</th>
                <th>Tempo Registrado</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {registros.map((registro, index) => (
                <>
                  <tr
                    key={index}
                    className={
                      registro.status === "PRESENTE"
                        ? styles.presente
                        : registro.status === "AUSENTE"
                        ? styles.ausente
                        : styles.justificada
                    }
                  >
                    <td>{registro.data}</td>
                    <td>{registro.hora}</td>
                    <td>{registro.status}</td>
                    <td>{registro.tempo}</td>
                    <td>
                      <button
                        className={styles.toggleBtn}
                        onClick={() => toggleExpand(index)}
                      >
                        ▼
                      </button>
                    </td>
                  </tr>
                  {expandedIndex === index && (
                    <tr className={styles.observacaoRow}>
                      <td colSpan="5" className={styles.observacaoBox}>
                        <strong>Observação:</strong> {getObservacao(registro.status)}
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
