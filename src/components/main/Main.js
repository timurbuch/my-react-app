import "./Main.css";

import Card from "../card/Card";
import { useState, useEffect } from "react";

function Main() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("http://hp-api.herokuapp.com/api/characters").then((res) =>
      res.json()).then(
        (result) => setCharacters(result))
         .catch((error) => {
          setError(error);
        }
      )
    );
  }, []);
    return (
      <main className="main">
        {error && <div>Error : {error.message}</div>}
        {characters ? (characters.map((character) => (
          <Card
            key={character.name}
            name={character.name}
            img={character.image}
            gender={character.gender}
            dateOfBirth={character.dateOfBirth}
            house={character.house}
          />
        ))) :
        (<div>Loading...</div>)
        }
      </main>
    );
  }
}

export default Main;
