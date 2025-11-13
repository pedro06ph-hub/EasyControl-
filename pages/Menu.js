import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Menu.module.css";

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

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
                <li>🔓 SAIR DA CONTA</li>
                <li>🔔 NOTIFICAÇÕES</li>
                <li>⚙️ CONFIGURAÇÕES</li>
                <li>📜 HISTÓRICO</li>
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
              <p>Rua das Margaridas, 123 - Bairro das Flores</p>
            </div>
            <div className={styles.addressBox}>
              <h3>SEU ENDEREÇO</h3>
              <p>Endereço não encontrado. Verifique se a localização está ativada e tente novamente.</p>
            </div>
            <button className={styles.btnEdit}>EDITAR LOCALIZAÇÃO</button>
            <button className={styles.btnClock}>BATER PONTO</button>
          </div>
        </section>
      </div>
    </>
  );
}
