import { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1 id="nome">Amanda Rodrigues</h1>
        <p id="descricao">[descrição]</p>
        <div>
        <h2 id="habil">Habilidades</h2>
        <ul>
          <li><strong>A</strong></li>
          <li>B</li>
          <li><strong>C</strong></li>
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
        <footer>
          <div>LinkedIn</div>
          <div>E-mail</div>
          <div>Workana</div>
        </footer>
      </div>
    );
  }
}

export default App;
