import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route exact path="/" component={<HomeScreen />} />
          <Route exact path="/product/:id" component={<ProductScreen />} />
          <Route exact path="/cart" component={<CartScreen />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
