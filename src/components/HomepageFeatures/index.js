import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const FeatureList = [
  {
    title: "GitHub",
    Svg: () => (
      <img
        src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
        alt="GitHub"
        className={styles.featureSvg}
      />
    ),
    description: (
      <>
        GitHub é uma plataforma de hospedagem de código-fonte e arquivos com
        controle de versão usando o Git. Ele permite que programadores,
        utilitários ou qualquer usuário cadastrado na plataforma contribuam em
        projetos privados e/ou Open Source de qualquer lugar do mundo.
      </>
    ),
    link: "https://github.com/docs",
  },
  {
    title: "AWS - Amazon Web Services",
    Svg: () => (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/AmazonWebservices_Logo.svg/2560px-AmazonWebservices_Logo.svg.png"
        alt="Amazon Web Services"
        className={styles.featureSvg}
      />
    ),
    description: (
      <>
        Amazon Web Services, também conhecido como AWS, é uma plataforma de
        serviços de computação em nuvem, que formam uma plataforma de computação
        na nuvem oferecida pela Amazon. Os serviços são oferecidos em várias
        áreas geográficas distribuídas pelo mundo.
      </>
    ),
    link: "https://aws.amazon.com/documentation/",
  },
  {
    title: "Visual Studio Code",
    Svg: () => (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Visual_Studio_Code_1.18_icon.svg/2056px-Visual_Studio_Code_1.18_icon.svg.png"
        alt="Visual Studio Code"
        className={styles.featureSvg}
      />
    ),
    description: (
      <>
        O Visual Studio Code é um editor de código-fonte desenvolvido pela
        Microsoft para Windows, Linux e macOS. Ele inclui suporte para
        depuração, controle de versionamento Git incorporado, realce de sintaxe,
        complementação inteligente de código, snippets e refatoração de código.
      </>
    ),
    link: "https://code.visualstudio.com/docs",
  },
];

function Feature({ Svg, title, description, link }) {
  return (
      <Card sx={{ maxWidth: 345, margin: '10px' }} style={{backgroundColor: 'aliceblue'}}>
          <CardActionArea>
              <CardMedia
                  component="img"
                  height="140"
                  src={Svg().props.src}
                  alt={Svg().props.alt}
              />
              <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                      {title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                      {description}
                  </Typography>
              </CardContent>
          </CardActionArea>
          <CardActions>
              <Button size="small" color="primary" href={link}>
                  Documentação
              </Button>
          </CardActions>
      </Card>
  );
}


export default function HomepageFeatures() {
  return (
      <section className={styles.features}>
          <div className="container">
              <div className="row" style={{ display: 'flex', justifyContent:'space-between' }}>
                  {FeatureList.map((props, idx) => (
                      <Feature key={idx} {...props} />
                  ))}
              </div>
          </div>
      </section>
  );
}
