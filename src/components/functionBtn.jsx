import MyBtn from "./Btn";
import { useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { GiPauseButton } from "react-icons/gi";

export const HomeBtn = () => {
  const navigate = useNavigate();
  return (
    <MyBtn
      btnClass="btn-secondary"
      text={<AiFillHome />}
      doClick={() => navigate("/")}
    />
  );
};


export const StopBtn = ({ doClick }) => (
  <MyBtn btnClass="btn-secondary" text={<GiPauseButton />} doClick={doClick} />
);

