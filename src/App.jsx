import styles from "./app.module.css";
import { CartWidget } from "./components/CartWidget/CartWidget";
import { Greetings } from "./components/Greetings/Greetings";
import { Navbar } from "./components/navbar/navbar";

function App() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <h1>ARTELEC</h1>
          <p>Artículos Eléctricos</p>
        </div>
        <Navbar />
        <CartWidget addToCart="20" />
      </div>
      <Greetings greeting="Bienvenido a Artelec" />
    </>
  );
}

export default App;
