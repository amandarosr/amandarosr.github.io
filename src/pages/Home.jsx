import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/Home.css";
import Contact from "../components/Contact";
import Skills from "../components/Skills";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="fullpage">
      <div className="mainpage-left">
        <div className="btn-case">
          <button
            className="left-btn btn"
            onClick={() => navigate("/projects")}
          >
            projetos
          </button>
          <button onClick={() => navigate("/cases")} className="btn">
            cases
          </button>
        </div>
        <div className="top">
          <div className="title">
            <h1 id="nome">Amanda Rodrigues</h1>
            <h3 id="descricao">desenvolvedora front-end</h3>
          </div>
        </div>
        <Contact />
      </div>
      <div className="mainpage-right">
        <Skills />
      </div>
    </div>
  );
}
