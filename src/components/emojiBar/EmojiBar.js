import "./EmojiBar.css";

function EmojiBar(props) {
  const handleEmojiCLick = props.handleEmojiCLick;
  return (
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
  );
}
export default EmojiBar;
