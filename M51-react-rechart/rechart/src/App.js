import "./App.css";
import MyBarChart from "./components/MyBarChart/MyBarChart";
import MyLineChart from "./components/MyLineChart/MyLineChart";

import { useSpring, animated } from "react-spring";
import { useState } from "react";

function App() {
  const [flip, set] = useState(false);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    onRest: () => set(!flip),
  });
  return (
    <div className="App">
      <animated.h1 style={props} className="m-5 p-2 text-2xl ">
        hello
      </animated.h1>
      <h2 className="border-4 bg-green-500 text-white text-xl p-3 rounded mb-3">
        Charts
      </h2>
      <div></div>
      <MyLineChart></MyLineChart>
      <MyBarChart></MyBarChart>
    </div>
  );
}

export default App;
