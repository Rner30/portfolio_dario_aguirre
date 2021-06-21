import Navbar from "./components/Navbar";
import SobreMi from "./components/SobreMi";
import Education from "./components/Education";
import Abilities from "./components/Abilities.jsx";
import Proyectos from "./components/Proyectos";

import { Fragment } from "react";
function App() {
  return (
    <Fragment>
      <Navbar/>
      <SobreMi/>
      <Proyectos/>
      <Abilities/>
      <Education/>
    </Fragment>
    

  );
}

export default App;
