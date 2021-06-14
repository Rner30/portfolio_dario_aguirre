import Navbar from "./components/Navbar";
import SobreMi from "./components/SobreMi";
import Education from "./components/Education";
import Abilities from "./components/Abilities.jsx";
import Proyectos from "./components/Proyectos";
import Contactame from "./components/Contactame";
import { Fragment } from "react";
function App() {
  return (
    <Fragment>
      <Navbar/>
      <SobreMi/>
      <Education/>
      <Abilities/>
      <Proyectos/>
      <Contactame/>
    </Fragment>
    

  );
}

export default App;
