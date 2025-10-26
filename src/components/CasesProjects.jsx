import React from "react";
import "../style/CasesProjects.css";
import fakeStore from "../extra/fake-store.png";
import pixelArt from "../extra/pixel-art.png";
import recipes from "../extra/recipes.png";
import ewallet from "../extra/ewallet.png";
import trivia from "../extra/trivia-master.png";
import click from "../style/click.png";
import petPC from "../extra/pet-pc.png";

export default function CasesProjects() {
  return (
    <div className="habil">
      <h2 id="cases" className="subtitle">cases</h2>
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
        <div className="siteInfo">
          <img src={recipes} alt="sitePrint" className="screenshot" />
          <a
            href="https://amandarosr.github.io/recipes-app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={click} alt="mouse-icon" className="click" />
            Recipes App
          </a>
        </div>
        <div className="siteInfo">
          <img src={petPC} alt="sitePrint" className="screenshot" />
          <a
            href="https://amandarosr.github.io/pet-pc/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={click} alt="mouse-icon" className="click" />
            Pet PC
          </a>
        </div>
        <div className="siteInfo">
          <img src={trivia} alt="sitePrint" className="screenshot" />
          <a
            href="https://amandarosr.github.io/trivia-master/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={click} alt="mouse-icon" className="click" />
            Trivia Master
          </a>
        </div>
        <div className="siteInfo">
          <img src={ewallet} alt="sitePrint" className="screenshot" />
          <a
            href="https://amandarosr.github.io/e-wallet/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={click} alt="mouse-icon" className="click" />
            e-Wallet
          </a>
        </div>
      </div>
      <h2 id="projects" className="subtitle">projetos</h2>
      {/* <div className="cases-div">

      </div> */}
    </div>
  );
}
