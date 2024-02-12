import React from 'react';
import '../index.css';
import {Row, Column} from "./layout";
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

        <GradientSection index={0} id="home">
          <Row className="pt-24">
            <Column w={9} className="ps-28 pt-24">
              <h1 className="text-white lastica text-5xl font-bold mt-5">Olá, sou Micael Muniz</h1>
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
                  className="text-white tt-interfaces text-2xl mt-5 tracking-wider block"
                  repeat={Infinity}
              />
              <a href="#about"><CustomButton backgroundColor="#d63cbd" textColor="white" className="mt-10 w-[10rem]">Saiba Mais</CustomButton></a>
            </Column>
            <Column w={3}>
              <video className="transform -rotate-45 w-[7rem]" autoPlay loop muted>
                <source src={require('../assets/img/lavagifs/lava_prop_2.webm')} type="video/webm" />
              </video>
              <video className="w-[20rem] transform -ms-10 -mt-10" autoPlay loop muted>
                <source src={require('../assets/img/lavagifs/lava_prop_4.webm')} type="video/webm" />
              </video>
            </Column>
          </Row>
        </GradientSection>

        <GradientSection index={1} id="about">
          <Row className="pt-32 px-28">
            <Column w={6}>
              <h3 className="text-fuchsia-500 lastica text-xl font-bold">Um pequeno resumo...</h3>
              <video className="ms-24 mt-10 transform rotate-[260deg] w-[12rem]" autoPlay loop muted>
                <source src={require('../assets/img/lavagifs/lava_prop_1.webm')} type="video/webm" />
              </video>
              <video className="ms-1 -mt-80 transform rotate-[75deg] w-[12rem]" autoPlay loop muted>
                <source src={require('../assets/img/lavagifs/lava_prop_3.webm')} type="video/webm" />
              </video>
            </Column>
            <Column w={6}>
              <p className="text-white tt-interfaces text-3xl">
                Sou um estudante de Engenharia de Computação e Técnico em Informática de 22 anos. Tenho um grande interesse em Desenvolvimento e Inteligência
                Artificial.
              </p>
            </Column>
          </Row>
        </GradientSection>

        <GradientSection index={2} id="projects">
          <hr className="w-2/3 mx-auto"></hr>
          <Row className="pt-24 px-28">
            <h1 className="text-white lastica text-4xl font-semibold">Projetos em que atuei</h1>
            <p className="text-white tt-interfaces mt-4 tracking-wider">Minha experiência em projetos pessoais, acadêmicos e de freelancer.</p>
          </Row>
          <Row className="mx-28 align-middle justify-between mt-10">
            <ProjectCard
                title="Rovena"
                description="Rovena é um software de combate ao cibercrime que monitora redes sociais e utiliza inteligência artificial de processamento de linguagem natural para identificar e rastrear crimes virtuais."
                url="https://teste.com"
                image="https://placehold.it/500x500"
                variation="right"
            />
            <ProjectCard
                title="Rovena2"
                description="Rovena é um software de combate ao cibercrime que monitora redes sociais e utiliza inteligência artificial de processamento de linguagem natural para identificar e rastrear crimes virtuais."
                url="https://teste.com"
                image="https://placehold.it/500x500"
                variation="left"
            />
            <ProjectCard
                title="Rovena3"
                description="Rovena é um software de combate ao cibercrime que monitora redes sociais e utiliza inteligência artificial de processamento de linguagem natural para identificar e rastrear crimes virtuais."
                url="https://teste.com"
                image="https://placehold.it/500x500"
                variation="right"
            />
          </Row>
        </GradientSection>

        <GradientSection index={3} id="contact">
          <Row className="py-24 px-28 h-full">
            <Column w={6} className="h-full">
              <Row className="flex-col justify-between relative h-full">
                <h2 className="tt-interfaces text-3xl text-white font-bold tracking-wider">Entre em contato</h2>

                <div>
                  <h4 className="lastica text-white text-xl mb-2">EMAIL</h4>
                  <a href="mailto:contato@micaelmuniz.com"><p className="tt-interfaces text-white text-xl tracking-wider mb-10">contato@micaelmuniz.com</p></a>

                  <h4 className="lastica text-white text-xl mb-2">WHATSAPP</h4>
                  <a href="whatsapp://send?phone=551140402024"><p className="tt-interfaces text-white text-xl tracking-wider">(11) 4040-2024</p></a>
                </div>

                <div className="flex p-6 border border-white border-solid border-1.5 w-4/5">
                  <h5 className="lastica text-white text-2xl">SOCIAL</h5>
                  <Row className="ms-auto" gap="1rem">
                    <a href="https://github.com/micaelmz" target="_blank" className="ms-4"><GitHubIcon style={{color: "white"}} fontSize="large"/></a>
                    <a href="https://www.linkedin.com/in/micaelmuniz/" target="_blank"><LinkedInIcon style={{color: "white"}} fontSize="large"/></a>
                    <a href="https://www.instagram.com/micaelmz/" target="_blank"><InstagramIcon style={{color: "white"}} fontSize="large"/></a>
                  </Row>
                </div>
              </Row>
            </Column>
            <Column w={6}>
              <video className="ms-auto w-[80%]" autoPlay loop muted>
                <source src={require('../assets/img/lavagifs/lava_prop_6.webm')} type="video/webm" />
              </video>
            </Column>
          </Row>
        </GradientSection>

      </>
  );
}

export default App;