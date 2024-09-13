import { Component } from 'react';
import './App.css';
import html5 from './extra/html-5.png';
import css from './extra/text.png';
import js from './extra/js.png';
import react from './extra/logo192.png';
import node from './extra/node.png';
import redux from './extra/redux.svg';
import jest from './extra/jest.svg';
import bootstrap from './extra/bootstrap.png';

class App extends Component {
  render() {
    return (
      <div className="fullpage">
        <div className="full-container">
          <div className="main-container">
            <div className="mainpage">
              <div className="title blocks">
                <h1 id="nome">Amanda Rodrigues</h1>
                <h3 id="descricao">Desenvolvedora Front-end</h3>
              </div>
              <div className="content1 blocks">
                <div className="habil">
                  {/* <h2>Habilidades</h2> */}
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
                      <img src={ react } alt="react" id="react" className="logos"/>
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
                      <img src={ bootstrap } alt="boot" id="boot" className="logos"/>
                      <label for="boot">Bootstrap</label>
                    </li>
                  </ul>
                </div>
            </div>
            </div>
            <aside>
              <div className="buttons blocks">
                <button className="case-btn">Cases</button>
                <button className="middle-btn">Habilidades</button>
                <button className="contact-btn">Contato</button>
              </div>
              {/* <div className="circle">
                <img src={ } alt="index"/>
              </div> */}
            </aside>
          </div>
          <div className="content2 blocks">
            <div className="cases">
              <h2>Cases</h2>
              <img alt="gif"></img>
            </div>
            <div className="contato">
              <div>LinkedIn</div>
              <div>E-mail</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
