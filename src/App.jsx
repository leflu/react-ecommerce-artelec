import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Greetings, Navbar, ProductList } from "./components";
import { ProductListDetail } from "./components/ProductListDetail/ProductListDetail";

function App() {
  return (
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
  );
}

export default App;
