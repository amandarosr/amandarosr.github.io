import React, { Component } from 'react'
import html5 from '../extra/html-5.png';
import css from '../extra/text.png';
import js from '../extra/js.png';
import react from '../extra/logo192.png';
import node from '../extra/node.png';
import redux from '../extra/redux.svg';
import jest from '../extra/jest.svg';
import responsive from '../extra/bootstrap.png';

export default class Home extends Component {
  render() {
    return (
        <div>
          <div>
          <div className="title">
            <h1 id="nome">Amanda Rodrigues</h1>
            <h3 id="descricao">Desenvolvedora Front-end</h3>
          </div>
          <div className="content1">
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
                  <img src={ responsive } alt="resp" id="resp" className="logos"/>
                  <label for="resp">Web Design Responsivo</label>
                </li>
              </ul>
              <div className="cases">
                <h2>Cases</h2>
                <img alt="gif"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
