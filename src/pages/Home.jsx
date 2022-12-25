import MyBtn from "../components/Btn";
import { useNavigate } from "react-router-dom";
import { BsGithub } from "react-icons/bs";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="my_show_move_up container d-flex flex-column justify-content-center align-items-center ">
      <h1>請選擇遊戲</h1>
      <MyBtn
        text="類估估畫畫"
        doClick={() => navigate("/alias-game")}
        btnClass="m-3"
      />
      <MyBtn
        text="進階圈圈叉叉"
        doClick={() => navigate("/advanced-tic-tac-toe")}
        btnClass="m-3"
      />
      <a href="https://github.com/mawarutuco/tabletop-game" className="m-5 fs-1">
        <BsGithub />
      </a>
    </div>
  );
}

export default Home;
