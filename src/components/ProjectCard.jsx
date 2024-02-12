import React, {useState, useEffect} from "react";
import CustomButton from "./CustomButton";
import {Column, Row} from "./layout";
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
      // todo: em caso de hover aplicar a foto do projeto com um filtro rosa como background, uma ideia é criar uma nova div já com esse background mas com opacity 0 e ao passar o mouse aplicar um transition para opacity 1
      <>
        <div className="bg-white flex items-center justify-center text-fuchsia-500 hover:bg-fuchsia-500 hover:text-white transition-all duration-300 ease-in-out w-[30%] aspect-[9/8]">
          <div className="text-center">
            <p className="my-10 block lastica lg:text-3xl md:text-2xl sm:text-xl">{title}</p>
            <CustomButton onClick={handleOpen} backgroundColor="#2c1e4a" textColor="white">Saiba Mais</CustomButton>
          </div>
        </div>
        <Modal open={open}>
          <div className="project-modal fade-in">
            <Row className="justify-end">
              <CloseIcon onClick={handleClose} sx={{cursor: "pointer", color: "red"}} fontSize="large"/>
            </Row>
            <Row className="ms-10 h-full">
              <Column w={6}>
                <div className={`modal-text-box ${draw ? 'draw' : ''}`} id="modal-text-box">
                  <h1 className="text-white lastica text-4xl">{title}</h1>
                  <p className="text-white tt-interfaces">
                    {description}
                  </p>
                  {url ? (
                      <a href={url} target="_blank">
                        <CustomButton backgroundColor="#d63cbd" textColor="white" className="w-1/3">
                          Acessar
                        </CustomButton>
                      </a>
                  ) : (
                      <CustomButton backgroundColor="#d63cbd" textColor="white" className="w-2/5">
                        Em breve
                      </CustomButton>
                  )}
                </div>
              </Column>
              <Column w={6}>
                <Row className="justify-end">
                  <video className={`w-[55vh] ${variations[variation].background}`} autoPlay loop muted>
                    <source src={require('../assets/img/lavagifs/lava_prop_5.webm')} type="video/webm"/>
                  </video>
                  <img src={image} className={`rounded-full w-[45vh] aspect-square ${variations[variation].foreground}`} alt="project"/>
                </Row>
              </Column>
            </Row>
          </div>
        </Modal>
      </>
  )
}