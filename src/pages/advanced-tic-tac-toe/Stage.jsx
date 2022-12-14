import MyBtn from "../../components/Btn";
import { FiCircle } from "react-icons/fi";

const AdvancedTicTacToe = ({
  blueTurn,
  stage,
  setStage,
  piece,
  setTurn,
}) => {
  const changeStage = (id) => {
    let newArr = stage.map((n) => {
      n.disabled = true;
      return n;
    });
    newArr[id] = {
      state: piece.current,
      color: blueTurn ? "text-primary" : "text-warning",
      disabled: true,
    };
    piece.current = -1;
    setTurn((pre) => !pre);
    setStage(newArr);
  };

  return (
    <div className="">
      {stage.map((item, idx) => (
        <span key={idx}>
          <MyBtn
            text={<FiCircle />}
            textClass={`piece${item.state} ${item.color}`}
            disabled={item.disabled}
            btnClass="my_w_100px my_h_100px bg-white"
            key={idx}
            doClick={() => changeStage(idx)}
          />
          {idx % 3 === 2 && <br />}
        </span>
      ))}
    </div>
  );
};

export default AdvancedTicTacToe;
