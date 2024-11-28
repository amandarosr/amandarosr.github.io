import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/Home.css";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import star from "../extra/star.png"

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="fullpage">
      <div className="top">
        <div className="title">
        <div>
            <img src={star} alt="star" className="star starS" />
            <img src={star} alt="star" className="star" />
            <img src={star} alt="star" className="star starS" />
          </div>
          <h1 id="nome">Amanda Rodrigues</h1>
          <h3 id="descricao">desenvolvedora front-end</h3>
        </div>
      </div>
      <div className="mainpage">
        <div>
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
        </div>
        <Contact/>
        <Skills/>
      </div>
    </div>
  );
}
