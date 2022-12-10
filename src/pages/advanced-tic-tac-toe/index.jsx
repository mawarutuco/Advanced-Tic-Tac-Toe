import HomeBtn from "../../components/HomeBtn";
import GameBtns from "./GameBtns";
import Stage from "./Stage";
import { useState, useRef } from "react";

const AdvancedTicTacToe = () => {
  let initArr = [];
  initArr.length = 9;
  initArr.fill({ state: 0, color: "invisible" });

  const [stage, setStage] = useState(initArr);
  const piece = useRef(-1);
  const [turn, setTurn] = useState(true);

  return (
    <div className="container d-flex flex-column justify-content-between align-items-center mt-1">
      <div className="position-fixed fixed-top">
        <HomeBtn />
      </div>
      <GameBtns
        turn={!turn}
        piece={piece}
        stage={stage}
        setStage={setStage}
      />
      <Stage
        turn={turn}
        piece={piece}
        setTurn={setTurn}
        stage={stage}
        setStage={setStage}
      />
      <GameBtns
        turn={turn}
        piece={piece}
        stage={stage}
        setStage={setStage}
        btnClass="btn-warning"
      />
    </div>
  );
};

export default AdvancedTicTacToe;
