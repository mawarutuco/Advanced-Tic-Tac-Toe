import { useState, useEffect, useRef } from "react";
import words from "./words";
import { MyAlert } from "../../components/alert";
import MyBtn from "../../components/Btn";
import Timer from "./Timer";
import GameBtns from "./GameBtns";

let wordsLen = words.length;
let timer = null;
const AliasGame = () => {
  const settingSec = useRef(10);
  const point = useRef(0);
  const pointWords = useRef([]);
  const [sec, setSec] = useState(settingSec.current);
  const [isPlaying, setPlaying] = useState(false);
  const [isGiveUp, setGiveUp] = useState(false);
  const [word, setWord] = useState("╰(*°▽°*)╯");

  const startTimer = () => {
    clearInterval(timer);
    timer = setInterval(function () {
      setSec((pre) => pre - 1);
    }, 1000);
  };

  const reset = () => {
    clearInterval(timer);
    setPlaying(false);
    setGiveUp(false);
    setWord("╰(*°▽°*)╯");
    setSec(settingSec.current);
  };

  const timePercent = ((sec / settingSec.current) * 80).toString();

  useEffect(() => {
    if (!isPlaying) settingSec.current = sec;
    else if (sec <= 0) {
      MyAlert({
        title: "時間到啦",
        text: `共得 ${point.current} 分`,
        icon: "warning",
      });
      reset();
    }
  }, [sec]);

  return (
    <div className="container my_show_move_up d-flex flex-column justify-content-between">
      <Timer
        startTimer={startTimer}
        reset={reset}
        point={point}
        isPlaying={isPlaying}
        timePercent={timePercent}
        sec={sec}
        setSec={setSec}
        timer={timer}
      />
      <div className="border shadow my_fs_200 my_lh_8 text-center text-wrap">
        {word}
      </div>
      <MyBtn
        text={`分數：${point.current}`}
        btnClass="btn-light btn-lg"
        doClick={() => {
          MyAlert({
            title: "上局已猜過單字：",
            text: `${pointWords.current.join("\n")}`,
          });
        }}
        disabled={isPlaying}
      />
      <GameBtns
        wordsLen={wordsLen}
        word={word}
        words={words}
        setPlaying={setPlaying}
        isPlaying={isPlaying}
        isGiveUp={isGiveUp}
        setGiveUp={setGiveUp}
        setWord={setWord}
        startTimer={startTimer}
        point={point}
        pointWords={pointWords}
      />
    </div>
  );
};

export default AliasGame;
