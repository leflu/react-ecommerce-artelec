import { NavLink } from "react-router-dom";
import styles from "../../app.module.css";
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
          <NavLink to="/">
            <button>INICIO</button>
          </NavLink>
          <NavLink to="/tienda">
            <button>TIENDA</button>
          </NavLink>
        </nav>
        <CartWidget addToCart="20" />
      </div>
    </>
  );
};
