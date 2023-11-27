import { useCount } from "../../hooks/useCount";
import styles from "./addtocart.module.css";

export const AddToCart = () => {
  const { count, add, substract, reset, max } = useCount();

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
      </div>
    </>
  );
};
