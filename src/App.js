import { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1 id="nome">Amanda Rodrigues</h1>
        <img id="foto" src="../prof pic.jpg" alt="amanda sorrindo" width="200px" />
        <p id="descricao">[descrição]</p>
        <h2 id="indice">Índice</h2>
        <ul>
          <li><a href="#foto">Foto</a></li>
          <li><a href="#descricao">Descrição</a></li>
          <li><a href="#habil">Habilidades</a></li>
          <li><a href="#blog">Blog Favorito</a></li>
        </ul>
        <h2 id="habil">Habilidades</h2>
        <ul>
          <li><strong>A</strong></li>
          <li>B</li>
          <li><strong>C</strong></li>
          <li>E</li>
          <li>F</li>
        </ul>
        <h2 id="blog">Blog favorito:</h2>
        <p><a href="https://booksandbao.com/" target="_blank" rel="noreferrer"><em>Books & Bao</em></a></p>
      </div>
    );
  }
}

export default App;
