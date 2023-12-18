import { AddToCart } from "../AddToCart/AddToCart";
import { Button } from "../Button/Button";
import styles from "./item.module.css";

export const Item = ({ name, image, description, price, stock }) => {
  return (
    <>
      <div className={styles.itemContainer}>
        <img src={image} alt={name} className={styles.itemImage} />
        <div className={styles.itemContent}>
          <h2>{name}</h2>
          <h3>{price}</h3>
          <p>{description}</p>
          <AddToCart max={stock} />
          <Button textButton="Agregar al carrito" variant="stylesButton" />
        </div>
      </div>
    </>
  );
};
