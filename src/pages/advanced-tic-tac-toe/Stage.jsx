import MyBtn from "../../components/Btn";
import { FiCircle } from "react-icons/fi";

const AdvancedTicTacToe = ({ stage, setStage, piece, setTurn }) => {
  const changeStage = (id) => {
    let newArr = stage.map((n) => {
      n.disabled = true;
      return n;
    });
    newArr[id] = {
      text: <FiCircle />,
      textClass: piece.current,
      disabled: true,
    };
    // let newArr = [...stage]
    // newArr[id] = {state:piece.current,color:""}  //用turn下顏色
    //  piece.current=-1
    setTurn((pre) => !pre);
    setStage(newArr);
  };

  return (
    <div className="">
      {stage.map((item, idx) => (
        <span key={idx}>
          <MyBtn
            text={item.text}
            textClass={item.textClass}
            disabled={item.disabled}
            // text={<FiCircle />}
            // textClass={()=>judgeTextClass(item.state,item.color)}
            // disabled={piece.current>item.state?true:false}
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
