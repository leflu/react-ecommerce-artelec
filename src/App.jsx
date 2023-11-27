import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Greetings, Navbar, ProductList } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Greetings greeting="Bienvenido a Artelec" />}
        />
        <Route path="/tienda" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
