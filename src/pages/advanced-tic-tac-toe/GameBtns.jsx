import MyBtn from "../../components/Btn";
import { ButtonGroup } from "react-bootstrap";
import { FiCircle } from "react-icons/fi";
import { judgeDisabled, theme1 } from "./method";

const AdvancedTicTacToe = ({ gameBtns, blueTurn, stateObj, btnClass }) => {
  const { stage, setStage, piece } = stateObj;

  const pieceStr = (qty) => (
    <div style={{ rotate: btnClass.indexOf(theme1) > -1 && "180deg" }}>
      <FiCircle />
      <span
        className="fs-3 position-absolute "
        style={{ top: "15%", right: "15%" }}
      >
        {qty}
      </span>
    </div>
  );

  const selectPiece = (item) => {
    const { state } = item;
    judgeStage(state);
    piece.current = state;
  };

  const judgeStage = (selectPieceState) => {
    const newStage = stage.map((n) => {
      if (n.state < selectPieceState) n.disabled = false;
      else n.disabled = true;
      return n;
    });
    setStage(newStage);
  };

  return (
    <ButtonGroup className="w-100">
      {gameBtns.map((item, idx) => (
        <MyBtn
          key={idx}
          text={pieceStr(item.qty)}
          doClick={() => selectPiece(item)}
          btnClass={btnClass}
          textClass={
            item.state > 1 ? "piece2" : item.state ? "piece1" : "piece0"
          }
          disabled={judgeDisabled(blueTurn, item.qty)}
        />
      ))}
    </ButtonGroup>
  );
};

export default AdvancedTicTacToe;
