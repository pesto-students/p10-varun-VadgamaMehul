import React from "react";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navebar from "./Componets/NavBar/Navebar";
import Contact from "./Pages/Contact/Contact";
import Skills from "./Pages/Skills/Skills";
import Project from "./Pages/Project/Project";
import Project1 from "./Pages/Project/Project1/Project1";
import Project2 from "./Pages/Project/Project2/Project2";
import Project3 from "./Pages/Project/Project3/Project3";
import "bootstrap/dist/css/bootstrap.min.css";
import NavScrollExample from "./Componets/NavBar/Nav";
import Cont from "./Pages/Contact/Cont";

function App() {
  return (
    <HashRouter>
      {/* <Navebar/> */}
      <NavScrollExample />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Skill" element={<Skills />} />
        <Route path="/Project">
          <Route index element={<Project />} />
          <Route path="Project1" element={<Project1 />} />
          <Route path="Project2" element={<Project2 />} />
          <Route path="Project3" element={<Project3 />} />
        </Route>
        {/* <Route path="/Contact" element={<Contact />} /> */}
        <Route path="/Contact" element={<Cont/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
