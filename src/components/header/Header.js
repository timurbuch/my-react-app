import "./Header.css";

function Header({ buttonState }) {
  return (
    <header>
      <h1 className="title">
        {buttonState === "All"
          ? "Harry Potter Collectible Cards"
          : buttonState === ""
          ? "Neutral"
          : buttonState}
      </h1>
    </header>
  );
}

export default Header;
