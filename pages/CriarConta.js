import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../styles/Login.module.css";

export default function CriarConta() {
  const router = useRouter();

  const handleCadastrar = (e) => {
    e.preventDefault();
    router.push("/login");
  };

  return (
    <>
      <Head>
        <title>Criar Conta - EasyControl</title>
        <meta name="description" content="Tela de criação de conta do EasyControl" />
      </Head>

      <div className={styles.page}>
        
        <div className={styles.formWrapper}>
          <div className={styles.formCard}>
            <div className={styles.logoContainer}>
              <h1 className={styles.title}>EasyControl</h1>
            </div>

            <form onSubmit={handleCadastrar} className={styles.form}>
              <label htmlFor="nome">NOME</label>
              <input type="text" id="nome" placeholder="Nome completo" required />

              <label htmlFor="email">EMAIL</label>
              <input type="email" id="email" placeholder="Seu e-mail" required />

              <label htmlFor="senha">SENHA</label>
              <input type="password" id="senha" placeholder="Senha" required />

              <button type="submit" className={styles.btnLogin}>CADASTRAR</button>
            </form>

            <div className={styles.links}>
              <a className={styles.link} onClick={() => router.push("/login")}>JÁ TEM CONTA?</a>
            </div>
          </div>
        </div>

        <div className={styles.imageSection}></div>
      </div>
    </>
  );
}
