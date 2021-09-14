import "./NavLink.css";

function NavLink(props) {
  return (
    <button className="navLink" ariaLabel={props.ariaLabel}>
      <img className="navIcon" src={props.src} />
    </button>
  );
}

export default NavLink;
