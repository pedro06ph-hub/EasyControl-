import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Login.module.css"; // Reutilizando o CSS da tela de login

export default function CriarConta() {
  return (
    <>
      <Head>
        <title>Criar Conta - EasyControl</title>
        <meta name="description" content="Tela de cadastro do sistema EasyControl" />
      </Head>

      <div className={styles.page}>
        <section className={styles.formWrapper}>
          <div className={styles.formCard}>
            <div className={styles.logoContainer}>
              <Image src="/logoEasyControl.jpg" alt="Logo EasyControl" width={80} height={80} />
              <h1 className={styles.title}>EasyControl</h1>
            </div>

            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="nome">NOME:</label>
              <input
                id="nome"
                type="text"
                placeholder="DIGITE SEU NOME"
                required
              />

              <label htmlFor="email">EMAIL:</label>
              <input
                id="email"
                type="email"
                placeholder="DIGITE SEU EMAIL"
                required
              />

              <label htmlFor="senha">SENHA DE ENTRADA:</label>
              <input
                id="senha"
                type="password"
                placeholder="DIGITE SUA SENHA"
                required
              />

              <label htmlFor="confirmarSenha">CONFIRMAR SENHA:</label>
              <input
                id="confirmarSenha"
                type="password"
                placeholder="CONFIRME SUA SENHA"
                required
              />

              <button type="submit" className={styles.btnLogin}>
                CONFIRMAR
              </button>
            </form>

            <div className={styles.links}>
              <Link href="/login" className={styles.link}>VOLTAR PARA LOGIN</Link>
            </div>
          </div>
        </section>

        <aside className={styles.imageSection} />
      </div>
    </>
  );
}
