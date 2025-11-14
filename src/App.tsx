import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import { Secrets } from "./pages/secrets";


function App() {
  return (
    <BrowserRouter>
      <div dir="rtl" className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/secrets" element={<Secrets />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
