import MyBtn from "../../components/Btn";
import { ButtonGroup } from "react-bootstrap";
import { FiCircle } from "react-icons/fi";

const AdvancedTicTacToe = ({ turn, setPiece, stage, setStage, btnClass }) => {
  const gameBtnsArr = ["", "my_fs_200", "my_fs_300"];
  const selectPiece = (item) => {
    judgeStage(item);
    setPiece(item);
  };
  const judgeStage = (item) => {
    let newStage = [];
    if (item === "my_fs_300") console.log();
    else if (item === "my_fs_200") console.log();
    else console.log();
    // setStage(newStage);
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
