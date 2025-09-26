import React from "react";
import "../style/Skills.css";
import Tooltip from "@mui/material/Tooltip";
// import marker from "../style/marker.png";
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
import figma from "../extra/figma.png";
import scrum from "../extra/scrum.png";
import rtl from "../extra/rtl.png";
import context from "../extra/context.png";
import next from "../extra/next.png";

export default function Skills() {
  return (
    <div className="habil" id="skills">
      <h2 className="skills-title subtitle">conhecimentos</h2>
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
          <Tooltip title="Next.js">
            <img src={next} alt="next" id="next" className="logos" />
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
          <Tooltip title="Scrum">
            <img src={scrum} alt="scrum" id="scrum" className="logos" />
          </Tooltip>
        </li>
        <li>
          <Tooltip title="Jest">
            <img src={jest} alt="jest" id="jest" className="logos" />
          </Tooltip>
        </li>
        <li>
          <Tooltip title="React Testing Library">
            <img src={rtl} alt="rtl" id="rtl" className="logos" />
          </Tooltip>
        </li>
        <li>
          <Tooltip title="React Hooks">
            <img src={hooks} alt="hooks" id="hooks" className="logos" />
          </Tooltip>
        </li>
        <li>
          <Tooltip title="Context API">
            <img src={context} alt="context" id="context" className="logos" />
          </Tooltip>
        </li>
        <li>
          <Tooltip title="REST APIs">
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
  );
}
