import { Component } from 'react';
import './App.css';
import logo from './extra/logo192.png'

class App extends Component {
  render() {
    return (
      <div className="fullpage">
        <div className="mainpage">
          <div className="title blocks">
            <h1 id="nome">Amanda Rodrigues</h1>
            <p id="descricao">[descrição]</p>
          </div>
          <div className="content blocks">
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
            <div className="estudos blocks">
              <h2>Estudos de caso</h2>
              <img alt="gif"></img>
              <img alt="gif"></img>
              <img alt="gif"></img>
              <img alt="gif"></img>
            </div>
            <div className="contato blocks">
            <div>LinkedIn</div>
            <div>E-mail</div>
            <div>Workana</div>
          </div>
          </div>
        </div>
        <aside>
          <div className="buttons blocks">

          </div>
          <div className="index blocks">
            <img src={ logo } alt="index"/>
          </div>
        </aside>
      </div>
    );
  }
}

export default App;
