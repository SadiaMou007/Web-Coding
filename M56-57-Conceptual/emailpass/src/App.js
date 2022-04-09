import toast, { Toaster } from "react-hot-toast";

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <div>
        <Header></Header>
        <Toaster />
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
