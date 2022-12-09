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
  // const gameBtnsArr = [{state:1,qty:3},{state:2,qty:3},{state:3,qty:3}];
  
  const selectPiece = (item) => {
    judgeStage(item);
    piece.current = `${item} ${textClass}`;
    
    //const {state} = item
    // judgeStage(state);
    // piece.current = state;
  };
  const judgeStage = (item) => {
    let newStage = [];
    if (item === "my_fs_300") {
      newStage = stage.map((n) => {
        if (n.textClass.indexOf(item) > -1) n.disabled = true;
        else n.disabled = false;
        return n;
      });
    } else if (item === "my_fs_200") {
      newStage = stage.map((n) => {
        if (n.textClass.indexOf("my_fs_300") > -1) n.disabled = true;
        else if (n.textClass.indexOf(item) > -1) n.disabled = true;
        else n.disabled = false;
        return n;
      });
    } else {
      newStage = stage.map((n) => {
        if (n.text) n.disabled = true;
        else n.disabled = false;
        return n;
      });
    }
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
          // textClass={item.state>2?"my_fs_300":(item.state>1?"my_fs_200":"")}
          // disabled={turn&&!item.qty}
        />
      ))}
    </ButtonGroup>
  );
};

export default AdvancedTicTacToe;
