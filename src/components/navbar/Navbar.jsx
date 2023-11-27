import { Link } from "react-router-dom";
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
          <Link to="/">
            <button>INICIO</button>
          </Link>
          <Link to="/tienda">
            <button>TODO</button>
          </Link>
          <Link to="/category/electricidad">
            <button>ELECTRICIDAD</button>
          </Link>
          <Link to="/category/cables">
            <button>CABLES</button>
          </Link>
          <Link to="/category/accesorios">
            <button>ACCESORIOS</button>
          </Link>
        </nav>
        <CartWidget addToCart="20" />
      </div>
    </>
  );
};
