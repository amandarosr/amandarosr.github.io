import React from "react";
import "../style/Home.css";
import Contact from "../components/Contact";
import Skills from "../components/Skills";

export default function Home() {
  
  return (
    <div className="fullpage">
      <div className="mainpage-top">
        <div className="top">
          <div className="title">
            <h1 id="nome">Amanda Rodrigues</h1>
            <h3 id="descricao">desenvolvedora front-end</h3>
          </div>
        </div>
        <Contact />
      </div>
      <div className="mainpage-bottom">
        <Skills />
      </div>
    </div>
  );
}
