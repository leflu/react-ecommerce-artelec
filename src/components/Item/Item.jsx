import { useContext } from "react";
import { AddToCart } from "../AddToCart/AddToCart";
import styles from "./item.module.css";
import { CartContext } from "../../context/CartContext";
import { useCount } from "../../hooks/useCount";

export const Item = ({ name, image, description, price, stock, id }) => {
  const {addItem} = useContext(CartContext);
  const {count} = useCount(0,stock)
  return (
    <>
      <div className={styles.itemContainer}>
        <img src={image} alt={name} className={styles.itemImage} />
        <div className={styles.itemContent}>
          <h2>{name}</h2>
          <h3>{price}</h3>
          <h4>Disponible: {stock}</h4>
          <p>{description}</p>
          <AddToCart stock={stock} />
        </div>
      </div>
    </>
  );
};
