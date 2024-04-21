import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const cardStyle = {
  maxWidth: '345px',
  minHeight: '400px',
  margin: '10px',
  backgroundColor: 'aliceblue',
  border: 'solid 1px gray',
  boxShadow: '5px 5px 10px',
  borderRadius: '14px 0 14px 0',
};

const cardMediaStyle = {
  height: '140px',
};

const cardContentStyle = {
  padding: '16px',
};

const cardActionsStyle = {
  width: '100%', // Garante que o botão ocupe toda a largura do card
  position: 'absolute', // Posiciona o botão de forma absoluta
  bottom: '0', // Coloca o botão na parte inferior do card
  padding: '16px', // Adiciona um pouco de espaço ao redor do botão
};

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
    title: "Docker",
    Svg: () => (
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg"
            alt="Docker"
            className={styles.featureSvg}
        />
    ),
    description: (
        <>
            Docker é uma plataforma que permite a criação, execução e gerenciamento de contêineres de software, facilitando o desenvolvimento e a implantação de aplicativos.
        </>
    ),
    link: "https://docs.docker.com/"
},
// {
//   title: "Bitbucket Pipelines",
//   Svg: () => (
//       <img
//           src="https://wac-cdn.atlassian.com/dam/jcr:86c7d1c5-f9ba-4d4c-ae8a-6cb15d3e32e4/bitbucket-icon-blue.svg"
//           alt="Bitbucket Pipelines"
//           className={styles.featureSvg}
//       />
//   ),
//   description: (
//       <>
//           Bitbucket Pipelines é um serviço de integração contínua e entrega contínua da Bitbucket que permite a automação de processos de construção e teste.
//       </>
//   ),
//   link: "https://support.atlassian.com/bitbucket-cloud/docs/use-bitbucket-pipelines/"
// },
{
  title: "Slack",
  Svg: () => (
      <img
          src="data:image/png;base64,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"
          alt="Slack"
          className={styles.featureSvg}
      />
  ),
  description: (
      <>
          Slack é uma plataforma de comunicação que permite equipes de desenvolvimento colaborarem de forma eficiente.
      </>
  ),
  link: "https://slack.com/help"
},
{
  title: "CircleCI",
  Svg: () => (
      <img
          src="https://www.vectorlogo.zone/logos/circleci/circleci-icon.svg"
          alt="CircleCI"
          className={styles.featureSvg}
      />
  ),
  description: (
      <>
          CircleCI é uma plataforma de integração contínua e entrega contínua que automatiza processos de compilação, teste e implantação.
      </>
  ),
  link: "https://circleci.com/docs/"
},
{
  title: "Heroku",
  Svg: () => (
      <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Heroku_logo.svg"
          alt="Heroku"
          className={styles.featureSvg}
      />
  ),
  description: (
      <>
          Heroku é uma plataforma como serviço (PaaS) que permite o desenvolvimento, a implantação e a gestão de aplicativos web e móveis.
      </>
  ),
  link: "https://devcenter.heroku.com/"
},
{
  title: "Kubernetes",
  Svg: () => (
      <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZ9Ct8HZ6X7ii891IP2z-Icn_mhHzOzii9jopA4Acrw&s"
          alt="Kubernetes"
          className={styles.featureSvg}
      />
  ),
  description: (
      <>
          Kubernetes é uma plataforma de código aberto para orquestração de contêineres que ajuda a gerenciar e implantar aplicativos em contêineres.
      </>
  ),
  link: "https://kubernetes.io/docs/"
},
{
  title: "Firebase",
  Svg: () => (
      <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Firebase_Logo.svg/1280px-Firebase_Logo.svg.png"
          alt="Firebase"
          className={styles.featureSvg}
      />
  ),
  description: (
      <>
          Firebase é uma plataforma de desenvolvimento de aplicativos móveis e web que fornece funcionalidades como banco de dados em tempo real, autenticação e armazenamento.
      </>
  ),
  link: "https://firebase.google.com/docs"
},
{
  title: "Jira",
  Svg: () => (
      <img
          src="https://cdn.icon-icons.com/icons2/2699/PNG/512/atlassian_jira_logo_icon_170511.png"
          alt="Jira"
          className={styles.featureSvg}
      />
  ),
  description: (
      <>
          Jira é uma ferramenta popular para gerenciamento de projetos e acompanhamento de tarefas, amplamente usada em equipes ágeis de desenvolvimento de software.
      </>
  ),
  link: "https://www.atlassian.com/software/jira"
},
{
  title: "Trello",
  Svg: () => (
      <img
          src="data:image/png;base64,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"
          alt="Trello"
          className={styles.featureSvg}
      />
  ),
  description: (
      <>
          Trello é uma ferramenta de gerenciamento de projetos baseada em quadros que ajuda equipes a organizar tarefas, acompanhar prazos e colaborar em projetos.
      </>
  ),
  link: "https://trello.com/"
},
{
  title: "GitKraken",
  Svg: () => (
      <img
          src="https://www.midcamp.org/sites/default/files/2021-03/gitkraken-logo-dark-sq.png"
          alt="GitKraken"
          className={styles.featureSvg}
      />
  ),
  description: (
      <>
          GitKraken é uma interface gráfica para Git que facilita o gerenciamento de projetos de desenvolvimento de software com controle de versão.
      </>
  ),
  link: "https://help.gitkraken.com/gitkraken-client/"
},
{
  title: "Azure DevOps",
  Svg: () => (
      <img
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPEA8PDxAQEBAVEBAQEA8PDxAPEA8QFREWFhUSFRUYHiggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGzAlICUtKy0tLS0rLS0rLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tLSstLSstLS0tKy0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwECAwUGBAj/xABFEAACAgACBQcIBggFBQAAAAAAAQIDBBEFBhIhMQcyNEFRYbITInFyc4GRsSN0g6HB0RQkM0NSYvDxQoKSwtJEU2SEov/EABoBAQACAwEAAAAAAAAAAAAAAAAFBgECBAP/xAApEQACAgEEAQQBBAMAAAAAAAAAAQIDBQQRITEyEjNBcVETQmGBIjRS/9oADAMBAAIRAxEAPwDRAAuxSQAAAAAAAAAAAAAVis+G/uSzYMlAABsAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANlq0s8ZhE+H6RUvjJI1pstWem4P6zV40eOp9qX0e1K3sj9kiayaiVYjatw2VN3FrLKub70uD717yNNJaOuw03XfXKuXfwfenwZ9Ao8GldFU4qDrurjOPfxT7U+KZX9NkZ1cS5RPajHwsW8eGQEDsNZdRbsNnZh1K6ne3HjbWu9LnL0bzkGv67CwU6mFq3iyBuonU9pIoA0D2PEAAAAAAAAAAAAAAAAAAAAAAAAAAGQADJgABr+7MbmUgbPVnpuD+sVeNGDR+isRiHlTRbZ/NGD2P9b81fE7DVzUXFQupvtddca7IWOGblKWTTy7ji1WorVcot8nXptPY5ppEoRKlIcEXFWLSi2UTlNZtSaMXnZD6K7jtxXmyf88es61lrN67JVveL2NLKo2LaSIE0xoXEYSexfBr+Ga31z9Evwe812R9B43BV3xlXbCM4PjGSzRG+snJ/OvatwblZDi6ZPz16suv3k3pcnGX+NnDIPU46Uf8AKHKOEBdKDTaaaabTUk4yT7GnwLSXT3W6Ippp7MAFDJgqAAZAGQyBgAAAAAAAAAAAGQVSOj0BqZiMbBW5xqqbaUpqTk8uuMVua9L9x2WjeTnC177ZWXS3cXsR+Ed5wW5GqvjtnbVoLbOdtiKoxzeS3t8ElnJ+hLibzR+qOOvyyolBbvOt+jS9z3/cTDo/RFGHWVNNdfV5kUn73xZ7VEjrctOXgtiQrxUV5sjfR3Jp14jEf5KYZf8A1L8jqdF6oYKjJxpjKX8dn0kvizoMgcFmqtsfLO6vSVV9IshUluSSXYi/ZKoZng+TpSS6GRUpmMwZKlA2WTtS3tpLte5Aw2l2XFHkarGax4Sl5WYiqL3LLaTebW7cjQ4zlFwcM1WrbXk+bDZWaeXGWR6Qosl0meM9RVHtmy1i1Tw+NW1JeTty3WwS2u7aXCSIs0/q7fgpfSxTg3lG2Obg/wAn3P4nT4vlMtf7HDwj2Oybk/gkvxOf0rrjjb4TjKyMYuMk4xhHJprg8yX0leqq76/kidVPTWddmgby7n2fgerC4C63LyVNtifXCuUo++WWROOC0Nhq0nXRVF8U1XHPP0mxUF2GJ5d/tibQxW63bITw2puPsyyocfXlGBtcLyb4qWTstprXXkpWSXyT+JLGQyOWeTvfXB0wxlK75I9w3JlUv2uJsl2qEIVp7u/NojzH0qu22tZ5RsnBZ73lGTR9CSIA0x0jEe3u8bOzG6iyyb9TOPI6eFUF6UeMAE0Q4AAAAAMg6PU3VyWNs2pprDwf0kuG3Jfu1+L/AD3a/QGh7MZdGmvd12TfCEF1vtfUl159xNeidGV4amFNUdmEVll29rfa2RWQ1voi4Q7JPQaP9R+uXR6qaVBRjFJJLJJbkkZShZK6K4tL0vcV7lssHEUZAanHay4OnPymIqi1/h21KX+lbzRYvlFwcc/Jq21/y1uC+Msj1jRZPqLPOWoqj2zsmymZGWM5S7XmqcPGPfZNyfwRo8brtj7c15bya37qoQju7M2mzrhjL5fGxyTydUeuSZ52RW9tJdreSNZjdY8JT+0xFS3Pdtpt5cckuJCOIx91u+y22ffOycvmzAdMMO/3SOWeW/5RLOL5RcHDPYV1vDm17K+MmjR4vlMtefksPGPHfZPafc0lkvccFn/XvKZnXDGUx75OSeSul0zo8Xrrj7d3lvJrdurjFZe9pmlxOOut323XWevbOfzZ5gdkNNVDxicstRZLthf1uAB7Ljo829wW282Xqv5FxbbzZeh/I1s8WIeSPoyrgjIY6uajIUx9lyh4oFGVKMwbFsuDIA0x0nEe3u8bJ/lwZAGmOkYj293jZLYn3JfRD5bxieMAFgIEAAABIBGH0bImXUHRtdWCpsgsp2wjbZLi3KSz+CzyR06WRptTF+oYP6vV4Ebsp1zbslv+S3aeKVcdvwWsiTlPun+m7G3LZ8hX5u09nfKeby9yJcZD/Kh0/wCwq8UzqxsU79n+DlyTap3RySSGYBZ1HborTbGYAMgAAGAAAAAAAAAAW282Xqv5FxbbzZeq/ka2eLNoeSPoyrmoyGOrmoyFMfZcoeKBRlSjMGxbLgyANMdIxHt7vGyf5cGQBpjpGI9vd42S2J9yX0Q2W8YnjABYCCAAAAQCMPo2XZOepnQMH9Xq8CN2aTUzoGD+r1eBG7Kdb7kvst9Ptx+ijIf5T+n/AGFXimTAQ/yn9P8AsKvFM7MZ7/8ARx5P2TkgAWYrQAAAAAAAAAAAAAAALbebL0P5FxbbzZeq/ka2eLNoeSPoyrmoyGOrmoyFMfZcoeKBRlSjMGxbLgyANMdIxHt7vGyf5cGQBpjpGI9vd42S2J9yX0Q2W8YnjABYCCAAAAQCMPo2XZOepnQMH9Xq8CN2aTUzoGD+r1eFG7Kbb7kvst9Ptx+ijIf5T+n/AGFXimTAyH+U/p/2FXimduM9/wDo48n7JyQALMVoAAAAAAAAAAAAAAAFtvNl6r+RcW282Xqv5GtnizaHkj6Mq5qMhjq5qMhTH2XKHigUZUozBsWy4MgDTHSMR7e7xsn+XBkAaY6RiPb3eNktifcl9ENlvGJ4wAWAggAAAViUCG25knHUx/qGD+r1eBG7TIQ0Jrbi8IlGE1OtblVYs4pdikt6O+0Lr/hbso2v9Hm/+4/Mb7p8F78ir6nRWwk5bcFk0utrlFRb5OyIf5T+n/YVeKZLdV0ZJOLTT6080RLyn9PXsKvFM2xn+x/RjJtOng5EDIFmK2AAAAADIAAAAAMAAAAtt5svQ/kXFtvNl6H8jWzxZtDyR9GVc1GQx1c1GQpj7LlDxQKMqUZg2LZcGQBpjpGI9vd42T/LgyANMdIxHt7vGyWxPuS+iGy3jE8YALAQQAAAAAAKooAzO5sdE6cxOEa8hbKK/ga2636Yv8DdVVy01e5StrpxCrhFQ2ZOFkYuTco79z87gcoZsJiZ1ThZXJxnFqUWupr8HwyOW3TrZyr4l+TprvfjPlHYT5NcUl5t1Mn2ZTjn9x5Z8nuOS3Kp93lHm/RuJF1V07DHUKxZRmso2w64S/LsN3kQbyGog/S2TMdBRZFSiQrPUnSC/cZ+iyJ5Xqtj1/0tvu2H/uJ0UUHE3jlbl8Iw8VW/kgB6IxSzzwuIWX/j2/8AE8s6pp5SjJPrTjJNH0TsIbCPRZafzE83iI/k+c38Asup5+jefQs9H0ybcq623xbhFtnlt0BhJPOWHpb7fJx/I9Fl/wAxPN4h/EiBcihOF2qOAk83hq/csl9x5L9Q9Hy/cuPqWTj+J6LLw+UzyeKs+GQ0CWb+TnBS5ruh6tmfiTPNdyZYd8zEXx9byc/wR6RytP8AJ5vGXEXltvNl6H8iR7uTD+DFPPr26U190jyX8mN+TUcTU801vqnD702bSyFEotbmq0N0ZLglGngi8x08F/cyFbfZZY9IFGVKMwbFs+DIA0x0nEe3u8bJ/lwIA0z0nEe3u8bJbE+5L6IfLeMTxgAsBAgAAAAAAAAAAAybXVvTU8FcrY5uLyjZDqnD/kt+XvJu0fjIXVwtrltQkk4vuZ8+o67UHWX9Gs/R7ZPyE35rb/ZT6vc/mRGS0frX6kVySmO1fofok+CXsxmWRluRcyv7lg3K5jM1WJ0/hqr/ANHstjC3ZjNRm9lNPPg36DYwtTWaaa6mt5s4tLfYwpxfG5lBbmVMGwyKZFwAKZDIqDGwLcimyXgbAtRcCjMgZlGWtnG6367Qw21Th8p39bzzhV3t9b7jeuuVkvTFHlbbGqO8mbXWjWanAw87z7WvMqi1tS732LvIWxVzsnOxpJynKbS4JyeeX3lcViJ2ylZZJznJ5ylLe3v+XcYmWXR6ONC3+WVvWap3S/gAA7jiAAAAAAAAAAAABXMoA+eDKexKHJ3rN5WCwl0vpYRXk5N77K11Z9ckd2z55w+IlXKFlbcZxalFp9a/AmrVPT8cbRGfCyPm2w7JLr9D/MrmQ0jrl649MsGP1asXol2iPuU5fr//AK9XjsNDo7TmKw37C6cF1wz2oP0xlmvhkb3lQ6evq9XjsOSJXSVQnRFSW/BFamyUL5elkiaK5SXujiqf89O/0txf5nZ6L1iwuKX0N0JPrg/NmvTF718CCcxGTTTTafU08mveeNuKhLmL2OirJ2R4lyfRSkVzIU0TrljcO0vK+Vgv8Fy2t3dLivv9B2mieUXDWZRvjKmX8WTnX8VvXvRFXaC6r43JOnIVT74O4zKnjwePquipVWQsi+uMlJfcetM4mmuzuUk+ioBTMGRmY7LVFNtpJcW3kviefSOkKsPCVt01CCWbbf3d7Im1s1utxrddedeHz5nCVnfLu7jo0+lnfLZdHLqNVClbvs2+uGvLntUYOTUc3Gd63Z9qhn8zgc/79veGULLptNCmOyXJW79RK57sAA6TwAABgAAAAAAAAAAAAAAAobXV7TNmCvjdDhzbIdU4PivT1o1YTNLK1OLiz0rscJKS+DpNfsZC/FV3VvOE8NTKL7tqw5sq3/Xvf5lDWmv9OCh+DNs3OTkwAD1PMAAyDPg8XZS9qqydb7YScfj1P0HWaJ5QsTVlG+ML49qWxYvwf3HGDM5rdLVZ5I96tTZX0yZtE67YLEZLyqqnw2LmoZvsTe5/E9mn9YqMHXt2TTbz2IRfnWPdwXZvW/vINXfvKyk3k228lkm83u7PR3Ee8TH17p8HesrP07Ncm009p6/Gz27nlFNuFcc9iH5vvNUAStdcK4+mKIyyyU36pMAA3PMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//2Q=="
          alt="Azure DevOps"
          className={styles.featureSvg}
      />
  ),
  description: (
      <>
          Azure DevOps é uma plataforma da Microsoft que oferece ferramentas para desenvolvimento de software, incluindo controle de versão, integração contínua, entrega contínua e gerenciamento de projetos.
      </>
  ),
  link: "https://docs.microsoft.com/en-us/azure/devops/"
},
{
  title: "GitLab",
  Svg: () => (
      <img
          src="https://about.gitlab.com/images/press/logo/png/gitlab-icon-rgb.png"
          alt="GitLab"
          className={styles.featureSvg}
      />
  ),
  description: (
      <>
          GitLab é uma plataforma completa de desenvolvimento de software que oferece controle de versão, integração contínua, entrega contínua e outros recursos.
      </>
  ),
  link: "https://docs.gitlab.com/ee/"
},

{
  title: "Jenkins",
  Svg: () => (
      <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Jenkins_logo.svg"
          alt="Jenkins"
          className={styles.featureSvg}
      />
  ),
  description: (
      <>
          Jenkins é uma ferramenta de automação de código aberto que permite a integração contínua e a entrega contínua de software.
      </>
  ),
  link: "https://www.jenkins.io/doc/"
},

{
  title: "Bitbucket",
  Svg: () => (
      <img
          src="https://logowik.com/content/uploads/images/bitbucket9553.jpg"
          alt="Bitbucket"
          className={styles.featureSvg}
      />
  ),
  description: (
      <>
          Bitbucket é uma plataforma de hospedagem de código-fonte que oferece controle de versão, integração contínua e outras ferramentas para ajudar no desenvolvimento de software.
      </>
  ),
  link: "https://support.atlassian.com/bitbucket-cloud/"
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
      <Card style={cardStyle}>
          <CardActionArea>
              <CardMedia
                  style={cardMediaStyle}
                  component="img"
                  src={Svg().props.src}
                  alt={Svg().props.alt}
              />
              <CardContent style={cardContentStyle}>
                  <Typography gutterBottom variant="h5" component="div">
                      {title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                      {description}
                  </Typography>
              </CardContent>
          </CardActionArea>
          <CardActions style={cardActionsStyle}>
              <Button variant="contained" size="medium" color="info" href={link} style={{borderRadius: "14px 0 14px 0", boxShadow: "5px 5px 10px", color: "whitesmoke"}}>
                  Documentação
              </Button>
          </CardActions>
      </Card>
  );
}


export default function HomepageFeatures() {
  // Configurações para o carrossel
  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: "linear",
  };

  return (
    <section className={styles.features} style={{ width: '100%' }}>
        <div style={{ width: '100%' }}>
            <Slider {...settings} style={{ width: '100%' }}>
                {FeatureList.map((props, idx) => (
                    <Feature key={idx} {...props} />
                ))}
            </Slider>
        </div>
    </section>
);

}

