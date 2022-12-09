import MyBtn from "../../components/Btn";
import { ButtonGroup } from "react-bootstrap";
import { FiCircle } from "react-icons/fi";

const AdvancedTicTacToe = ({
  turn,
  piece,
  stage,
  setStage,
  btnClass,
  textClass,
}) => {
  const gameBtnsArr = ["", "my_fs_200", "my_fs_300"];
  const selectPiece = (item) => {
    judgeStage(item);
    piece.current = `${item} ${textClass}`;
  };
  const judgeStage = (item) => {
    let newStage = stage.map((n) => {
      n.disabled = false;
      return n;
    });
    // if (item === "my_fs_300") console.log(newStage);
    // else if (item === "my_fs_200") console.log(newStage);
    // else console.log(newStage);
    console.log(newStage);
    setStage(newStage);
  };
  return (
    <ButtonGroup className="w-100">
      {gameBtnsArr.map((item) => (
        <MyBtn
          text={<FiCircle />}
          doClick={() => selectPiece(item)}
          textClass={item}
          btnClass={btnClass}
          disabled={turn}
        />
      ))}
    </ButtonGroup>
  );
};

export default AdvancedTicTacToe;
