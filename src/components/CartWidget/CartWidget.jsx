import { CiShoppingCart } from "react-icons/ci";

export const CartWidget = ({ addToCart }) => {
  return (
    <>
      <CiShoppingCart size={"2em"} />
      <h2>{addToCart}</h2>
    </>
  );
};
