import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/Login.module.css";

export default function Login() {
  const router = useRouter();
  const [lembrar, setLembrar] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    
    router.push("/Menu");
  };

  return (
    <>
      <Head>
        <title>Login - EasyControl</title>
        <meta name="description" content="Tela de login do sistema EasyControl" />
      </Head>

      <div className={styles.page}>
        <section className={styles.formWrapper}>
          <div className={styles.formCard}>
            <div className={styles.logoContainer}>
              <Image src="/logoEasyControl.jpg" alt="Logo EasyControl" width={80} height={80} />
              <h1 className={styles.title}>EasyControl</h1>
            </div>

            <form className={styles.form} onSubmit={handleLogin}>
              <label htmlFor="email">E-MAIL:</label>
              <input
                id="email"
                type="email"
                placeholder="DIGITE SEU EMAIL"
                required
              />

              <label htmlFor="senha">SENHA:</label>
              <input
                id="senha"
                type="password"
                placeholder="DIGITE SUA SENHA"
                required
              />

              <div className={styles.checkboxContainer}>
                <input
                  type="checkbox"
                  id="lembrar"
                  checked={lembrar}
                  onChange={() => setLembrar(!lembrar)}
                />
                <label htmlFor="lembrar">LEMBRAR-ME</label>
              </div>

              <button type="submit" className={styles.btnLogin}>
                LOGIN
              </button>
            </form>

            <div className={styles.links}>
              <Link href="/criar-conta" className={styles.link}>CRIAR CONTA</Link>
              <Link href="/Esquecisenha" className={styles.link}>ESQUECI MINHA SENHA</Link>
            </div>
          </div>
        </section>

        <aside className={styles.imageSection} />
      </div>
    </>
  );
}
