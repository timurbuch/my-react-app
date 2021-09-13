import "./Card.css";
import img from "../../assets/placeholder.jpg";
function Card() {
  const name = "Hermione Granger";
  return (
    <div className="card">
      <h3>{name}</h3>
      <section className="flex-wrapper">
        <img src={img} />
        <ul>
          <li>Placeholder</li>
          <li>Placeholder</li>
          <li>Placeholder</li>
        </ul>
      </section>
    </div>
  );
}
export default Card;
