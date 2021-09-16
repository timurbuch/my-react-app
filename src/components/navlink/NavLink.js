import "./NavLink.css";

function NavLink(props) {
  return (
    <button
      className="navLink"
      aria-label={props.ariaLabel}
      onClick={props.onClick}
    >
      <img className={`navIcon ${props.className}`} src={props.src} alt="" />
    </button>
  );
}

export default NavLink;
