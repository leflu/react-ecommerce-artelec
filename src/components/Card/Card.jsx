import { AddToCart } from "../AddToCart/AddToCart";
import { Button } from "../Button/Button";
import styles from "./card.module.css";

export const Card = ({ name, description, price, image, stock }) => {
  return (
    <>
      <div className={styles.tarjetaContainer}>
        <div className={styles.tarjeta}>
          <h2>{name}</h2>
          <h4 className={styles.description}>{description}</h4>
          <p className={styles.value}>{price}</p>
          <img src={image} className={styles.productImage}></img>
          <AddToCart max={stock} />
          <Button textButton="Agregar al carrito" variant="stylesButton" />
        </div>
      </div>
    </>
  );
};
