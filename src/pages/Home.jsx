import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../style/Home.css';
// import html5 from '../extra/html-5.png';
// import css from '../extra/text.png';
// import js from '../extra/js.png';
// import node from '../extra/node.png';
// import redux from '../extra/redux.svg';
// import jest from '../extra/jest.svg';
// import responsive from '../extra/bootstrap.png';
import Star from '../extra/star.png';

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="fullpage">
          <div className="mainpage">
            <div className="btn-case">
              <button
              className="left-btn"
              onClick={ () => navigate('/projects') }>
                Projetos
              </button>
              <img src={ Star } alt='star' className="left-btn" />
              <button
              onClick={ () => navigate('/cases') }>
                Cases
              </button>
            </div>
            <div className="title">
              <h1 id="nome">Amanda Rodrigues</h1>
              <h3 id="descricao">Desenvolvedora Front-End</h3>
            </div>
            <div className="btn-case">
              <button className="left-btn">Habilidades</button>
              <img src={ Star } alt='star' className="left-btn" />
              <button>
                Contato
              </button>
            {/* <div className="content1">
              <div className="habil">
                <ul className="habil-list">
                  <li>
                    <img src={ html5 } alt="html" id="html" className="logos"/>
                    <label for="html">HTML5</label>
                  </li>
                  <li>
                    <img src={ css } alt="css" id="css" className="logos"/>
                    <label for="css">CSS</label>
                  </li>
                  <li>
                    <img src={ js } alt="js" id="js" className="logos"/>
                    <label for="js">JavaScript</label>
                  </li>
                  <li>
                    <img alt="react" id="react" className="logos"/>
                    <label for="react">React.js</label>
                  </li>
                  <li>
                    <img src={ node } alt="node" id="node" className="logos"/>
                    <label for="node">Node.js</label>
                  </li>
                  <li>
                    <img src={ redux } alt="redux" id="redux" className="logos"/>
                    <label for="redux">Redux</label>
                  </li>
                  <li>
                    <img src={ jest } alt="jest" id="jest" className="logos"/>
                    <label for="jest">Jest</label>
                  </li>
                  <li>
                    <img src={ responsive } alt="resp" id="resp" className="logos"/>
                    <label for="resp">Web Design Responsivo</label>
                  </li>
                </ul>
              </div>
            </div> */}
            </div>
          </div>
        </div>
    )
  }
