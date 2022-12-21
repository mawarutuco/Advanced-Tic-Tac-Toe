import { Routes, Route } from "react-router-dom";
import Instruction from "./Instruction";
import AdvancedTicTacToe from "./Game";

const QuestionPage = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<AdvancedTicTacToe />} />
        <Route path="instruction" element={<Instruction />} />
      </Routes>
    </div>
  );
};

export default QuestionPage;
