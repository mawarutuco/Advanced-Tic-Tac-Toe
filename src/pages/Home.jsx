import MyBtn from "../components/Btn";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="container vh-100 d-flex flex-column justify-content-center align-items-center ">
      <h1>請選擇遊戲</h1>
      <MyBtn text="類估估畫畫" onClick={() => navigate("/alias-game")} />
    </div>
  );
}

export default Home;
