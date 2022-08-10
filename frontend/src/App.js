import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import SingleProduct from "./pages/SingleProduct";
import ProductList from "./pages/ProductList";
import NotFound from "./components/NotFound";
import Product from "./components/Product";

function App() {
  const user = true;
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/products/:cat" element={<ProductList />} />
        <Route path="/product/popular" element={<Product />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />

        <Route path="/cart" exact element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
