import HomeBtn from "../../components/HomeBtn";
import StopBtn from "../../components/StopBtn";
import GameBtns from "./GameBtns";
import Stage from "./Stage";
import { useState, useRef, useEffect } from "react";
import MyAlert from "../../components/Alert";

const AdvancedTicTacToe = () => {
  let initArr = [];
  initArr.length = 9;
  initArr.fill({ state: 0, color: "invisible", disabled: true });

  const [stage, setStage] = useState(initArr);
  const piece = useRef(-1);
  const [turn, setTurn] = useState(true);

  const reset = () => {
    setStage(initArr);
  };

  const stopGame = () => {
    MyAlert.fire({
      title: "暫停中",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "重新遊戲",
      cancelButtonText: "觀看棋盤",
    }).then((result) => {
      if (result.isConfirmed) reset();
    });
  };

  useEffect(() => {
    if (stage.every((n) => n.state > 0))
      MyAlert.fire({
        title: "???",
        icon: "success",
        showCancelButton: true,
        confirmButtonText: "重新遊戲",
        cancelButtonText: "觀看棋盤",
      }).then((result) => {
        if (result.isConfirmed) reset();
      });
  }, [stage]);

  return (
    <div className="container d-flex flex-column justify-content-between align-items-center mt-1">
      <div className="position-absolute" style={{ top: "20%" }}>
        <HomeBtn />
        <StopBtn doClick={stopGame} />
      </div>
      <GameBtns turn={!turn} piece={piece} stage={stage} setStage={setStage} />
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
