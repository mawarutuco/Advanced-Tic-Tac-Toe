import { HomeBtn, StopBtn } from "../../components/functionBtn";
import GameBtns from "./GameBtns";
import Stage from "./Stage";
import { useState, useRef, useEffect } from "react";
import { MyAlert } from "../../components/alert";

const AdvancedTicTacToe = () => {
  let stageInit = Array(9).fill({
    state: -1,
    color: "invisible",
    disabled: true,
  });

  const [stage, setStage] = useState(stageInit);
  const piece = useRef(-2);
  const [blueTurn, setTurn] = useState(true);

  const gameBtnsInit = {
    blue: [
      { state: 0, qty: 3 },
      { state: 1, qty: 3 },
      { state: 2, qty: 3 },
    ],
    yellow: [
      { state: 0, qty: 3 },
      { state: 1, qty: 3 },
      { state: 2, qty: 3 },
    ],
  };

  const gameBtns = useRef(gameBtnsInit);

  const stateObj = {
    stage,
    setStage,
    piece,
    setTurn,
  };

  const reset = () => {
    setStage(stageInit);
    gameBtns.current = gameBtnsInit;
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
    
    if (stage.every((n) => n.state > -1)) gameAlert("平手");
  }, [stage]);

  return (
    <div className="container d-flex flex-column justify-content-between align-items-center mt-1">
      <div className="position-absolute" style={{ top: "20%" }}>
        <HomeBtn />
        <StopBtn doClick={() => gameAlert("遊戲暫停")} />
      </div>
      <GameBtns
        gameBtns={gameBtns.current.blue}
        blueTurn={blueTurn}
        stateObj={stateObj}
        btnClass="btn-primary"
      />
      <Stage gameBtns={gameBtns} blueTurn={blueTurn} stateObj={stateObj} />
      <GameBtns
        gameBtns={gameBtns.current.yellow}
        blueTurn={!blueTurn}
        stateObj={stateObj}
        btnClass="btn-warning"
      />
    </div>
  );
};

export default AdvancedTicTacToe;
