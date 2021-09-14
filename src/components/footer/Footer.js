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
      <NavLink src={gIcon} />
      <NavLink src={hIcon} />
      <NavLink src={rIcon} />
      <NavLink src={sIcon} />
    </footer>
  );
}
export default Footer;
