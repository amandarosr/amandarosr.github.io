import React from "react";
import { useCopyToClipboard } from "@uidotdev/usehooks";
import "../style/Contact.css";
import Swal from "sweetalert2";
// import git from "../extra/git.png";
// import gmail from "../extra/email.png";
// import linkedIn from "../extra/linkedin.png";

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
    <div className="contato">
      <button id="emailBtn" onClick={copyEmail}>
        E-MAIL
      </button>
      <a
        href="https://www.linkedin.com/in/amandarosr/"
        target="_blank"
        rel="noreferrer"
      >
        LINKEDIN
      </a>
      <a href="https://github.com/amandarosr" target="_blank" rel="noreferrer">
        GITHUB
      </a>
    </div>
  );
}
