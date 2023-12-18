import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import { CartWidget } from "../../components";
export const Navbar = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <h1>ARTELEC</h1>
          <p>Artículos Eléctricos</p>
        </div>
        <nav className={styles.navbar}>
          <div className={styles.navbarLinks}>
            <Link to="/">
              <button className={styles.navbarButton}>INICIO</button>
            </Link>
            <Link to="/tienda">
              <button className={styles.navbarButton}>TODO</button>
            </Link>
            <Link to="/category/electricidad">
              <button className={styles.navbarButton}>ELECTRICIDAD</button>
            </Link>
            <Link to="/category/cables">
              <button className={styles.navbarButton}>CABLES</button>
            </Link>
            <Link to="/category/accesorios">
              <button className={styles.navbarButton}>ACCESORIOS</button>
            </Link>
          </div>
        </nav>
        <div className={styles.cartWidget}>
          <CartWidget addToCart="0" className={styles.cart} />
        </div>
      </div>
    </>
  );
};
