import { Routes, Route } from "react-router-dom";
import AliasGame from "./alias-game/index";
import AdvancedTicTacToe from "./advanced-tic-tac-toe/index";

const QuestionPage = () => {
  return (
      <Routes>
        <Route path="/alias-game/*" element={<AliasGame />} />
        <Route path="/advanced-tic-tac-toe/*" element={<AdvancedTicTacToe />} />
      </Routes>
  );
};

export default QuestionPage;
