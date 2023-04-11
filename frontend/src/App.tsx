import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { getDefaultProvider } from "ethers";
import Trade from "./pages/Trade";
import ExchangePage from "./pages/Trade";
import TradeBox from "./pages/Trade";
import { useEffect } from "react";
import Pools from "./pages/Pools";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/trade" element={<Trade />} />
        <Route path="/pools" element={<Pools />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
