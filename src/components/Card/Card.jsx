import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({
  name,
  species,
  gender,
  image,
  onClose,
  detailId,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <button onClick={onClose}>X</button>
      </div>
      <Link to={`/detail/${detailId}`}>
        <div className={styles.name}>
          <h2>{name}</h2>
        </div>
      </Link>
      <img className={styles.img} src={image} alt="" />
      <div className={styles.info}>
        <h4>{species}</h4>
        <h4>{gender}</h4>
      </div>
    </div>
  );
}
