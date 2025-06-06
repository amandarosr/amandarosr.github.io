import React from "react";
import "../style/CasesProjects.css";
import fakeStore from "../extra/fake-store.png";
import pixelArt from "../extra/pixel-art.png";

export default function CasesProjects() {
  return (
    <div>
      <h2 id="cases">cases e projetos</h2>
      <div className="cases-div">
        <div className="siteInfo">
          <img src={fakeStore} alt="sitePrint" />
          <a
            href="https://amandarosr.github.io/fake-store/#/"
            target="_blank"
            rel="noreferrer"
          >
            fake·store
          </a>
        </div>
        <div className="siteInfo">
          <img src={pixelArt} alt="sitePrint" />
          <a
            href="https://amandarosr.github.io/pixels-art/"
            target="_blank"
            rel="noreferrer"
          >
            Pixel Art
          </a>
        </div>
      </div>
    </div>
  );
}
