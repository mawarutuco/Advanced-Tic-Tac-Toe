import MyBtn from "./Btn";
import { useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

const HomeBtn = () => {
  const navigate = useNavigate();
  return (
    <MyBtn
      btnClass="btn-secondary"
      text={<AiFillHome />}
      doClick={() => navigate("/")}
    />
  );
};

export default HomeBtn;
