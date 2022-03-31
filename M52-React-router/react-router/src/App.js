import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Friends from "./components/Friends/Friends";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Header from "./components/Header/Header";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/friends" element={<Friends></Friends>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
