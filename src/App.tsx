import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import { Secrets } from "./pages/secrets";
import { Loyalty } from "./pages/loyalty";

function App() {
  return (
    <BrowserRouter>
      <div dir="rtl" className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/secrets" element={<Secrets />} />
          <Route path="/loyalty" element={<Loyalty />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
