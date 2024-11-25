import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/Home.css";
import { useCopyToClipboard } from "@uidotdev/usehooks";
import Swal from "sweetalert2";
import Tooltip from "@mui/material/Tooltip";
// import leafL from "../extra/leafL.png";
// import leafR from "../extra/leafR.png";
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
  const [, copyToClipboard] = useCopyToClipboard();
  // const hasCopiedText = Boolean(copiedText);
  const copyEmail = () => {
    copyToClipboard("rodriguesamanda49@gmail.com");
    Swal.fire({
      position: "top",
      icon: "success",
      title: "E-mail copiado",
      timer: 1500,
      showConfirmButton: false,
    });
  };

  return (
    <div className="fullpage">
      <div className="top">
        <div className="title">
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
          <div className="contato" id="contato">
            <h2>contato</h2>
            <p className="mouseOver">
              (clique no e-mail para copiar o endereço)
            </p>
            <div className="c-info">
              <button id="emailBtn" onClick={copyEmail}>
                <img src={gmail} alt="gmail" className="c-logos" />
              </button>
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
            {/* <p id="email">rodriguesamanda49@gmail.com</p> */}
          </div>
        </div>
        <div className="habil">
          <h2>conhecimentos</h2>
          <p className="mouseOver">(passe o mouse sobre a imagem)</p>
          <ul className="habil-list">
            <li>
              <Tooltip title="HTML5">
                <img src={html5} alt="html" id="html" className="logos" />
              </Tooltip>
            </li>
            <li>
              <Tooltip title="CSS">
                <img src={css} alt="css" id="css" className="logos" />
              </Tooltip>
            </li>
            <li>
              <Tooltip title="JavaScript">
                <img src={js} alt="js" id="js" className="logos" />
              </Tooltip>
            </li>
            <li>
              <Tooltip title="React">
                <img src={react} alt="react" id="react" className="logos" />
              </Tooltip>
            </li>
            <li>
              <Tooltip title="Node.js">
                <img src={node} alt="node" id="node" className="logos" />
              </Tooltip>
            </li>
            <li>
              <Tooltip title="Redux">
                <img src={redux} alt="redux" className="logos redux" />
              </Tooltip>
            </li>
            <li>
              <Tooltip title="Jest">
                <img src={jest} alt="jest" id="jest" className="logos" />
              </Tooltip>
            </li>
            <li>
              <Tooltip title="GitHub">
                <img src={github} alt="github" id="github" className="logos" />
              </Tooltip>
            </li>
            <li>
              <Tooltip title="Figma">
                <img src={figma} alt="figma" id="figma" className="logos" />
              </Tooltip>
            </li>
            <li>
              <Tooltip title="React Hooks">
                <img src={hooks} alt="hooks" id="hooks" className="logos" />
              </Tooltip>
            </li>
            <li>
              <Tooltip title="APIs">
                <img src={api} alt="api" id="api" className="logos" />
              </Tooltip>
            </li>
            <li>
              <Tooltip title="Web Design Responsivo">
                <img src={responsive} alt="resp" id="resp" className="logos" />
              </Tooltip>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
