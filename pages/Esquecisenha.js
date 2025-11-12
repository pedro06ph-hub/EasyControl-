import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Esquecisenha.module.css";

export default function EsqueciSenha() {
  return (
    <>
      <Head>
        <title>Esqueci minha senha - EasyControl</title>
        <meta name="description" content="Recuperação de senha do sistema EasyControl" />
      </Head>

      <div className={styles.page}>
        <section className={styles.formWrapper}>
          <div className={styles.formCard}>
            <div className={styles.logoContainer}>
              <Image src="/logoEasyControl.jpg" alt="Logo EasyControl" width={80} height={80} />
              <h1 className={styles.title}>EasyControl</h1>
            </div>

            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="email">E-MAIL:</label>
              <input
                id="email"
                type="email"
                placeholder="DIGITE SEU EMAIL"
                required
              />

              <label htmlFor="novaSenha">NOVA SENHA:</label>
              <input
                id="novaSenha"
                type="password"
                placeholder="DIGITE SUA SENHA"
                required
              />

              <label htmlFor="confirmarSenha">CONFIRMAR SENHA:</label>
              <input
                id="confirmarSenha"
                type="password"
                placeholder="DIGITE SUA SENHA"
                required
              />

              <button type="submit" className={styles.btnEnviar}>
                REDEFINIR
              </button>
            </form>

            <div className={styles.links}>
              <Link href="/login" className={styles.link}>
                VOLTAR PARA LOGIN
              </Link>
            </div>
          </div>
        </section>

        <aside className={styles.imageSection} />
      </div>
    </>
  );
}
