import "./App.css";
import MyBarChart from "./components/MyBarChart/MyBarChart";
import MyLineChart from "./components/MyLineChart/MyLineChart";

function App() {
  return (
    <div className="App">
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
