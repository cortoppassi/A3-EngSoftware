import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import { Button, CardActionArea, CardActions } from '@mui/material';
import Heading from "@theme/Heading";
import styles from "./index.module.css";
import ChatBot from '../components/chatbot'

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
            Olá, bem-vindo ao Dev-Hub
          </Heading>
          <p className="hero__subtitle">
            Plataforma de software para divulgar conhecimento e experiências em
            tecnologia.
          </p>
          <div >
            
            <Button className={styles.buttons}
              href="https://discord.gg/yVNJ8ng5Td"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              style={{backgroundColor: "#3d54bd", color: "white", borderRadius: "20px"}}
            >
              Junte-se à comunidade
              <img src="img/discord.png" alt="Discord" width="30" height="30" />
            </Button>
          </div>
        </div>
        <ChatBot/>
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
