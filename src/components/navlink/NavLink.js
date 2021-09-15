import "./NavLink.css";

function NavLink(props) {
  return (
    <button className="navLink" aria-label={props.ariaLabel}>
      <img className="navIcon" src={props.src} alt="" />
    </button>
  );
}

export default NavLink;
