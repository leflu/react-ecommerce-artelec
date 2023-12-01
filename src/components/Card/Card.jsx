import { Link } from "react-router-dom";
import { AddToCart } from "../AddToCart/AddToCart";
import { Button } from "../Button/Button";
import styles from "./card.module.css";

export const Card = ({ name, price, image, id }) => {
  return (
    <>
      <div className={styles.tarjetaContainer}>
        <div className={styles.tarjeta}>
          <h2>{name}</h2>
          <p className={styles.value}>{price}</p>
          <img src={image} className={styles.productImage}></img>
          <Link to={`/item/${id}`}>
            <Button textButton="Ver Detalles" variant="stylesButton" />
          </Link>
        </div>
      </div>
    </>
  );
};
