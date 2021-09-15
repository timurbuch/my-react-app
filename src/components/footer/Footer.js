import "./Footer.css";
import "../navlink/NavLink";
import { useState } from "react";
import NavLink from "../navlink/NavLink";
import gIcon from "../../assets/alpha-g-circle-outline.svg";
import hIcon from "../../assets/alpha-h-circle-outline.svg";
import rIcon from "../../assets/alpha-r-circle-outline.svg";
import sIcon from "../../assets/alpha-s-circle-outline.svg";

function Footer() {
  const [buttonState, setButtonState] = useState("");

  const buttonStateHandler = (input) => {
    setButtonState(input);
  };

  return (
    <footer>
      <NavLink
        src={gIcon}
        ariaLabel="Gryffindor"
        className={buttonState === "Gryffindor" ? "FooterButtonActive" : ""}
        onClick={() => buttonStateHandler("Gryffindor")}
      />
      <NavLink
        src={hIcon}
        ariaLabel="Hufflepuff"
        className={buttonState === "Hufflepuff" ? "FooterButtonActive" : ""}
        onClick={() => buttonStateHandler("Hufflepuff")}
      />
      <NavLink
        src={rIcon}
        ariaLabel="Ravenclaw"
        className={buttonState === "Ravenclaw" ? "FooterButtonActive" : ""}
        onClick={() => buttonStateHandler("Ravenclaw")}
      />
      <NavLink
        src={sIcon}
        ariaLabel="Slytherin"
        className={buttonState === "Slytherin" ? "FooterButtonActive" : ""}
        onClick={() => buttonStateHandler("Slytherin")}
      />
    </footer>
  );
}
export default Footer;
