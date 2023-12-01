import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../productsMock";
import { Item } from "../Item/Item";

export const ProductListDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    getProductById(id)
      .then((resp) => setItem(resp))
      .catch((error) => console.log(error));
  }, [item]);
  return <>{item && <Item {...item} />}</>;
};
