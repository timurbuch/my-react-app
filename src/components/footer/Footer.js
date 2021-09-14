import "./Footer.css";
import "../navlink/NavLink";
import NavLink from "../navlink/NavLink";
import gIcon from "../../assets/alpha-g-circle-outline.svg";
import hIcon from "../../assets/alpha-h-circle-outline.svg";
import rIcon from "../../assets/alpha-r-circle-outline.svg";
import sIcon from "../../assets/alpha-s-circle-outline.svg";

function Footer() {
  return (
    <footer>
      <NavLink src={gIcon} ariaLabel="Gryffindor" />
      <NavLink src={hIcon} ariaLabel="Hufflepuff" />
      <NavLink src={rIcon} ariaLabel="Ravenclaw" />
      <NavLink src={sIcon} ariaLabel="Slytherin" />
    </footer>
  );
}
export default Footer;
