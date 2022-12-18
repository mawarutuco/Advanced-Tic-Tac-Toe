import MyBtn from "./Btn";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { FaQuestion } from "react-icons/fa";
import { GiPauseButton } from "react-icons/gi";

const btnColor = "btn-secondary";

export const HomeBtn = () => {
  const navigate = useNavigate();
  return (
    <MyBtn
      btnClass={btnColor}
      text={<AiFillHome />}
      doClick={() => navigate("/")}
    />
  );
};

export const StopBtn = ({ doClick }) => {
  let [isDisabled, setDisabled] = useState(false);
  const stopBtnFunction = () => {
    doClick();
    setDisabled(true);
    setTimeout(() => setDisabled(false), 1500);
  };
  return (
    <MyBtn
      btnClass={btnColor}
      text={<GiPauseButton />}
      doClick={stopBtnFunction}
      disabled={isDisabled}
    />
  );
};

export const QuestionBtn = () => {
  const navigate = useNavigate();
  return (
    <MyBtn
      btnClass={btnColor}
      text={<FaQuestion />}
      doClick={() => navigate("")}
    />
  );
};
