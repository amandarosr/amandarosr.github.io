import React from "react";
import "../style/CasesProjects.css";
import fakeStore from "../extra/fake-store.png";
import pixelArt from "../extra/pixel-art.png";
import marker from "../style/marker.png";
import click from "../style/click.png";

export default function CasesProjects() {
  return (
    <div>
      <h2 id="cases">cases</h2>
      <div className="cases-div">
        <div className="siteInfo">
          <img src={fakeStore} alt="sitePrint" className="screenshot" />
          <a
            href="https://amandarosr.github.io/fake-store/#/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={click} alt="mouse-icon" className="click" />
            fake·store
          </a>
        </div>
        <div className="siteInfo">
          <img src={pixelArt} alt="sitePrint" className="screenshot" />
          <a
            href="https://amandarosr.github.io/pixels-art/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={click} alt="mouse-icon" className="click" />
            Pixel Art
          </a>
        </div>
      </div>
      <img src={marker} alt="divider" className="marker" />
      <h2 id="projects">projetos</h2>
      {/* <div className="cases-div">

      </div> */}
    </div>
  );
}
