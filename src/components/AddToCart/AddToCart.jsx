import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useCount } from "../../hooks/useCount";
import styles from "./addtocart.module.css";


export const AddToCart = ({ name, price, stock, id }) => {
  const { count, add, substract, reset } = useCount(0, stock);
  const {addItem} = useContext(CartContext);

  return (
    <>
      <h3 className={styles.quantity}>Cantidad - {count}</h3>
      <div>
        <button className={styles.addToCartButton} onClick={add}>
          +
        </button>
        <button className={styles.addToCartButton} onClick={substract}>
          -
        </button>
        <button className={styles.addToCartButton} onClick={reset}>
          🗑️
        </button>
        <button className={styles.detailsButton} onClick={() => addItem({id, name, price}, count)}>AGREGAR AL CARRO</button>
      </div>
    </>
  );
};
