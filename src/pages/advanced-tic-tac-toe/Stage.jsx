import MyBtn from "../../components/Btn";
import { FiCircle } from "react-icons/fi";

const AdvancedTicTacToe = ({ turn, stage, setStage, piece, setTurn }) => {
  const changeStage = (id) => {
    let newArr = [...stage];
    newArr[id] = {
      state: piece.current,
      color: turn ? "text-primary" : "text-warning",
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
            disabled={piece.current > item.state ? false : true}
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
