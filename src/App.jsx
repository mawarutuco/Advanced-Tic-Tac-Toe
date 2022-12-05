import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import AliasGame from "./pages/alias-game/index";
// import OOXX from "./pages/advanced-tic-tac-toe/index";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alias-game" element={<AliasGame />} />
        {/* <Route path="/advanced-tic-tac-toe" element={<OOXX />} /> */}
      </Routes>
    </HashRouter>
  );
}

export default App;
