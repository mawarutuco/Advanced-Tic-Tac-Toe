import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyBtn from "./components/Btn";
import Home from "./pages/Home";
import AliasGame from "./pages/alias-game";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alias-game" element={<AliasGame />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
