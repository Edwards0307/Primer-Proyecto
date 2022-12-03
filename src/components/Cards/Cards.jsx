import Card from "../Card/Card";
import styles from "./Cards.module.css";

export default function Cards(props) {
  const { characters, onClose } = props;
  return (
    <div className={styles.containerWrapperList}>
      {characters.map(({ name, species, gender, image, id }) => {
        return (
          <div className={styles.wrapperList}>
            <Card
              detailId={id}
              name={name}
              species={species}
              gender={gender}
              image={image}
              onClose={() => onClose(id)}
            />
          </div>
        );
      })}
    </div>
  );
}
