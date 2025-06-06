import React from "react";
import "../style/Home.css";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import CasesProjects from "../components/CasesProjects";

export default function Home() {
  return (
    <div className="fullpage">
      <header>
        <h3 id="descricao">desenvolvedora front-end</h3>
        <Contact />
      </header>
      <div className="mainpage-top">
        <div className="title">
          <h1 id="nome">Amanda Rodrigues.</h1>
        </div>
      </div>
      <div className="btn-div">
        <a href="#skills">conhecimentos</a>
        <a href="#cases">cases</a>
        <a href="#projects">projetos</a>
      </div>
      <div className="mainpage-bottom">
        <Skills />
        <CasesProjects />
      </div>
    </div>
  );
}
