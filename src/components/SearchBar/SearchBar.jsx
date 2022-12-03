import styles from "./SearchBar.module.css";
import { useState } from "react";

export default function SearchBar(props) {
  const [character, setCharacter] = useState("");
  const handleChange = (event) => {
    const { value } = event.target;
    setCharacter(value);
  };
  return (
    <div className={styles.container}>
      <input type="search" name="search" character="" onChange={handleChange} />
      <button onClick={() => props.onSearch(character)}>Agregar</button>
    </div>
  );
}
