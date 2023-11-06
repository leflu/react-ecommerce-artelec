import styles from "../../app.module.css";
import cartIcon from "../../assets/cart-icon.png";

export const CartWidget = ({ addToCart }) => {
  return (
    <div className={styles.cartContainer}>
      <img src={cartIcon} alt="Carrito de compras" className={styles.cart} />
      <h2>{addToCart}</h2>
    </div>
  );
};