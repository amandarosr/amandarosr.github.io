import { Component } from 'react';
import './App.css';
import logo from './extra/tag-black-shape.png'

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
                  <h2>Habilidades</h2>
                  <ul>
                    <li>A</li>
                    <li>B</li>
                    <li>C</li>
                    <li>E</li>
                    <li>F</li>
                  </ul>
                </div>
            </div>
            </div>
            <aside>
              <div className="buttons blocks">
                <button className="case-btn">Cases</button>
                <button className="contact-btn">Contato</button>
                <button>Currículo</button>
              </div>
              <div className="circle">
                <img src={ logo } alt="index"/>
              </div>
            </aside>
          </div>
          <div className="content2 blocks">
            <div className="cases">
              <h2>Estudos de caso</h2>
              <img alt="gif"></img>
            </div>
            <div className="contato">
              <div>LinkedIn</div>
              <div>E-mail</div>
              <div>Workana</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
