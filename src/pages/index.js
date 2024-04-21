import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <img className={styles.imgLogo} src="img/soft.png" alt="logo" style={{width: "500px", height: "auto"}}/>
      </div>
      <div className="container">
        <div className="container">
          <Heading as="h1" className="hero__title">
            Olá, bem-vindo
          </Heading>
          <p className="hero__subtitle">
            Plataforma de software para divulgar conhecimento e experiências em
            tecnologia.
          </p>
          <div className={styles.buttons}>
            <Link style={{ display: "flex", alignItems: "center", gap: "10px" }}
              className="button button--secondary button--lg"
              href="https://discord.gg/yVNJ8ng5Td"
              target="_blank" // Para abrir o link em uma nova aba ou janela.
              rel="noopener noreferrer" // Para segurança e boas práticas de SEO.
            >
              Junte-se à comunidade
              <img src="img/discord.png" alt="Discord" width="30" height="30" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Software Engineering`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
