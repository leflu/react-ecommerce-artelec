import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import styles from "./card.module.css";

export const Card = ({ name, image, id, price }) => {
  return (
    <>
      <div className={styles.tarjeta}>
        <Link to={`/item/${id}`}>
          <img src={image} className={styles.productImage}></img>
        </Link>
        <h2 className={styles.nameProduct}>{name}</h2>
        <p className={styles.priceProduct}>{price}</p>
        <Link to={`/item/${id}`}>
          <Button textButton="DETALLES" variant="detailsButton" />
        </Link>
      </div>
    </>
  );
};
