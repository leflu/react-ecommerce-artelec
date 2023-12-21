import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  CartItem,
  Greetings,
  Navbar,
  ProductList,
  ProductListDetail,
} from "./components";
import { CartContextProvider } from "./context/CartContext";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Greetings
                greeting="Bienvenido a ARTELEC"
                message="Somos el mayor proveedor de árticulos eléctricos de la IV región de Coquimbo, Chile."
              />
            }
          />
          <Route path="/tienda" element={<ProductList />} />
          <Route path="/category/:category" element={<ProductList />} />
          <Route path="/item/:id" element={<ProductListDetail />} />
        </Routes>
      </BrowserRouter>
      <CartItem/>
    </CartContextProvider>
  );
}

export default App;
