import "./Main.css";

import Card from "../card/Card";
import { useState, useEffect } from "react";
import InputForm from "../inputform/InputForm";

function Main(props) {
  const [error, setError] = useState(null);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("http://hp-api.herokuapp.com/api/characters")
      .then((res) => res.json())
      .then(
        (result) => setCharacters(result),
        (error) => setError(error)
      );
  }, []);
  return (
    <main
      className={`main ${
        props.buttonState === "Gryffindor"
          ? "main--gryffindor"
          : props.buttonState === "Hufflepuff"
          ? "main--hufflepuff"
          : props.buttonState === "Ravenclaw"
          ? "main--ravenclaw"
          : props.buttonState === "Slytherin"
          ? "main--slytherin"
          : ""
      } `}
    >
      {error && <div>Error : {error.message}</div>}
      {characters ? (
        characters
          .filter(
            (character) =>
              character.house === props.buttonState ||
              props.buttonState === "All"
          )
          .map((character) => (
            <Card
              key={character.name}
              name={character.name}
              img={character.image}
              gender={character.gender}
              dateOfBirth={character.dateOfBirth}
              house={character.house}
              patronus={character.patronus}
              favorites={props.favorites}
              favoriteHandler={props.favoriteHandler}
            />
          ))
      ) : (
        <div>Loading...</div>
      )}
      {props.customCharacters ? (
        props.customCharacters
          .filter(
            (character) =>
              character.house === props.buttonState ||
              props.buttonState === "All"
          )
          .map((character) => (
            <Card
              key={character.name}
              name={character.name}
              img="https://desenio.de/bilder/artiklar/zoom/8684_2.jpg?imgwidth=435&qt="
              gender={character.gender}
              dateOfBirth={character.dateOfBirth}
              house={character.house}
              patronus={character.patronus}
              favorites={props.favorites}
              favoriteHandler={props.favoriteHandler}
            />
          ))
      ) : (
        <div>Loading...</div>
      )}
      <InputForm onInput={props.onInput} />
    </main>
  );
}

export default Main;
