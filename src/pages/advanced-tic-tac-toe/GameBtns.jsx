import MyBtn from "../../components/Btn";
import { ButtonGroup } from "react-bootstrap";
import { FiCircle } from "react-icons/fi";
import { useRef, useEffect } from "react";

const AdvancedTicTacToe = ({ blueTurn, piece, stage, setStage, btnClass }) => {
  const gameBtnsArr = useRef([
    { state: 1, qty: 3 },
    { state: 2, qty: 3 },
    { state: 3, qty: 3 },
  ]);

  useEffect(() => {
    gameBtnsArr.current = gameBtnsArr.current.map((item) => {
      if (item.state === piece.current) item.qty--;
      return item;
    });
  }, [stage]);

  const PieceStr = (qty) => (
    <div style={{ rotate: blueTurn ? "" : "180deg" }}>
      <FiCircle />
      <span
        className="fs-3 position-absolute"
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
  const judgeStage = (item) => {
    const newStage = stage.map((n) => {
      if (n.state < item) n.disabled = false;
      else n.disabled = true;
      return n;
    });
    setStage(newStage);
  };

  return (
    <ButtonGroup className="w-100">
      {gameBtnsArr.current.map((item, idx) => (
        <MyBtn
          key={idx}
          text={PieceStr(item.qty)}
          doClick={() => selectPiece(item)}
          btnClass={btnClass}
          textClass={
            item.state > 2 ? "piece3" : item.state > 1 ? "piece2" : "piece1"
          }
          disabled={blueTurn && item.qty > 0}
        />
      ))}
    </ButtonGroup>
  );
};

export default AdvancedTicTacToe;
