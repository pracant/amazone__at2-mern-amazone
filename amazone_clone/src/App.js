import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductInfo from "./screens/ProductInfo";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <a href="/">Amazone</a>
        </header>
        <main>
          <Routes>
            <Route path="/product/:slug" element={<ProductInfo />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
