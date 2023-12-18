import { useEffect, useState } from "react";
import { getProducts } from "../../productsMock";
import styles from "./productlist.module.css";
import { Card } from "../Card/Card";
import { useParams } from "react-router-dom";

export const ProductList = () => {
  const { category } = useParams();

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    getProducts()
      .then((resp) => {
        if (category) {
          const productsFilter = resp.filter(
            (product) => product.category === category
          );

          if (productsFilter.length > 0) {
            setProducts(productsFilter);
          } else {
            setProducts(resp);
          }
        } else {
          setProducts(resp);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });
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
