import styles from "./Detail.module.css";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function Detail(props) {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <div clasName={styles.container}>
      <Link to="/">
        <button>Go Back</button>
      </Link>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
      <h3>Status: {character.status}</h3>
      <h3>Specie: {character.species}</h3>
      <h3>Gender: {character.gender}</h3>
      <h3>Origin: {character.origin?.name}</h3>
    </div>
  );
}
