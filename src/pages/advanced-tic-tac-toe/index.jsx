import HomeBtn from "../../components/HomeBtn";
import GameBtns from "./GameBtns";
import Stage from "./Stage";
import { useState,useRef } from "react";

const AdvancedTicTacToe = () => {
  let initArr = [];
  initArr.length = 9;
  initArr.fill({ text: "", textClass: "", disabled: false });

  const [stage, setStage] = useState(initArr);
  const piece = useRef("");
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
