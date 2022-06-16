import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./screen/Home";
import { Details } from "./screen/Details";
import { Header } from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Details/:pokeName" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
