import React from "react";
import { useCopyToClipboard } from "@uidotdev/usehooks";
import "../style/Contact.css";
import Swal from "sweetalert2";
import git from "../extra/git.png";
import gmail from "../extra/email.png";
import linkedIn from "../extra/linkedin.png";

export default function Contact() {
  const [, copyToClipboard] = useCopyToClipboard();
  const copyEmail = () => {
    copyToClipboard("rodriguesamanda49@gmail.com");
    Swal.fire({
      position: "top",
      icon: "success",
      title: "E-mail copiado",
      timer: 1500,
      showConfirmButton: false,
    });
  };

  return (
    <div className="contato" id="contato">
      <div className="c-info">
        <button id="emailBtn" onClick={copyEmail}>
          <img src={gmail} alt="gmail" className="c-logos" />
        </button>
        <a
          href="https://www.linkedin.com/in/amandarosr/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedIn} alt="linkedin" className="c-logos linked" />
        </a>
        <a
          href="https://github.com/amandarosr"
          target="_blank"
          rel="noreferrer"
        >
          <img src={git} alt="git" className="c-logos" />
        </a>
      </div>
    </div>
  );
}
