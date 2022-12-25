import MyBtn from "../../components/Btn";
import { FiCircle } from "react-icons/fi";
import { theme1, theme2 } from "./method";

const AdvancedTicTacToe = ({ gameBtns, blueTurn, stateObj }) => {
  const { stage, setStage, piece, setTurn } = stateObj;

  const changeStage = (id) => {
    let newArr = stage.map((n) => {
      n.disabled = true;
      return n;
    });
    let colorTheme = blueTurn ? theme1 : theme2;
    newArr[id] = {
      state: piece.current,
      color: `text-${colorTheme}`,
      disabled: true,
    };
    gameBtns.current[colorTheme][piece.current].qty--;
    piece.current = -2;
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
