import MyInputGroup from "../../components/InputGroup";
import { MyAlert } from "../../components/alert";
import { HomeBtn, StopBtn } from "../../components/functionBtn";

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
    MyAlert({
      title: "暫停中",
      text: `目前得 ${point.current} 分`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "提早結束",
      cancelButtonText: "繼續遊戲",
    }).then((result) => {
      if (result.isConfirmed) reset();
      else startTimer();
    });
  };

  return (
    <div className="mt-3">
      {isPlaying ? (
        <div className="d-flex justify-content-between">
          <div
            className="bg-primary text-light ps-1 fs-3"
            style={{
              width: timePercent + "%",
              borderRadius: "10px",
            }}
          >
            {sec}
          </div>
          <StopBtn doClick={stopGame} />
        </div>
      ) : (
        <MyInputGroup
          value={sec}
          onChange={(e) => setSec(e.target.value)}
          frontText="倒數計時"
          behindText="秒鐘"
          btnComponent={<HomeBtn />}
        />
      )}
    </div>
  );
};

export default Timer;
