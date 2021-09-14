import "./NavLink.css";

function NavLink(props) {
  return (
    <a>
      <img className="navIcon" src={props.src} />
    </a>
  );
}

export default NavLink;
