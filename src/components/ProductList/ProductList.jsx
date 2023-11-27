import { useEffect, useState } from "react";
import { getProducts } from "../../productsMock";
import styles from "./productlist.module.css";
import { Card } from "../Card/Card";

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getProducts()
      .then((resp) => {
        setIsLoading(!isLoading);
        setProducts(resp);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {isLoading ? (
        <h2 className={styles.loading}>Cargando los productos...</h2>
      ) : (
        products.map((product) => <Card key={product.id} {...product} />)
      )}
    </>
  );
};
