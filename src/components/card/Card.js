import "./Card.css";
function Card(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <section className="flex-wrapper">
        <img src={props.img} alt={props.name} />
        <div className="text-wrapper">
          <ul>
            <li>{props.gender}</li>
            <li>{props.dateOfBirth}</li>
            <li>{props.house}</li>
          </ul>
          <button>Show more</button>
        </div>
      </section>
    </div>
  );
}
export default Card;
