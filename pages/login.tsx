import Head from "next/head";
import Image from "next/image";
import styles from "styles/Login.css";

export default function Login() {
  return (
    <>
      <Head>
        <title>Login - EasyControl</title>
      </Head>

      <div className={styles.container}>
        <div className={styles.formSection}>
          <div className={styles.logoContainer}>
            <Image src="/logo.png" alt="EasyControl logo" width={120} height={120} />
            <h1>EasyControl</h1>
          </div>

          <form className={styles.form}>
            <label>E-MAIL:</label>
            <input type="email" placeholder="DIGITE SEU EMAIL" />

            <label>SENHA:</label>
            <input type="password" placeholder="DIGITE SUA SENHA" />

            <button type="submit" className={styles.btnLogin}>
              LOGIN
            </button>

            <a href="/auth/register" className={styles.link}>
              CRIAR CONTA
            </a>
            <a href="/auth/forgot-password" className={styles.link}>
              ESQUECI MINHA SENHA
            </a>
          </form>
        </div>

        <div className={styles.imageSection}></div>
      </div>
    </>
  );
}
