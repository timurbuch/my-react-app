import { useState } from "react";
import "./Card.css";
function Card(props) {
  const [showDetails, setShowDetails] = useState(false);
  const [emoji, setEmoji] = useState("");

  const handleEmojiCLick = (input) => {
    input !== emoji ? setEmoji(input) : setEmoji("");
  };

  return (
    <div className="card">
      <div className="emojiBar">
        <button className="emojiButton" onClick={() => handleEmojiCLick("🤓")}>
          🤓
        </button>
        <button className="emojiButton" onClick={() => handleEmojiCLick("😱")}>
          😱
        </button>
        <button className="emojiButton" onClick={() => handleEmojiCLick("🤡")}>
          🤡
        </button>
        <button className="emojiButton" onClick={() => handleEmojiCLick("💀")}>
          💀
        </button>
        <button className="emojiButton" onClick={() => handleEmojiCLick("🧙🏾‍♂️")}>
          🧙🏾‍♂️
        </button>
      </div>
      <h2>
        {emoji}
        {props.name}
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
          >
            Show {!showDetails ? "more" : "less"}
          </button>
        </div>
      </section>
    </div>
  );
}
export default Card;
