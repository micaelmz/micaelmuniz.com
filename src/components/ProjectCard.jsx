import React, {useState} from "react";
import CustomButton from "./CustomButton";
import {Column, Row} from "./layout";
import {Modal} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

export default function ProjectCard({title, description, url, image, variation}) {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const projectBackgroundImage = require('../assets/img/lavagifs/lava_prop_5.gif');

  return (
      <div className="h-[40vh] w-[47vh] bg-white flex items-center justify-center text-fuchsia-500 hover:bg-fuchsia-500 hover:text-white">

        <div className="text-center">
          <p className="my-10 block lastica text-4xl">{title}</p>
          <CustomButton onClick={handleOpen} backgroundColor="#2c1e4a" textColor="white">Saiba Mais</CustomButton>
        </div>

        <Modal open={open}>
          <div className="project-modal">
            <Row className="justify-end">
              <CloseIcon onClick={handleClose} sx={{cursor: "pointer", color: "red"}} fontSize="large"/>
            </Row>
            <Row className="ms-10 h-full">
              <Column w={6}>
                <div className="modal-text-box">
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
                  {
                    variation === "right" ? (
                      <>
                        <img src={projectBackgroundImage} className="w-[55vh]" alt="background-project"/>
                        <img src={image} className="rounded-full w-[45vh] aspect-square -top-[110%] left-[20%] transform -translate-y-[110%] -translate-x-[20%]" alt="project"/>
                      </>
                    ) : (
                      <>
                        <img src={projectBackgroundImage} className="w-[55vh] transform rotate-180" alt="background-project"/>
                        <img src={image} className="rounded-full w-[45vh] aspect-square -top-[115%] left-[10%] transform -translate-y-[115%] -translate-x-[10%]"  alt="project"/>
                      </>
                    )
                  }
                </Row>
              </Column>
            </Row>
          </div>
        </Modal>
      </div>
  )
}