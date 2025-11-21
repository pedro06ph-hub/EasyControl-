import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Menu.module.css";

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const router = useRouter();

  const handleLogoutClick = () => {
    setShowLogoutConfirm(true);
  };

  const confirmLogout = () => {
    setShowLogoutConfirm(false);
    router.push("/login");
  };

  const cancelLogout = () => {
    setShowLogoutConfirm(false);
  };

  return (
    <>
      <Head>
        <title>Menu - EasyControl</title>
        <meta name="description" content="Tela principal do sistema EasyControl" />
      </Head>

      <div className={styles.page}>
        <div className={styles.logoHeader}>
          <Image src="/logoEasyControl.jpg" alt="Logo EasyControl" width={50} height={50} />
          <h1 className={styles.logoText}>EasyControl</h1>
        </div>

        <div className={styles.userMenuButton}>
          <button onClick={() => setMenuOpen(!menuOpen)} className={styles.menuToggle}>☰</button>
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

        <section className={styles.container}>
          <div className={styles.leftPanel}>
            <div className={styles.calendarBox}>
              <h2>Calendário</h2>
              <input type="date" className={styles.datePicker} />
              <input type="time" className={styles.timePicker} />
              <div className={styles.recordBox}>
                <p><strong>Último registro:</strong> 08:00</p>
                <p><strong>Próximo registro:</strong> 12:00</p>
              </div>
            </div>
          </div>

          <div className={styles.rightPanel}>
            <div className={styles.addressBox}>
              <h3>ENDEREÇO DA EMPRESA</h3>
              <p>Av. República do Líbano, 251 - Pina, Recife - PE, 51110-160 (Trade Center Torre 2 - 29º andar)</p>
            </div>
            <div className={styles.addressBox}>
              <h3>SEU ENDEREÇO</h3>
              <p>Av. Caxangá, 3841 - Iputinga, Recife - PE, 50670-902.</p>
            </div>
            <button
  className={styles.btnEditarLoc}
  onClick={() => router.push("/geolocalizacao")}
>
  EDITAR LOCALIZAÇÃO
</button>

            <button className={styles.btnRelogio}>BATER PONTO</button>
          </div>
        </section>

        {showLogoutConfirm && (
          <div className={styles.modalOverlay}>
            <div className={styles.modalBox}>
              <p className={styles.modalText}>VOCÊ DESEJA MESMO SAIR DA SUA CONTA?</p>
              <div className={styles.modalButtons}>
                <button onClick={confirmLogout} className={styles.btnConfirm}>SIM</button>
                <button onClick={cancelLogout} className={styles.btnCancel}>NÃO</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
