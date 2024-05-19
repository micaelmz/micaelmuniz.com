import React, {useState, useEffect} from "react";
import CustomButton from "./CustomButton";
import {Row, Col, Container} from "react-bootstrap";
import {Modal} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

export default function ProjectCard({title, description, url, image, variation}) {

  const [open, setOpen] = useState(false);
  const [draw, setDraw] = useState(false);
  const handleOpen = () => {
    setOpen(true);
    setTimeout(() => {
      setDraw(true);
    }, 250);
  };
  const handleClose = () => {
    setOpen(false);
    setDraw(false);
  };

  const variations = {
    right: {
      background: "right-[55%] transform translate-x-[55%] top-[4%] -translate-y-[4%]",
      foreground: "left-[55%] transform -translate-x-[55%] bottom-[4%] translate-y-[4%]"
    },
    left: {
      background: "transform rotate-180 right-[45%] transform translate-x-[45%] bottom-[4%] translate-y-[4%]",
      foreground: "left-[45%] transform -translate-x-[45%] top-[4%] -translate-y-[4%]"
    }
  }

  return (
      // todo: em caso de hover aplicar a foto do projeto com um filtro rosa como background, uma ideia é criar uma nova div já com esse background mas com opacity 0 e ao passar o mouse aplicar um transition para opacity 1, e no mobile nao ser hover mas sim o padrao
      <>
        <div className="project-card flex lg:my-auto mb-8 items-center justify-center transition-all duration-300 ease-in-out lg:w-[30%] w-[100%] aspect-[9/8]">
          <div className="text-center">
            <p className="my-10 block venera-500 lg:text-3xl text-2xl">{title}</p>
            <CustomButton onClick={handleOpen} backgroundColor="#2c1e4a" textColor="white">Saiba Mais</CustomButton>
          </div>
        </div>

        <Modal open={open} onClose={handleClose}>
          <article>
            <div aria-expanded="true" className="project-modal lg:w-[80vw] lg:h-[80vh] w-[100vw] h-[100vh] lg:opacity-100 opacity-90 fade-in">
              <Row className="flex h-[10%]">
                <span className="text-4xl text-end lg:my-0 my-7 pe-4">
                  <CloseIcon aria-label="Fechar detalhes do projeto" onClick={handleClose}
                             sx={{cursor: "pointer", color: "red"}}
                             fontSize="inherit"
                  />
                </span>
              </Row>

              <Row className="h-[90%]">

                <Col lg={6} xs={12} className="lg:h-full h-[40%] flex">
                  <div className="lg:my-auto my-[0%]">
                    <div className={`modal-text-box lg:gap-[2.5rem] gap-[2rem] lg:mb-[10%] lg:ml-[12%] m-[3%] ${draw ? 'draw' : ''}`}
                         id="modal-text-box">
                      <h3 className="text-white venera-500 text-4xl">
                        {title}
                      </h3>
                      <p className="text-white poppins lg:text-base text-sm">
                        {description}
                      </p>
                      {url ? (
                          <a href={url} target="_blank" rel="noreferrer"
                             aria-label="Acessar site do projeto">
                            <CustomButton
                                backgroundColor="#d63cbd" textColor="white"
                                className="lg:w-1/3 w-2/5">
                                Acessar
                            </CustomButton>
                          </a>
                      ) : (
                          <CustomButton
                              backgroundColor="#d63cbd" textColor="white"
                              className="w-3/6">
                              Em breve
                          </CustomButton>
                      )}
                    </div>
                  </div>
                </Col>

                <Col lg={6} xs={12} className="lg:h-full h-[40%] lg:pb-[5%] pb-[0%] lg:mt-[0rem] mt-[4rem]">
                  <div className="flex h-full">
                    <div className="m-auto w-[110%]">
                      <video className={`${variations[variation].background}`} aria-hidden="true" autoPlay loop muted
                             poster="https://res.cloudinary.com/dtewu315j/image/upload/f_auto,q_auto/lava_prop_5_poster">
                        <source src="https://res.cloudinary.com/dtewu315j/video/upload/f_auto:video,q_auto/lava_prop_5" type="video/webm"/>
                      </video>
                    </div>
                    <div className="my-auto w-[100%]">
                      <img className={`rounded-full aspect-square ${variations[variation].foreground}`}
                           alt="Imagem do projeto"
                           src={image}/>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </article>
        </Modal>
      </>
  )
}