import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/Home.css";
import leafL from "../extra/leafL.png";
import leafR from "../extra/leafR.png";
import html5 from "../extra/html-5.png";
import css from "../extra/css.png";
import js from "../extra/javascript.png";
import react from "../extra/atomic.png";
import node from "../extra/node.png";
import redux from "../extra/redux.png";
import jest from "../extra/jest.webp";
import responsive from "../extra/website.png";
import hooks from "../extra/hook.png";
import api from "../extra/api.png";
import github from "../extra/github.png";
import git from "../extra/git.png";
import figma from "../extra/figma.png";
import gmail from "../extra/email.png";
import linkedIn from "../extra/linkedin.png";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="fullpage">
      <div className="top">
        <img src={leafL} alt="leaf" className="leaf" />
        <div className="title">
          <h1 id="nome">Amanda Rodrigues</h1>
          <h3 id="descricao">desenvolvedora front-end</h3>
        </div>
        <img src={leafR} alt="leaf" className="leaf" />
      </div>
      <div className="mainpage">
        <div>
      <div className="btn-case">
        <button className="left-btn btn" onClick={() => navigate("/projects")}>
          projetos
        </button>
        <button onClick={() => navigate("/cases")} className="btn">
          cases
        </button>
      </div>
        <div className="contato" id="contato">
          <h2>contato</h2>
          <div className="c-info">
            <img src={gmail} alt="gmail" className="c-logos" />
            <a 
            href="https://www.linkedin.com/in/amandarosr/" 
            target="_blank"
            rel="noreferrer"
            >
              <img src={linkedIn} alt="linkedin" className="c-logos linked" />
            </a>
            <a 
            href="https://github.com/amandarosr" 
            target="_blank"
            rel="noreferrer"
            >
              <img src={git} alt="git" className="c-logos" />
            </a>
          </div>
          <p id="email">rodriguesamanda49@gmail.com</p>
        </div>
        </div>
        <div className="habil">
          <h2>conhecimentos</h2>
          <ul className="habil-list">
            <li>
              <img src={html5} alt="html" id="html" className="logos" />
              <label className="tooltip" for="html">
                HTML5
              </label>
            </li>
            <li>
              <img src={css} alt="css" id="css" className="logos" />
              <label className="tooltip" for="css">
                CSS
              </label>
            </li>
            <li>
              <img src={js} alt="js" id="js" className="logos" />
              <label className="tooltip" for="js">
                JavaScript
              </label>
            </li>
            <li>
              <img src={react} alt="react" id="react" className="logos" />
              <label className="tooltip" for="react">
                React.js
              </label>
            </li>
            <li>
              <img src={node} alt="node" id="node" className="logos" />
              <label className="tooltip" for="node">
                Node.js
              </label>
            </li>
            <li>
              <img src={redux} alt="redux" className="logos redux" />
              <label className="tooltip" for="redux">
                Redux
              </label>
            </li>
            <li>
              <img src={jest} alt="jest" id="jest" className="logos" />
              <label className="tooltip" for="jest">
                Jest
              </label>
            </li>
            <li>
              <img src={github} alt="github" id="github" className="logos" />
              <label className="tooltip" for="github">
                Github
              </label>
            </li>
            <li>
              <img src={figma} alt="figma" id="figma" className="logos" />
              <label className="tooltip" for="api">
                Figma
              </label>
            </li>
            <li>
              <img src={hooks} alt="hooks" id="hooks" className="logos" />
              <label className="tooltip" for="hooks">
                React Hooks
              </label>
            </li>
            <li>
              <img src={api} alt="api" id="api" className="logos" />
              <label className="tooltip" for="api">
                APIs
              </label>
            </li>
            <li>
              <img src={responsive} alt="resp" id="resp" className="logos" />
              <label className="tooltip" for="resp">
                Responsividade
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
