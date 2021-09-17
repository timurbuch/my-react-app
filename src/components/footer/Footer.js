import "./Footer.css";
import "../navlink/NavLink";
import NavLink from "../navlink/NavLink";
import gIcon from "../../assets/alpha-g-circle-outline.svg";
import hIcon from "../../assets/alpha-h-circle-outline.svg";
import rIcon from "../../assets/alpha-r-circle-outline.svg";
import sIcon from "../../assets/alpha-s-circle-outline.svg";
import nIcon from "../../assets/alpha-n-circle-outline.svg";

function Footer(props) {
  const buttonStateHandler = props.buttonStateHandler;

  return (
    <footer>
      <NavLink
        src={gIcon}
        ariaLabel="Gryffindor"
        className={
          props.buttonState === "Gryffindor"
            ? "FooterButtonActive--Gryffindor"
            : ""
        }
        onClick={() => buttonStateHandler("Gryffindor")}
      />
      <NavLink
        src={hIcon}
        ariaLabel="Hufflepuff"
        className={
          props.buttonState === "Hufflepuff"
            ? "FooterButtonActive--Hufflepuff"
            : ""
        }
        onClick={() => buttonStateHandler("Hufflepuff")}
      />
      <NavLink
        src={rIcon}
        ariaLabel="Ravenclaw"
        className={
          props.buttonState === "Ravenclaw"
            ? "FooterButtonActive--Ravenclaw"
            : ""
        }
        onClick={() => buttonStateHandler("Ravenclaw")}
      />
      <NavLink
        src={sIcon}
        ariaLabel="Slytherin"
        className={
          props.buttonState === "Slytherin"
            ? "FooterButtonActive--Slytherin"
            : ""
        }
        onClick={() => buttonStateHandler("Slytherin")}
      />
      <NavLink
        src={nIcon}
        ariaLabel="Neutral"
        className={
          props.buttonState === "" ? "FooterButtonActive--Neutral" : ""
        }
        onClick={() => buttonStateHandler("")}
      />
    </footer>
  );
}
export default Footer;
