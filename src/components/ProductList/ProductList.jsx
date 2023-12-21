import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../config/firebaseConfig";
import { Card } from "../Card/Card";
import styles from "./productlist.module.css";

export const ProductList = () => {
  const { category } = useParams();

  const [products, setProducts] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const getProductsDB = (category) => {
    const myProducts = category
      ? query(collection(db, "products"), where("category", "==", category))
      : query(collection(db, "products"));
    getDocs(myProducts).then((resp) => {
      if (resp.size === 0) {
        console.log("No hay productos en la base de datos");
      }
      const productList = resp.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productList);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    setIsLoading(true);
    getProductsDB(category);

    /* seedProducts(); */
  }, [category]);

  return (
    <>
      <div className={styles.tarjetasContainer}>
        {isLoading ? (
          <div className={styles.loadingContainer}>
            <h2 className={styles.loading}>Cargando los productos...</h2>{" "}
          </div>
        ) : (
          products.map((product) => <Card key={product.id} {...product} />)
        )}
      </div>
    </>
  );
};
