import React from "react";
import CustomButton from "./CustomButton";
import {Row} from "./layout";

export default function ProjectCard({children: projectName}) {
  return (
      <div className="h-[40vh] w-[47vh] bg-white flex items-center justify-center text-fuchsia-500 hover:bg-fuchsia-500 hover:text-white">
        <div className="text-center">
          <p className="my-10 block lastica text-4xl">{projectName}</p>
          <CustomButton backgroundColor="#2c1e4a" textColor="white">Saiba Mais</CustomButton>
        </div>
      </div>
  )
}