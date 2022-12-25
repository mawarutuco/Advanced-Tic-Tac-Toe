import { HomeBtn, StopBtn, QuestionBtn } from "../../components/functionBtn";
import GameBtns from "./GameBtns";
import Stage from "./Stage";
import { ButtonGroup } from "react-bootstrap";
import { useState, useRef, useEffect } from "react";
import { gameAlert, judgeWinner, theme1, theme2 } from "./method";

const AdvancedTicTacToe = () => {
  let stageInit = Array(9).fill({
    state: -1,
    color: "",
    disabled: true,
  });

  const [stage, setStage] = useState(stageInit);
  const piece = useRef(-2);
  const [blueTurn, setTurn] = useState(true);
  const points = useRef([0, 0]);

  const gameBtnsInit = {
    primary: [
      { state: 0, qty: 3 },
      { state: 1, qty: 3 },
      { state: 2, qty: 3 },
    ],
    warning: [
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

  useEffect(() => {
    const [win, color] = judgeWinner(stage);
    if (win) {
      if (color.indexOf(theme1) > -1) {
        gameAlert(`藍方勝利!`, reset);
        points.current[0]++;
      } else {
        gameAlert(`黃方勝利!`, reset);
        points.current[1]++;
      }
    }
    // if (stage.every((n) => n.state > 0)) gameAlert("平手");
  }, [stage]);

  return (
    <div className="container d-flex flex-column justify-content-between align-items-center mt-1 my_show_move_up">
      <GameBtns
        gameBtns={gameBtns.current.primary}
        blueTurn={blueTurn}
        stateObj={stateObj}
        btnClass={"btn-" + theme1}
      />
      <ButtonGroup>
        <HomeBtn />
        <StopBtn doClick={() => gameAlert("遊戲暫停", reset)} />
        <QuestionBtn link={"/advanced-tic-tac-toe"} />
      </ButtonGroup>
      <Stage gameBtns={gameBtns} blueTurn={blueTurn} stateObj={stateObj} />
      <div className="fs-1">
        <span className={"text-" + theme1}>{points.current[0]}</span>
        <span> : </span>
        <span className={"text-" + theme2}>{points.current[1]}</span>
      </div>
      <GameBtns
        gameBtns={gameBtns.current.warning}
        blueTurn={!blueTurn}
        stateObj={stateObj}
        btnClass={"btn-" + theme2}
      />
    </div>
  );
};

export default AdvancedTicTacToe;
