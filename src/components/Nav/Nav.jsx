import React from "react";
import styles from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <div className={styles.container}>
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <SearchBar onSearch={props.onSearch} />
    </div>
  );
}
