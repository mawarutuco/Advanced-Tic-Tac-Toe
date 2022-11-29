import MyBtn from "../components/Btn";
import { BrowserRouter, Route, useNavigate } from "react-router-dom";

function Home() {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center ">
      <h1>請選擇遊戲</h1>
      <MyBtn text="類估估畫畫" />
    </div>
  );
}

export default Home;
