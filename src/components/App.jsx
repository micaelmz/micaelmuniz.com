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
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';

function App() {

    return (
        <>
            <header>
                <GradientSection index={0} id="home" height="h-[100vh]">
                    <div className="lg:mx-32 mx-6">
                        <Row className="h-screen">
                            <Col lg={9} xs={12} className="my-auto">
                                <h1 className="text-white text-nowrap venera-500 font-medium lg:text-[44px] text-[30px]"
                                    aria-label="Olá, sou Micael Muniz">
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
                                        className="text-white poppins lg:mt-5 mt-3 tracking-wider block lg:text-xl text-lg"
                                        repeat={Infinity}
                                    />
                                </div>
                                <div className="flex lg:justify-normal justify-center lg:mt-10 mt-20">
                                    <a href="#contact" aria-label="Ir para a seção de contato">
                                        <CustomButton backgroundColor="#d63cbd" textColor="white" className="w-[13rem]">
                                            Entrar em contato
                                        </CustomButton>
                                    </a>
                                </div>
                            </Col>
                            <Col lg={3} xs={12} className="my-auto">
                                <video className="transform -rotate-45 w-[6rem] mr-2 lg:flex hidden" aria-hidden="true"
                                       autoPlay loop muted
                                       poster="https://res.cloudinary.com/dtewu315j/image/upload/f_auto,q_auto/lava_prop_2_poster">
                                    <source
                                        src="https://res.cloudinary.com/dtewu315j/video/upload/f_auto:video,q_auto/lava_prop_2"
                                        type="video/webm"/>
                                </video>
                                <video
                                    className="transform lg:-ms-10 lg:-mt-10 m-[auto] lg:w-[18rem] w-[12rem] lg:my-0 mt-20"
                                    aria-hidden="true" autoPlay loop muted
                                    poster="https://res.cloudinary.com/dtewu315j/image/upload/f_auto,q_auto/lava_prop_4_poster">
                                    <source
                                        src="https://res.cloudinary.com/dtewu315j/video/upload/f_auto:video,q_auto/lava_prop_4"
                                        type="video/webm"/>
                                </video>
                            </Col>
                        </Row>
                    </div>
                </GradientSection>
            </header>

            <main>

                <GradientSection index={1} id="about" height="h-[100vh]">
                    <Fade triggerOnce delay={100}>
                        <div className="lg:mx-32 mx-6">
                            <Row className="h-screen">
                                <Col lg={{span: 6, order: 1}} xs={{span: 12, order: 2}} className="my-auto">
                                    <h2 className="text-fuchsia-500 venera-500 -mt-20 mb-20 text-xl font-bold">Um
                                        pequeno resumo...</h2>
                                    <div>
                                        <video
                                            className="lg:ms-24 ms-36 transform rotate-[260deg] lg:w-[15rem] w-[8rem]"
                                            aria-hidden="true" autoPlay loop muted
                                            poster="https://res.cloudinary.com/dtewu315j/image/upload/f_auto,q_auto/lava_prop_1_poster">
                                            <source
                                                src="https://res.cloudinary.com/dtewu315j/video/upload/f_auto:video,q_auto/lava_prop_1"
                                                type="video/webm"/>
                                        </video>
                                        <video
                                            className="lg:ms-3 ms-16 lg:-mt-96 -mt-56 transform rotate-[75deg] lg:w-[15rem] w-[8rem]"
                                            aria-hidden="true" autoPlay loop muted
                                            poster="https://res.cloudinary.com/dtewu315j/image/upload/f_auto,q_auto/lava_prop_3_poster">
                                            <source
                                                src="https://res.cloudinary.com/dtewu315j/video/upload/f_auto:video,q_auto/lava_prop_3"
                                                type="video/webm"/>
                                        </video>
                                    </div>
                                </Col>
                                <Col lg={{span: 6, order: 2}} xs={{span: 12, order: 1}} className="my-auto">
                                    <p className="text-white poppins lg:text-2xl text-xl">
                                        Sou um estudante de Engenharia de Computação, com formação técnica em
                                        Informática, entusiasmado em dar os primeiros passos na carreira de
                                        desenvolvedor. Meu foco está no desenvolvimento Full-Stack e na exploração do
                                        vasto campo da ciência de dados.
                                    </p>
                                </Col>
                            </Row>
                        </div>
                    </Fade>
                </GradientSection>

                <GradientSection index={2} id="projects" height="h-[100vh]">
                    <Fade triggerOnce delay={100}>
                        <div className="flex">
                            <hr className="w-2/3 mx-auto text-white"></hr>
                        </div>

                        <div className="lg:mx-32 flex mx-6 h-screen">
                            <div className="my-auto">
                                <Row>
                                    <h2 className="text-white venera-500 text-4xl font-semibold">
                                        Projetos <span className="lg:inline hidden">em que atuei</span>
                                    </h2>
                                    <p className="text-white poppins mt-3 tracking-wider">Minha experiência em projetos
                                        pessoais, acadêmicos e de freelancer.</p>
                                </Row>
                                <div className="lg:flex block mt-16 mb-10 align-middle justify-between">
                                    <ProjectCard
                                        title="Rovena"
                                        description="Rovena é uma ferramenta de combate ao cibercrime, que utiliza inteligência artificial de processamento de linguagem natural para monitorar redes sociais e identificar crimes virtuais. Este projeto foi apresentado como uma solução para o ODS 16 da ONU, na competição internacional Laboratório de Ideias, promovida pelo prestigioso IEEE."
                                        image="https://res.cloudinary.com/dtewu315j/image/upload/f_auto,q_auto/rovena_logo"
                                        variation="right"
                                    />
                                    <ProjectCard
                                        title="You Shop"
                                        description="Um projeto demonstrativo de uma loja on-line completa, feita em Python com o framework Flask, contendo um painel administrativo público, RESTful API, sistema de usuários, notificação, autenticação, produtos, estoque, avaliações, busca, pedidos, pagamentos (pix) e muito mais."
                                        url="https://github.com/micaelmz/you-shop"
                                        image="https://res.cloudinary.com/dtewu315j/image/upload/f_auto,q_auto/youshop2_logo"
                                        variation="left"
                                    />
                                    <ProjectCard
                                        title="RU Bot"
                                        description="Robô em Python para automatizar a distribuição do cardápio do Restaurante Universitário (RU) da UEFS. Extraindo os dados do PDF do cardápio no site da universidade, armazenando-os em um banco de dados, então, o sistema o envia via WhatsApp aos estudantes solicitantes."
                                        url="https://github.com/micaelmz/auto-sender-menu-uefs"
                                        image="https://res.cloudinary.com/dtewu315j/image/upload/f_auto,q_auto/cruefs_logo"
                                        variation="right"
                                    />
                                </div>
                                <div className="mb-6">
                                    <a href="https://github.com/stars/micaelmz/lists/projetos" target="_blank"
                                       rel="noreferrer" aria-label="Ver mais projetos no GitHub">
                                        <GitHubIcon style={{color: "white"}} fontSize="medium"/>
                                        <span className="ms-1 text-white poppins text-sm tracking-wider underline">Ver mais projetos no GitHub</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </GradientSection>

            </main>

            <footer>
                <GradientSection index={3} id="contact" height="h-[100]">
                    <Fade triggerOnce delay={100}>
                        <div className="lg:mx-32 mx-6 h-screen">
                            <Row className="d-flex align-items-center justify-content-center h-100">
                                <Col lg={6} xs={12}>
                                    <Row className="flex-col justify-between">
                                        <h2 className="poppins text-3xl text-fuchsia-500 font-bold tracking-wider lg:mb-14 mb-16">
                                            Entre em contato
                                        </h2>
                                        <div>
                                            <h3 className="venera-500 text-white text-xl mb-2">EMAIL</h3>
                                            <a href="mailto:contato@micaelmuniz.com" className="inline-block"
                                               aria-label="Enviar um e-mail para">
                                                <p className="poppins text-white text-xl tracking-wider m-0">contato@micaelmuniz.com</p>
                                            </a>


                                            <h3 className="venera-500 text-white text-xl mb-2 mt-5">TELEFONE</h3>
                                            <a href="tel:+551140402024" className="inline-block"
                                               aria-label="Ligar para">
                                                <p className="poppins text-white text-xl tracking-wider m-0">(11)
                                                    4040-2024</p>
                                            </a>
                                        </div>

                                        <div
                                            className="flex p-6 border border-white border-solid border-1.5 lg:w-4/5 w-[94%] lg:mx-3 ml-auto mr-auto lg:mt-14 mt-9">
                                            <h3 className="venera-500 text-white text-2xl">SOCIAL</h3>
                                            <div className="flex ms-auto gap-3">
                                                <a href="https://github.com/micaelmz" target="_blank" rel="noreferrer"
                                                   aria-label="Acessar meu perfil no GitHub"
                                                   className="ms-4"><GitHubIcon style={{color: "white"}}
                                                                                fontSize="large"/></a>
                                                <a href="https://www.linkedin.com/in/micaelmuniz/" target="_blank"
                                                   rel="noreferrer"
                                                   aria-label="Acessar meu perfil no LinkedIn"><LinkedInIcon
                                                    style={{color: "white"}} fontSize="large"/></a>
                                                <a href="https://www.instagram.com/micaelmz/" target="_blank"
                                                   rel="noreferrer"
                                                   aria-label="Acessar meu perfil no Instagram"><InstagramIcon
                                                    style={{color: "white"}} fontSize="large"/></a>
                                            </div>
                                        </div>
                                    </Row>
                                </Col>
                                <Col lg={6} xs={12}>
                                    <div className="flex justify-center">
                                        <video className="lg:w-[80%] w-[70%]" aria-hidden="true" autoPlay loop muted
                                               poster="https://res.cloudinary.com/dtewu315j/image/upload/f_auto,q_auto/lava_prop_6_poster">
                                            <source
                                                src="https://res.cloudinary.com/dtewu315j/video/upload/f_auto:video,q_auto/lava_prop_6"
                                                type="video/webm"/>
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