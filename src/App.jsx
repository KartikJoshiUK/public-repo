import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <h1>Home</h1>
            <Link to={"/about"}>about</Link>
          </div>
        }
      />
      <Route
        path="/about"
        element={
          <div>
            <h1>About</h1>
            <Link to={"/"}>home</Link>
          </div>
        }
      />
      <div>
        <p>count: {count}</p>
        <button onClick={() => setCount(count + 1)}>increment</button>
      </div>
    </Routes>
  );
}

export default App;
