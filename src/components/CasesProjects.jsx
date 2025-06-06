import React from "react";
import fakeStore from "../extra/fake-store.png";
import pixelArt from "../extra/pixel-art.png";

export default function CasesProjects() {
  return (
    <div>
      <div className="cases-div">
        <h2 id="cases">Cases</h2>
        <div>
          <img src={fakeStore} alt="sitePrint" />
          <p></p>
        </div>
        <div>
          <img src={pixelArt} alt="sitePrint" />
          <p></p>
        </div>
      </div>
      <div>
        <h2 id="projetos">Projetos</h2>
      </div>
    </div>
  );
}
