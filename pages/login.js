import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Login.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Login - EasyControl</title>
        <meta name="description" content="Tela de login" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={styles.container}>
        <main className={styles.main}>
          <Image
            className={styles.logo}
            src="/logo.png"
            alt="Logo"
            width={120}
            height={120}
          />

          <form className={styles.form}>
            <label>E-MAIL:</label>
            <input type="email" placeholder="DIGITE SEU EMAIL" />

            <label>SENHA:</label>
            <input type="password" placeholder="DIGITE SUA SENHA" />

            <button className={styles.btnPrimary}>LOGIN</button>
          </form>

        
          <Link href="/forgot-password" className={styles.link}>
            Esqueci minha senha
          </Link>
        </main>
      </div>
    </>
  );
}

