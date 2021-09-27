import "./EmojiBar.css";

function EmojiBar(props) {
  const handleEmojiClick = props.handleEmojiCLick;
  return (
    <div className="emojiBar">
      <button
        className="emojiButton"
        aria-label="Nerd Face Emoji"
        onClick={() => handleEmojiClick("🤓")}
      >
        🤓
      </button>
      <button
        className="emojiButton"
        aria-label="Face Screaming in Fear Emoji"
        onClick={() => handleEmojiClick("😱")}
      >
        😱
      </button>
      <button
        className="emojiButton"
        aria-label="Clown Face Emoji"
        onClick={() => handleEmojiClick("🤡")}
      >
        🤡
      </button>
      <button
        className="emojiButton"
        aria-label="Skull Emoji"
        onClick={() => handleEmojiClick("💀")}
      >
        💀
      </button>
      <button
        className="emojiButton"
        aria-label="Mage Emoji"
        onClick={() => handleEmojiClick("🧙‍♀️")}
      >
        🧙‍♀️
      </button>
    </div>
  );
}
export default EmojiBar;
