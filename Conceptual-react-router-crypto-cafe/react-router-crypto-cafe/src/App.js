import { Route, Routes } from "react-router-dom";
import "./App.css";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Home from "./components/Home/Home";
import Coins from "./components/Coins/Coins";
import About from "./components/About/About";
import CoinDetail from "./components/CoinDetail/CoinDetail";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/coins" element={<Coins></Coins>}></Route>
        <Route path="/coin/:coinId" element={<CoinDetail></CoinDetail>}></Route>
        <Route path="/contact" element={<ContactUs></ContactUs>}></Route>
        <Route path="/about" element={<About></About>}></Route>

        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
