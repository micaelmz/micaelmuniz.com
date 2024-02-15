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

function App() {

  return (
      <>

        <GradientSection index={0} id="home" height="lg:h-[650px] h-[725px]">
          <div className="lg:mx-32 mx-6">
            <Row className="lg:pt-24">
              <Col lg={9} xs={12} className="pt-28 lg:mt-0 mt-16">
                <h1 className="text-white text-nowrap lastica font-bold lg:text-[44px] text-[30px]">
                  <span className="lg:hidden block">Olá, sou </span>
                  <span className="lg:inline hidden">Olá, sou </span>
                  Micael Muniz</h1>
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
                <div className="flex lg:justify-normal justify-center lg:mt-10 mt-20">
                  <a href="#contact"><CustomButton backgroundColor="#d63cbd" textColor="white" className="w-[13rem]">Entrar em contato</CustomButton></a>
                </div>
              </Col>
              <Col lg={3} xs={12}>
                <video className="transform -rotate-45 w-[6rem] mr-2 lg:flex hidden" autoPlay loop muted>
                  <source src={require('../assets/img/lavagifs/lava_prop_2.webm')} type="video/webm"/>
                </video>
                <video className="transform lg:-ms-10 lg:-mt-10 m-[auto] lg:w-[18rem] w-[12rem] lg:my-0 mt-20" autoPlay loop muted>
                  <source src={require('../assets/img/lavagifs/lava_prop_4.webm')} type="video/webm"/>
                </video>
              </Col>
            </Row>
          </div>
        </GradientSection>


        <GradientSection index={1} id="about" height="lg:h-[650px] h-[630px]">
          <div className="lg:mx-32 mx-6">
            <Row className="lg:pt-32 pt-10 ">
              <h3 className="text-fuchsia-500 lastica text-xl font-bold lg:-mb-10 mb-3">Um pequeno resumo...</h3>
              <Col lg={{span: 6, order: 1}} xs={{span: 12, order: 2}}>
                <div className="mb-4">
                  <video className="lg:ms-24 ms-36 lg:mt-10 mt-5 transform rotate-[260deg] lg:w-[12rem] w-[8rem]" autoPlay loop muted>
                    <source src={require('../assets/img/lavagifs/lava_prop_1.webm')} type="video/webm"/>
                  </video>
                  <video className="lg:ms-3 ms-16 lg:-mt-80 -mt-56 transform rotate-[75deg] lg:w-[12rem] w-[8rem]" autoPlay loop muted>
                    <source src={require('../assets/img/lavagifs/lava_prop_3.webm')} type="video/webm"/>
                  </video>
                </div>
              </Col>
              <Col lg={{span: 6, order: 2}} xs={{span: 12, order: 1}}>
                <p className="text-white tt-interfaces lg:text-3xl text-xl">
                  Sou um estudante de Engenharia de Computação e Técnico em Informática aspirante a desenvolvedor em busca de minha primeira oportunidade profissional. Sou apaixonado por projetos de engenharia que impulsionam o progresso humano e almejo fazer minhas próprias contribuições no futuro.
                </p>
              </Col>
            </Row>
          </div>
        </GradientSection>


        <GradientSection index={2} id="projects" height="lg:h-[600px] h-[1230px]">

          <div className="flex">
            <hr className="w-2/3 mx-auto text-white"></hr>
          </div>

          <div className="lg:mx-32 mx-6">
            <Row className="lg:pt-24 pt-5">
              <h1 className="text-white lastica text-4xl font-semibold">
                Projetos <span className="lg:inline hidden">em que atuei</span>
              </h1>
              <p className="text-white tt-interfaces mt-4 tracking-wider">Minha experiência em projetos pessoais, acadêmicos e de freelancer.</p>
            </Row>
            <div className="lg:flex block lg:mx-28 mx-3 align-middle justify-between mt-10">
              <ProjectCard
                  title="Exemplo"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                  url="https://teste.com"
                  image="https://placehold.it/500x500"
                  variation="right"
              />
              <ProjectCard
                  title="Exemplo2"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                  url="https://teste.com"
                  image="https://placehold.it/500x500"
                  variation="left"
              />
              <ProjectCard
                  title="Exemplo3"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                  url="https://teste.com"
                  image="https://placehold.it/500x500"
                  variation="right"
              />

            </div>
          </div>
        </GradientSection>

        <GradientSection index={3} id="contact" height="lg:h-[615px] h-[825px]">
          <div className="lg:mx-32 mx-6">
            <Row className="pt-24 pb-5">
              <Col lg={6} xs={12}>
                <Row className="flex-col justify-between relative h-full">
                  <h2 className="tt-interfaces text-3xl text-fuchsia-500 font-bold tracking-wider lg:mb-0 mb-16">Entre em contato</h2>
                  <div>
                    <h4 className="lastica text-white text-xl mb-2">EMAIL</h4>
                    <a href="mailto:contato@micaelmuniz.com"><p className="tt-interfaces text-white text-xl tracking-wider">contato@micaelmuniz.com</p>
                    </a>

                    <h4 className="lastica text-white text-xl mb-2 mt-5">TELEFONE</h4>
                    <a href="whatsapp://send?phone=551140402024"><p className="tt-interfaces text-white text-xl tracking-wider">(11) 4040-2024</p></a>
                  </div>

                  <div className="flex p-6 border border-white border-solid border-1.5 lg:w-4/5 w-[94%] lg:mx-3 ml-auto mr-auto lg:mt-0 mt-9">
                    <h5 className="lastica text-white text-2xl">SOCIAL</h5>
                    <div className="flex ms-auto gap-3">
                      <a href="https://github.com/micaelmz" target="_blank" className="ms-4"><GitHubIcon style={{color: "white"}} fontSize="large"/></a>
                      <a href="https://www.linkedin.com/in/micaelmuniz/" target="_blank"><LinkedInIcon style={{color: "white"}} fontSize="large"/></a>
                      <a href="https://www.instagram.com/micaelmz/" target="_blank"><InstagramIcon style={{color: "white"}} fontSize="large"/></a>
                    </div>
                  </div>
                </Row>
              </Col>
              <Col lg={6} xs={12}>
                <div className="flex justify-center">
                  <video className="lg:w-[80%] w-[70%]" autoPlay loop muted>
                    <source src={require('../assets/img/lavagifs/lava_prop_6.webm')} type="video/webm"/>
                  </video>
                </div>
              </Col>
            </Row>
          </div>
        </GradientSection>
      </>
  );
}

export default App;