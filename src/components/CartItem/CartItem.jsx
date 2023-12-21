import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartItem = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      <div>
        <h2>CARRITO</h2>
      </div>
      {cartItems.map((item) => (
        <div key={item.id}>
          <h3>Nombre: {item.name}</h3>
          <h3>Precio: {item.price}</h3>
          <h3>Cantidad: {item.quantity}</h3>
          <h3>Total: {item.subTotal}</h3>
        </div>
      ))}
    </>
  );
};
