import Head from "next/head";
import styles from "../styles/geolocalizacao.module.css";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Geolocalizacao() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogoutClick = () => {
    alert("Você saiu da conta!");
    router.push("/"); 
  };

  return (
    <>
      <Head>
        <title>Geolocalização - EasyControl</title>
        <meta name="description" content="Tela de geolocalização para atualização de endereço" />
      </Head>

      <div className={styles.page}>

        <img src="/logoEasyControl.jpg" alt="Logo EasyControl" className={styles.logoImg} />


        <div className={styles.userMenuButton}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={styles.menuToggle}
          >
            ☰
          </button>
          {menuOpen && (
            <div className={styles.dropdownMenu}>
              <p className={styles.userName}>Usuário 2149</p>
              <ul>
                <li onClick={handleLogoutClick}>🔓 SAIR DA CONTA</li>
                <li>🔔 NOTIFICAÇÕES</li>
                <li>⚙️ CONFIGURAÇÕES</li>
                <li onClick={() => router.push("/Historico")}>📜 HISTÓRICO</li>
              </ul>
            </div>
          )}
        </div>

        <div className={styles.topBar}>
          <button className={styles.backButton} onClick={() => router.push("/Menu")}>
            ←
          </button>
        </div>

        <h2 className={styles.pageTitle}>GEOLOCALIZAÇÃO</h2>

        <div className={styles.container}>
          <div className={styles.panel}>
            <h3 className={styles.panelTitle}>LOCAL</h3>

            <label className={styles.label}>INSIRA O SEU CEP</label>
            <input
              type="text"
              className={styles.input}
              placeholder="00000-000"
            />

            <div className={styles.infoBox}>
              <p className={styles.infoTitle}><strong>ENDEREÇO INSERIDO:</strong></p>
              <p className={styles.infoText}>Av. Caxangá, 3841 - Iputinga, Recife - PE, 50670-902</p>
            </div>

            <div className={styles.infoBox}>
              <p className={styles.infoTitle}><strong>ÚLTIMO ENDEREÇO USADO:</strong></p>
              <p className={styles.infoText}>Av. República do Líbano, 251 Riomar Trade Center Torre 2, 29º andar - Pina, Recife - PE, 51110-160</p>
            </div>
          </div>

          <div className={styles.panel}>
            <h3 className={styles.panelTitle}>ENDEREÇO DA EMPRESA</h3>

            <div className={styles.infoBox}>
              <p className={styles.infoText}>Av. República do Líbano, 251 Riomar Trade Center Torre 2, 29º andar - Pina, Recife - PE, 51110-160</p>
              <p className={styles.infoText}>Cidade: Recife &nbsp;&nbsp; Estado: PE</p>
            </div>

            <div className={styles.mapBox}>
              <img src="/mapaempresa.png" alt="Mapa da empresa" className={styles.mapImage} />
            </div>
          </div>
        </div>

        <button className={styles.btnConfirmar}>CONFIRMAR</button>
      </div>
    </>
  );
}
