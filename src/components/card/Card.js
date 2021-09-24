import { useState } from "react";
import "./Card.css";
import EmojiBar from "../emojiBar/EmojiBar";

function Card(props) {
  const [showDetails, setShowDetails] = useState(false);
  const [emoji, setEmoji] = useState("");

  const handleEmojiCLick = (input) => {
    input !== emoji ? setEmoji(input) : setEmoji("");
  };

  return (
    <div className="card" data-testid="card">
      <EmojiBar handleEmojiCLick={handleEmojiCLick} />
      <h2>
        {emoji}
        {props.name}
        {props.favorites.includes(props.name) ? "⭐️" : ""}
      </h2>
      <h4>{props.house}</h4>
      <section className="flex-wrapper">
        <img src={props.img} alt={props.name} />
        <div className="text-wrapper">
          {showDetails && (
            <ul>
              <li>Gender: {props.gender}</li>
              <li>Date of Birth: {props.dateOfBirth}</li>
              <li>Patronus: {props.patronus}</li>
            </ul>
          )}
          <button
            onClick={() => {
              setShowDetails(!showDetails);
            }}
            className="showButton"
            data-testid="detailButton"
          >
            Show {!showDetails ? "more" : "less"}
          </button>
          <button
            className="favoriteButton"
            onClick={() => props.favoriteHandler(props.name)}
          >
            {props.favorites.includes(props.name) ? "Unfavor" : "Favor"}
          </button>
        </div>
      </section>
    </div>
  );
}
export default Card;
