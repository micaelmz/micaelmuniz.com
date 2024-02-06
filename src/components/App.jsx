import React from 'react';
import '../index.css';
import {Row, Column} from "./layout";
import GradientSection from "./GradientSection";
import ProjectCard from "./ProjectCard";
import CustomButton from "./CustomButton";

function App() {

  return (
      <div>
        <GradientSection index={0} id="home">
          <Row className="pt-24">
            <Column w={9} className="ps-28 pt-24">
              <h1 className="text-white lastica text-5xl font-bold">Olá, sou Micael Muniz</h1>
              <p className="text-white tt-interfaces text-2xl mt-5 tracking-wider">e sou Desenvolvedor Full Stack</p>
              <a href="#about"><CustomButton backgroundColor="#d63cbd" textColor="white" className="mt-7">Saiba Mais</CustomButton></a>
            </Column>
            <Column w={3}>
              <img src={require('../assets/img/lavagifs/lava_prop_2.gif')} alt="gif" className="ms-9 transform -rotate-45 w-[7rem]"/>
              <img src={require('../assets/img/lavagifs/lava_prop_4.gif')} alt="gif" className="w-[20rem] transform -ms-10 -mt-10"/>
            </Column>
          </Row>
        </GradientSection>
        <GradientSection index={1} id="about">
          <Row className="pt-32 px-28">
            <Column w={6}>
              <h3 className="text-fuchsia-500 lastica text-xl font-bold">Um pequeno resumo...</h3>
              <img src={require('../assets/img/lavagifs/lava_prop_1.gif')} alt="gif" className="ms-24 mt-10 transform rotate-[260deg] w-[12rem]"/>
              <img src={require('../assets/img/lavagifs/lava_prop_3.gif')} alt="gif" className="ms-1 -mt-80 transform rotate-[75deg] w-[12rem]"/>
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
              image={require('../assets/img/sample.jpg')}
              variation="left"
            />
            {/*<ProjectCard>Lorem Ipsum</ProjectCard>*/}
            {/*<ProjectCard>Vidas Website</ProjectCard>*/}
          </Row>
        </GradientSection>
      </div>
  );
}

export default App;