import HomeBtn from "../../components/HomeBtn";
import GameBtns from "./GameBtns";
import Stage from "./Stage";
import { useState, useRef } from "react";

const AdvancedTicTacToe = () => {
  let initArr = [];
  initArr.length = 9;
  initArr.fill({ text: "", textClass: "", disabled: true });
  // initArr.fill({state:0,color:"invisible"});
  /*
  預計改成=> 0未放棋子(textClass不顯示文字)
  1放小的(textClass空);
  2放中的(textClass:my_fs_200);
  3放大的(textClass:my_fs_300)
  */

  const [stage, setStage] = useState(initArr);
  const piece = useRef("");
  // const piece = useRef(-1);
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
        textClass="text-primary"
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
        textClass="text-warning"
      />
    </div>
  );
};

export default AdvancedTicTacToe;
