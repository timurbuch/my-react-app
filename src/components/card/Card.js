import "./Card.css";
function Card(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <section className="flex-wrapper">
        <img src={props.img} />
        <ul>
          <li>{props.gender}</li>
          <li>{props.dateOfBirth}</li>
          <li>{props.house}</li>
          <button>Show more</button>
        </ul>
      </section>
    </div>
  );
}
export default Card;
