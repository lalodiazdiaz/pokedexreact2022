import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./screen/Home";
import { Details } from "./screen/Details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Details/:pokeName" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
