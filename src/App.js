import React from "react";

import Experiencias from "./components/Experiencias";
import Idiomas from "./components/idiomas";
import InfoPessoais from "./components/infoPessoais";
import Skills from "./components/skills";

function App() {
  return (
    <>
      <InfoPessoais />
      <Skills />
      <Experiencias />
      <Idiomas />
    </>
  );
}

export default App;
