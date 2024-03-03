import React from 'react';
import {Row, Col, Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import GradientSection from "./GradientSection";
import ProjectCard from "./ProjectCard";
import CustomButton from "./CustomButton";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import {TypeAnimation} from "react-type-animation";
import {Fade, Slide} from "react-awesome-reveal";

function App() {

  return (
      <>
        <header>
          <GradientSection index={0} id="home" height="lg:h-[105vh] h-[100vh]">
            <div className="lg:mx-32 mx-6">
              <Row className="lg:pt-24">
                <Col lg={9} xs={12} className="pt-28 lg:mt-0 mt-16">
                  <h1 className="text-white text-nowrap lastica font-bold lg:text-[44px] text-[30px]" aria-label="Olá, sou Micael Muniz">
                    <span className="lg:hidden block">Olá, sou </span>
                    <span className="lg:inline hidden">Olá, sou </span>
                    Micael <i className="icon-image"></i> Muniz
                  </h1>
                  <div aria-live="polite">
                    <TypeAnimation
                        sequence={[
                          'e sou Desenvolvedor Full Stack',
                          1000,
                          'e sou Desenvolvedor Python',
                          1000,
                          'e sou Desenvolvedor JavaScript',
                          1000,
                          'e sou Desenvolvedor Freelancer',
                          1000
                        ]}
                        speed={50}
                        className="text-white tt-interfaces lg:mt-5 mt-3 tracking-wider block lg:text-xl text-lg"
                        repeat={Infinity}
                    />
                  </div>
                  <div className="flex lg:justify-normal justify-center lg:mt-10 mt-20">
                    <a href="#contact" aria-label="Ir para a seção de contato"><CustomButton backgroundColor="#d63cbd" textColor="white" className="w-[13rem]">Entrar
                      em contato</CustomButton></a>
                  </div>
                </Col>
                <Col lg={3} xs={12}>
                  <video className="transform -rotate-45 w-[6rem] mr-2 lg:flex hidden" aria-hidden="true" autoPlay loop muted
                         poster={require('../assets/img/lavagifs/lava_prop_2_poster.webp')}>
                    <source src={require('../assets/img/lavagifs/lava_prop_2.webm')} type="video/webm"/>
                  </video>
                  <video className="transform lg:-ms-10 lg:-mt-10 m-[auto] lg:w-[18rem] w-[12rem] lg:my-0 mt-20" aria-hidden="true" autoPlay loop muted
                         poster={require('../assets/img/lavagifs/lava_prop_4_poster.webp')}>
                    <source src={require('../assets/img/lavagifs/lava_prop_4.webm')} type="video/webm"/>
                  </video>
                </Col>
              </Row>
            </div>
          </GradientSection>
        </header>

        <main>

          <GradientSection index={1} id="about" height="lg:h-[650px] h-[600px]">
            <Fade triggerOnce delay={100}>
              <div className="lg:mx-32 mx-6">
                <Row className="lg:pt-32 pt-10 ">
                  <h2 className="text-fuchsia-500 lastica text-xl font-bold lg:-mb-10 mb-4">Um pequeno resumo...</h2>
                  <Col lg={{span: 6, order: 1}} xs={{span: 12, order: 2}}>
                    <div className="mb-4">
                      <video className="lg:ms-24 ms-36 lg:mt-10 mt-5 transform rotate-[260deg] lg:w-[12rem] w-[8rem]" aria-hidden="true" autoPlay loop muted
                             poster={require('../assets/img/lavagifs/lava_prop_1_poster.webp')}>
                        <source src={require('../assets/img/lavagifs/lava_prop_1.webm')} type="video/webm"/>
                      </video>
                      <video className="lg:ms-3 ms-16 lg:-mt-80 -mt-56 transform rotate-[75deg] lg:w-[12rem] w-[8rem]" aria-hidden="true" autoPlay loop muted
                             poster={require('../assets/img/lavagifs/lava_prop_3_poster.webp')}>
                        <source src={require('../assets/img/lavagifs/lava_prop_3.webm')} type="video/webm"/>
                      </video>
                    </div>
                  </Col>
                  <Col lg={{span: 6, order: 2}} xs={{span: 12, order: 1}}>
                    <p className="text-white tt-interfaces lg:text-3xl text-xl">
                      Sou um estudante de Engenharia de Computação, com formação técnica em Informática, entusiasmado em dar os primeiros passos na carreira de
                      desenvolvedor. Meu foco está no desenvolvimento Full-Stack e na exploração do vasto campo da ciência de dados.
                    </p>
                  </Col>
                </Row>
              </div>
            </Fade>
          </GradientSection>

          <GradientSection index={2} id="projects" height="lg:h-[650px] h-[1250px]">
            <Fade triggerOnce delay={100}>
              <div className="flex">
                <hr className="w-2/3 mx-auto text-white"></hr>
              </div>

              <div className="lg:mx-32 mx-6">
                <Row className="lg:pt-24 pt-5">
                  <h2 className="text-white lastica text-4xl font-semibold">
                    Projetos <span className="lg:inline hidden">em que atuei</span>
                  </h2>
                  <p className="text-white tt-interfaces mt-4 tracking-wider">Minha experiência em projetos pessoais, acadêmicos e de freelancer.</p>
                </Row>
                <div className="lg:flex block lg:mx-28 mx-3 align-middle justify-between mt-10">
                  <ProjectCard
                      title="Enviador de Cardápio"
                      description="Desenvolvi um robô em Python para automatizar a distribuição do cardápio do Restaurante Universitário (RU) da UEFS. O processo inclui a extração semanal dos dados do PDF do cardápio no site da universidade, armazenando-os em um banco de dados, então, o sistema envia as informações via WhatsApp aos estudantes que solicitarem."
                      url="https://github.com/micaelmz/auto-sender-menu-uefs"
                      image={require("../assets/img/cruefs_logo.webp")}
                      variation="right"
                  />
                  <ProjectCard
                      title="You Shop"
                      description="Um projeto demonstrativo de uma loja on-line completa, feita em Python com o framework Flask, contendo um painel administrativo público, RESTful API, sistema de usuários, notificação, autenticação, produtos, estoque, avaliações, busca, pedidos, pagamentos (pix) e muito mais."
                      url="https://github.com/micaelmz/you-shop"
                      image={require("../assets/img/youshop_logo.webp")}
                      variation="left"
                  />
                  <ProjectCard
                      title="Rovena"
                      description="Rovena é uma sofisticada ferramenta de combate ao cibercrime, com capacidade de monitorar redes sociais e aplicar inteligência artificial de processamento de linguagem natural para identificar e rastrear crimes virtuais. Este projeto foi apresentado como uma solução para o Objetivo de Desenvolvimento Sustentável (ODS) 16 da ONU, na competição internacional Laboratório de Ideias, promovida pelo prestigioso IEEE."
                      image={require("../assets/img/rovena_logo.webp")}
                      variation="right"
                  />
                </div>
                <div className="flex justify-center mt-10">
                  <a href="https://github.com/stars/micaelmz/lists/projetos" target="_blank" rel="noreferrer" aria-label="Ver mais projetos no GitHub">
                    <CustomButton backgroundColor="#d63cbd" textColor="white">Mais projetos</CustomButton>
                  </a>
                </div>
              </div>
            </Fade>
          </GradientSection>

        </main>

        <footer>
          <GradientSection index={3} id="contact" height="h-[95vh]">
            <Fade triggerOnce delay={100}>
              <div className="lg:mx-32 mx-6">
                <Row className="lg:pt-24 pt-5 pb-5">
                  <Col lg={6} xs={12}>
                    <Row className="flex-col justify-between relative h-full">
                      <h2 className="tt-interfaces text-3xl text-fuchsia-500 font-bold tracking-wider lg:mb-0 mb-16">Entre em contato</h2>
                      <div>
                        <h3 className="lastica text-white text-xl mb-2">EMAIL</h3>
                        <a href="mailto:contato@micaelmuniz.com" className="inline-block" aria-label="Enviar um e-mail para">
                          <p className="tt-interfaces text-white text-xl tracking-wider m-0">contato@micaelmuniz.com</p>
                        </a>


                        <h3 className="lastica text-white text-xl mb-2 mt-5">TELEFONE</h3>
                        <a href="tel:+551140402024" className="inline-block" aria-label="Ligar para">
                          <p className="tt-interfaces text-white text-xl tracking-wider m-0">(11) 4040-2024</p>
                        </a>
                      </div>

                      <div className="flex p-6 border border-white border-solid border-1.5 lg:w-4/5 w-[94%] lg:mx-3 ml-auto mr-auto lg:mt-0 mt-9">
                        <h3 className="lastica text-white text-2xl">SOCIAL</h3>
                        <div className="flex ms-auto gap-3">
                          <a href="https://github.com/micaelmz" target="_blank" rel="noreferrer" aria-label="Acessar meu perfil no GitHub"
                             className="ms-4"><GitHubIcon style={{color: "white"}} fontSize="large"/></a>
                          <a href="https://www.linkedin.com/in/micaelmuniz/" target="_blank" rel="noreferrer"
                             aria-label="Acessar meu perfil no LinkedIn"><LinkedInIcon style={{color: "white"}} fontSize="large"/></a>
                          <a href="https://www.instagram.com/micaelmz/" target="_blank" rel="noreferrer"
                             aria-label="Acessar meu perfil no Instagram"><InstagramIcon
                              style={{color: "white"}} fontSize="large"/></a>
                        </div>
                      </div>
                    </Row>
                  </Col>
                  <Col lg={6} xs={12}>
                    <div className="flex justify-center">
                      <video className="lg:w-[80%] w-[70%]" aria-hidden="true" autoPlay loop muted
                             poster={require('../assets/img/lavagifs/lava_prop_6_poster.webp')}>
                        <source src={require('../assets/img/lavagifs/lava_prop_6.webm')} type="video/webm"/>
                      </video>
                    </div>
                  </Col>
                </Row>
              </div>
            </Fade>
          </GradientSection>
        </footer>
      </>
  );
}

export default App;