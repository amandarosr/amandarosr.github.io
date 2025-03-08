import React from "react";
// import { useNavigate } from "react-router-dom";
import "../style/Home.css";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import Swal from "sweetalert2";

export default function Home() {
  // const navigate = useNavigate();

  const inDevelopmentAlert = () => {
    Swal.fire({
      position: "top",
      title: "Em desenvolvimento",
      icon: "warning",
      timer: 1500,
      showConfirmButton: false,
    });
  };

  return (
    <div className="fullpage">
      <div className="mainpage-top">
        <div className="btn-case">
          <button className="left-btn btn" onClick={inDevelopmentAlert}>
            projetos
          </button>
          <button onClick={inDevelopmentAlert} className="btn">
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
      <div className="mainpage-bottom">
        <Skills />
      </div>
    </div>
  );
}
