import { HomeBtn, StopBtn, QuestionBtn } from "../../components/functionBtn";
import GameBtns from "./GameBtns";
import Stage from "./Stage";
import { ButtonGroup } from "react-bootstrap";
import { useState, useRef, useEffect } from "react";
import { MyAlert } from "../../components/alert";

const AdvancedTicTacToe = () => {
  let stageInit = Array(9).fill({
    state: -1,
    color: "",
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

  const judgeRow = (idx) => {
    let judgeColor = stage[idx].color;
    if (
      judgeColor === stage[idx + 1].color &&
      judgeColor === stage[idx + 2].color
    )
      return true;
    return false;
  };
  const judgeCol = (idx) => {
    let judgeColor = stage[idx].color;
    if (
      judgeColor === stage[idx + 3].color &&
      judgeColor === stage[idx + 6].color
    )
      return true;
    return false;
  };
  const judgeSlash = (idx) => {
    let judgeColor = stage[idx].color;
    if (judgeColor === stage[4].color) {
      if (idx === 0 && judgeColor === stage[8].color) return true;
      if (idx === 2 && judgeColor === stage[6].color) return true;
    }
    return false;
  };

  const judgeWinner = () => {
    if (stage[0].color) {
      if (judgeRow(0)) return [true, stage[0].color];
      if (judgeCol(0)) return [true, stage[0].color];
      if (judgeSlash(0)) return [true, stage[0].color];
    }
    if (stage[2].color) {
      if (judgeCol(2)) return [true, stage[2].color];
      if (judgeSlash(2)) return [true, stage[2].color];
    }
    if (stage[3].color) if (judgeRow(3)) return [true, stage[3].color];
    if (stage[6].color) if (judgeRow(6)) return [true, stage[6].color];
    if (stage[1].color) if (judgeCol(1)) return [true, stage[1].color];
    return [false, ""];
  };

  useEffect(() => {
    const [win, color] = judgeWinner();
    if (win) gameAlert(`${color === "text-primary" ? "藍方" : "黃方"}勝利!`);
    // if (stage.every((n) => n.state > 0)) gameAlert("平手");
  }, [stage]);

  return (
    <div className="container d-flex flex-column justify-content-between align-items-center mt-1 my_show_move_up">
      <ButtonGroup className="position-absolute" style={{ top: "20%" }}>
        <HomeBtn />
        <StopBtn doClick={() => gameAlert("遊戲暫停")} />
        <QuestionBtn link={"/advanced-tic-tac-toe"} />
      </ButtonGroup>
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
