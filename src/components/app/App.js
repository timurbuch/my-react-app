import "./App.css";
import { useState, useEffect } from "react";
import Header from "../header/Header.js";
import Footer from "../footer/Footer";
import Main from "../main/Main";

function App() {
  const [buttonState, setButtonState] = useState(() => {
    if (localStorage.getItem("storedHouse") === null) {
      return "All";
    } else {
      return JSON.parse(localStorage.getItem("storedHouse"));
    }
  });

  const [favorites, setFavorites] = useState(() => {
    if (localStorage.getItem("storedFavorites") === null) {
      return [];
    } else {
      return JSON.parse(localStorage.getItem("storedFavorites"));
    }
  });
  const [customCharacters, setCustomCharacters] = useState([]);

  useEffect(() => {
    localStorage.setItem("storedFavorites", JSON.stringify(favorites));
  }, [favorites]);

  const favoriteHandler = (characterName) => {
    if (favorites.find((favorite) => favorite === characterName) == null) {
      setFavorites((arr) => [...arr, characterName]);
    } else {
      setFavorites((arr) =>
        arr.filter((favorite) => favorite !== characterName)
      );
    }
  };

  const buttonStateHandler = (input) => {
    localStorage.setItem("storedHouse", JSON.stringify(input));
    setButtonState(input);
  };
  const inputHandler = (name, house, gender, dateOfBirth, patronus) => {
    setCustomCharacters([
      ...customCharacters,
      {
        name: name,
        house: house,
        gender: gender,
        dateOfBirth: dateOfBirth,
        patronus: patronus,
      },
    ]);
  };

  return (
    <div className="App">
      <Header buttonState={buttonState} />
      <Main
        buttonState={buttonState}
        favorites={favorites}
        favoriteHandler={favoriteHandler}
        customCharacters={customCharacters}
        onInput={inputHandler}
      />
      <Footer
        buttonState={buttonState}
        buttonStateHandler={buttonStateHandler}
      />
    </div>
  );
}

export default App;
