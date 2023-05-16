import { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1 id="nome">Amanda Rodrigues</h1>
        <img id="foto" src="prof pic.jpg" alt="foto da amanda sorrindo" width="200px" />
        <p id="descricao">Eu sou uma estudante de <strong>Desenvolvimento Web na Trybe</strong> com histórico profissional em tradução,
          legendagem e ensino
          de idiomas. Eu sou brasileira e morei em Porto Alegre por toda a minha vida, mas já tive incríveis experiências
          de intercâmbio nas quais estudei na <em>Inglaterra, Estados Unidos e Itália</em>.</p>
        <h2 id="indice">Índice</h2>
        <ul>
          <li><a href="#foto">Foto</a></li>
          <li><a href="#descricao">Descrição</a></li>
          <li><a href="#habil">Habilidades</a></li>
          <li><a href="#blog">Blog Favorito</a></li>
        </ul>
        <h2 id="habil">Habilidades</h2>
        <ul>
          <li><strong>Inglês fluente</strong></li>
          <li>Italiano intermediário</li>
          <li><strong>Excelente escrita</strong></li>
          <li>Rápida aprendizagem</li>
          <li>Conhecimento de CAT Tools</li>
        </ul>
        <h2 id="blog">Blog favorito:</h2>
        <p><a href="https://booksandbao.com/" target="_blank" rel="noreferrer"><em>Books & Bao</em></a></p>
      </div>
    );
  }
}

export default App;
