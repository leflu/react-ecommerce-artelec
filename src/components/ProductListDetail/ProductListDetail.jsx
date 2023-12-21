import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../config/firebaseConfig";
import { Item } from "../Item/Item";

export const ProductListDetail = () => {
  const [item, setItem] = useState(null);
  const getProductById = (id) => {
    const itemRef = doc(db, "products", id);
    getDoc(itemRef).then((resp) => {
      if (resp.exists()) {
        const item = {
          id: resp.id,
          ...resp.data(),
        };
        setItem(item);
      }
    });
  };
  useEffect(() => {
    getProductById("6SCvF1X8ooY5HhKWdYYS");
  }, [item]);
  return <>{item && <Item {...item} />}</>;
};
