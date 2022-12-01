import { useState, useEffect, useRef } from "react";
import words from "./words";
import swalWithBootstrapButtons from "../../components/Alert";
import MyBtn from "../../components/Btn";
import Timer from "./Timer";
import Buttons from "./Buttons";

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

  const startTimer = () =>
    (timer = setInterval(function () {
      setSec((pre) => pre - 1);
    }, 1000));

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
      swalWithBootstrapButtons.fire(
        "時間到啦",
        `共得 ${point.current} 分`,
        "warning"
      );
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
      <div className="border shadow word text-center text-wrap">{word}</div>
      <MyBtn
        text={`分數：${point.current}`}
        className="btn-light btn-lg"
        onClick={() => {
          swalWithBootstrapButtons.fire(
            "上局已猜過單字：",
            `${pointWords.current.join("\n")}`
          );
        }}
        disabled={isPlaying}
      />

      <Buttons
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
