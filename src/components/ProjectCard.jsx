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
      background: "",
      foreground: "-top-[110%] left-[20%] transform -translate-y-[110%] -translate-x-[20%]"
    },
    left: {
      background: "transform rotate-180",
      foreground: "-top-[115%] left-[10%] transform -translate-y-[115%] -translate-x-[10%]"
    }
  }

  return (
      // todo: em caso de hover aplicar a foto do projeto com um filtro rosa como background, uma ideia é criar uma nova div já com esse background mas com opacity 0 e ao passar o mouse aplicar um transition para opacity 1, e no mobile nao ser hover mas sim o padrao
      <>
        <div className="project-card flex items-center justify-center transition-all duration-300 ease-in-out lg:w-[30%] w-[100%] aspect-[9/8] lg:mb-0 mb-10">
          <div className="text-center">
            <p className="my-10 block lastica lg:text-3xl text-2xl">{title}</p>
            <CustomButton onClick={handleOpen} backgroundColor="#2c1e4a" textColor="white">Saiba Mais</CustomButton>
          </div>
        </div>
        <Modal open={open} onClose={handleClose}>
          <div className="project-modal lg:w-[80vw] lg:h-[80vh] w-[100vw] h-[99vh] lg:opacity-100 opacity-90 fade-in">
            <Row className="flex">
              <span className="text-4xl text-end lg:my-0 my-7">
                <CloseIcon onClick={handleClose} sx={{ cursor: "pointer", color: "red" }} fontSize="inherit"/>
              </span>
            </Row>

            <Row className="lg:ms-10 -ms-2 h-full">
              <Col lg={6} xs={12}>
                <div className={`modal-text-box lg:h-[62%] h-[125%] ${draw ? 'draw' : ''}`} id="modal-text-box">
                  <h1 className="text-white lastica text-4xl">{title}</h1>
                  <p className="text-white tt-interfaces">
                    {description}
                  </p>
                  {url ? (
                      <a href={url} target="_blank">
                        <CustomButton backgroundColor="#d63cbd" textColor="white" className="lg:w-1/3 w-2/5">
                          Acessar
                        </CustomButton>
                      </a>
                  ) : (
                      <CustomButton backgroundColor="#d63cbd" textColor="white" className="w-2/5">
                        Em breve
                      </CustomButton>
                  )}
                </div>
              </Col>
              <Col lg={6} xs={12}>
                <Row className="lg:justify-end justify-center lg:mt-0 mt-24">
                  <video className={`lg:w-[350px] w-[290px] ${variations[variation].background}`} autoPlay loop muted poster={require('../assets/img/lavagifs/lava_prop_5_poster.webp')}>
                    <source src={require('../assets/img/lavagifs/lava_prop_5.webm')} type="video/webm"/>
                  </video>
                  <img src={image} className={`lg:ml-0 ml-16 rounded-full lg:w-[272px] w-[220px] aspect-square ${variations[variation].foreground}`} alt="project"/>
                </Row>
              </Col>
            </Row>
          </div>
        </Modal>
      </>
  )
}