import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/Home.css";
import html5 from "../extra/html-5.png";
import css from "../extra/css.png";
import js from "../extra/javascript.png";
import react from "../extra/atomic.png";
import node from "../extra/node.png";
import redux from "../extra/redux.png";
import jest from "../extra/jester-hat.png";
import responsive from "../extra/website.png";
import Star from "../extra/star.png";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="fullpage">
      <div className="top">
        <div>
        <img src={Star} alt="star" id="star" />
        </div>
        <div className="title">
          <h1 id="nome">Amanda Rodrigues</h1>
          <h3 id="descricao">Desenvolvedora Front-End</h3>
        </div>
      </div>
      <div className="btn-case">
          <button className="left-btn" onClick={() => navigate("/projects")}>
            Projetos
          </button>
          <button onClick={() => navigate("/cases")}>Cases</button>
        </div>
      <div className="mainpage">
        <div className="habil">
          <ul className="habil-list">
            <li>
              <img src={html5} alt="html" id="html" className="logos" />
              <label for="html">HTML5</label>
            </li>
            <li>
              <img src={css} alt="css" id="css" className="logos" />
              <label for="css">CSS</label>
            </li>
            <li>
              <img src={js} alt="js" id="js" className="logos" />
              <label for="js">JavaScript</label>
            </li>
            <li>
              <img src={react} alt="react" id="react" className="logos" />
              <label for="react">React.js</label>
            </li>
            <li>
              <img src={node} alt="node" id="node" className="logos" />
              <label for="node">Node.js</label>
            </li>
            <li>
              <img src={redux} alt="redux" className="logos redux" />
              <label for="redux">Redux</label>
            </li>
            <li>
              <img src={jest} alt="jest" id="jest" className="logos" />
              <label for="jest">Jest</label>
            </li>
            <li>
              <img src={responsive} alt="resp" id="resp" className="logos" />
              <label for="resp">Responsividade</label>
            </li>
          </ul>
        </div>
        <div className="contato">Contato</div>
      </div>
    </div>
  );
}
