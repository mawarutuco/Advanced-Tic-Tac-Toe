import swalWithBootstrapButtons from "../../components/Alert";
import MyBtn from "../../components/Btn";
import MyInputGroup from "../../components/InputGroup";
import { useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

const Timer = ({
  reset,
  startTimer,
  point,
  isPlaying,
  timePercent,
  sec,
  setSec,
  timer,
}) => {
  const stopGame = () => {
    clearInterval(timer);
    swalWithBootstrapButtons
      .fire({
        title: "暫停中",
        text: `目前得 ${point.current} 分`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "繼續遊戲",
        cancelButtonText: "提早結束",
      })
      .then((result) => {
        if (result.isConfirmed) startTimer();
        else reset();
      });
  };
  const navigate = useNavigate();

  return (
    <div className="timer mt-3">
      {isPlaying ? (
        <div className="d-flex justify-content-between">
          <div
            className="bg-primary text-light ps-1"
            style={{
              width: timePercent + "%",
              borderRadius: "10px",
            }}
          >
            {sec}
          </div>
          <MyBtn className="btn-secondary" text="暫停" onClick={stopGame} />
        </div>
      ) : (
        <MyInputGroup
          value={sec}
          onChange={(e) => setSec(e.target.value)}
          frontText="倒數計時"
          behindText="秒鐘"
          btnText={<AiFillHome />}
          btnClick={() => navigate(-1)}
        />
      )}
    </div>
  );
};

export default Timer;
