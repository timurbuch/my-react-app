import "./App.css";
import { useState } from "react";
import Header from "../header/Header.js";
import Footer from "../footer/Footer";
import Main from "../main/Main";

function App() {
  const [buttonState, setButtonState] = useState("All");
  const buttonStateHandler = (input) => {
    setButtonState(input);
  };

  return (
    <div className="App">
      <Header buttonState={buttonState} />
      <Main buttonState={buttonState} />
      <Footer
        buttonState={buttonState}
        buttonStateHandler={buttonStateHandler}
      />
    </div>
  );
}

export default App;
