import { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="mainpage">
        <div className="title">
          <h1 id="nome">Amanda Rodrigues</h1>
          <p id="descricao">[descrição]</p>
        </div>
        <div className="index"></div>
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
        <div className="estudos">
          <h2>Estudos de caso</h2>
          <img alt="gif"></img>
          <img alt="gif"></img>
          <img alt="gif"></img>
          <img alt="gif"></img>
        </div>
        <div className="contato">
          <div>LinkedIn</div>
          <div>E-mail</div>
          <div>Workana</div>
        </div>
      </div>
    );
  }
}

export default App;
