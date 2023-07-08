import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Detail from "./pages/Detail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:restaurantId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
