import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Shopping from "./Components/Shopping";
import Cart from "./Components/Cart";
import Fotter from "./Components/Fotter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-gradient-to-t from-violet-300">
        <Navbar />
        <Cart />
        <Shopping />
        <About />
        <Fotter />
      </div>
    </>
  );
}

export default App;
