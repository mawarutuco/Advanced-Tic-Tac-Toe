import MyBtn from "../../components/Btn";
import { ButtonGroup } from "react-bootstrap";
import { FiCircle } from "react-icons/fi";

const AdvancedTicTacToe = ({ turn, piece, stage, setStage, btnClass }) => {
  let gameBtnsArr = [
    { state: 1, qty: 3 },
    { state: 2, qty: 3 },
    { state: 3, qty: 3 },
  ];

  const selectPiece = (item) => {
    const { state } = item;
    judgeStage(state);
    piece.current = state;
  };
  const judgeStage = (item) => {
    const newStage = stage.map((n) => {
      if (n.state < item) n.disabled = false;
      else n.disabled = true;
      return n
    });
    setStage(newStage);
  };

  return (
    <ButtonGroup className="w-100">
      {gameBtnsArr.map((item, idx) => (
        <MyBtn
          key={idx}
          text={<FiCircle />}
          doClick={() => selectPiece(item)}
          btnClass={btnClass}
          textClass={
            item.state > 2 ? "piece3" : item.state > 1 ? "piece2" : "piece1"
          }
          disabled={turn && item.qty > 0}
        />
      ))}
    </ButtonGroup>
  );
};

export default AdvancedTicTacToe;
