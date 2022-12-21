import { Routes, Route } from "react-router-dom";
import Instruction from "./Instruction";
import AliasGame from "./Game";

const QuestionPage = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<AliasGame />} />
        <Route path="instruction" element={<Instruction />} />
      </Routes>
    </div>
  );
};

export default QuestionPage;
