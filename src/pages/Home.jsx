import React from "react";
import "../style/Home.css";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import CasesProjects from "../components/CasesProjects";

export default function Home() {
  return (
    <div className="fullpage">
      <Contact />
      <div className="mainpage-top">
        <div className="title">
          <h1 id="nome">Amanda Rodrigues</h1>
          <h3 id="job">desenvolvedora front-end</h3>
        </div>
      </div>
      <div className="btn-div">
        <a href="#skills">CONHECIMENTOS</a>
        <a href="#cases">CASES</a>
      </div>
      <div className="mainpage-bottom">
        <Skills />
        <CasesProjects />
      </div>
      <footer />
    </div>
  );
}
