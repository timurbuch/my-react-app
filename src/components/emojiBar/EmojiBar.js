import "./EmojiBar.css";

function EmojiBar(props) {
  const handleEmojiCLick = props.handleEmojiCLick;
  return (
    <div className="emojiBar">
      <button
        className="emojiButton"
        aria-label="Nerd Face Emoji"
        onClick={() => handleEmojiCLick("🤓")}
      >
        🤓
      </button>
      <button
        className="emojiButton"
        aria-label="Face Screaming in Fear Emoji"
        onClick={() => handleEmojiCLick("😱")}
      >
        😱
      </button>
      <button
        className="emojiButton"
        aria-label="Clown Face Emoji"
        onClick={() => handleEmojiCLick("🤡")}
      >
        🤡
      </button>
      <button
        className="emojiButton"
        aria-label="Skull Emoji"
        onClick={() => handleEmojiCLick("💀")}
      >
        💀
      </button>
      <button
        className="emojiButton"
        aria-label="Mage Emoji"
        onClick={() => handleEmojiCLick("🧙‍♀️")}
      >
        🧙‍♀️
      </button>
    </div>
  );
}
export default EmojiBar;
