import { HomeBtn, StopBtn } from "../../components/functionBtn";
import GameBtns from "./GameBtns";
import Stage from "./Stage";
import { useState, useRef, useEffect } from "react";
import { MyAlert } from "../../components/alert";

const AdvancedTicTacToe = () => {
  let stageInit = [];
  stageInit.length = 9;
  stageInit.fill({ state: 0, color: "invisible", disabled: true });

  const [stage, setStage] = useState(stageInit);
  const piece = useRef(-1);
  const [turn, setTurn] = useState(true);

  const reset = () => {
    setStage(stageInit);
  };

  const gameAlert = (text) => {
    MyAlert({
      title: text,
      showCancelButton: true,
      confirmButtonText: "重新遊戲",
      cancelButtonText: "觀看棋盤",
    }).then((result) => {
      if (result.isConfirmed) reset();
    });
  };

  useEffect(() => {
    if (stage.every((n) => n.state > 0)) gameAlert("平手");
  }, [stage]);

  return (
    <div className="container d-flex flex-column justify-content-between align-items-center mt-1">
      <div className="position-absolute" style={{ top: "20%" }}>
        <HomeBtn />
        <StopBtn doClick={() => gameAlert("遊戲暫停")} />
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
