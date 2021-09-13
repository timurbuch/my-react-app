import "./Main.css";

import Card from "../card/Card";
import { useState, useEffect } from "react";

function Main() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("http://hp-api.herokuapp.com/api/characters").then((res) =>
      res.json().then(
        (result) => {
          setIsLoaded(true);
          setCharacters(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
    );
  }, []);
  if (error) {
    return <div>Error : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <main className="main">
        {characters.map((character) => (
          <Card
            name={character.name}
            img={character.image}
            gender={character.gender}
            dateOfBirth={character.dateOfBirth}
            house={character.house}
          />
        ))}
      </main>
    );
  }
}

export default Main;
