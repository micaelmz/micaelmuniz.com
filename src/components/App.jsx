import React from 'react';
import '../index.css';
import {Row, Column} from "./layout";

function App() {
  return (
      // todo: colocar o section e a div que aplicam o gradiente em um componente
      <div>
        <section className="gradient-up h-dvh">
          <div className="gradient-blue h-dvh">
            <Row className="pt-16">
              <Column w={9} className="ps-16 pt-24">
                <h1 className="text-white lastica text-5xl font-extrabold">Olá, sou Micael Muniz</h1>
                <p className="text-white tt-interfaces text-2xl mt-5 tracking-wider">e sou Desenvolvedor Full Stack</p>
                <button className="mt-7 custom-button">Saiba Mais</button>
              </Column>
              <Column w={3}>
                <img src={require('../assets/img/lavagifs/lava_prop_2.gif')} alt="gif" className="ms-9 transform -rotate-45 w-[7rem]"/>
                <img src={require('../assets/img/lavagifs/lava_prop_4.gif')} alt="gif" className="w-[20rem] transform -ms-10 -mt-10"/>
              </Column>
            </Row>
          </div>
        </section>
        <section className="gradient-down h-dvh">
          <div className="gradient-blue h-dvh">

          </div>
        </section>
      </div>
  );
}

export default App;