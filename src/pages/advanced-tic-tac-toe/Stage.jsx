import MyBtn from "../../components/Btn";
import { ButtonGroup } from "react-bootstrap";
import { FiCircle } from "react-icons/fi";
import { useState } from "react";

const OOXX = () => {
  const arr = [];
  arr.length = 9;
  arr.fill("");

  const [stageArr, setStageArr] = useState(arr);

  return (
    <div className="">
      {stageArr.map((n, idx) => (
        <span key={idx}>
          <MyBtn
            text="1"
            textClass=""
            btnClass="my_w_100px my_h_100px bg-white"
            key={idx}
            doClick={() => console.log(idx)}
          />
          {idx % 3 === 2 && <br />}
        </span>
      ))}
    </div>
  );
};

export default OOXX;
