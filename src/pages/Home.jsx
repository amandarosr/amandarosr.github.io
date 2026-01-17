import React from "react";
import "../style/Home.css";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import CasesProjects from "../components/CasesProjects";
// import dashes from "../extra/dashes.png";

export default function Home() {
  return (
    <div className="fullpage">
      <Contact />
      <div className="mainpage-top">
        <div class="divider"></div>
        <div className="title">
          <h1 id="nome">Amanda Rodrigues</h1>
          <h3 id="job">desenvolvedora front-end</h3>
        </div>
        <div class="divider"></div>
      </div>
      <div className="btn-div">
        <h1 className="aster">*</h1>
        <a href="#skills">CONHECIMENTOS</a>
        <h1 className="aster">*</h1>
        <a href="#cases">CASES</a>
        <h1 className="aster">*</h1>
      </div>
      <div className="mainpage-bottom">
        <Skills />
        <div class="divider"></div>
        <CasesProjects />
      </div>
      <footer />
    </div>
  );
}
