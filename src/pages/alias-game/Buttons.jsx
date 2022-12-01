import MyBtn from "../../components/Btn";

const Buttons = ({
  word,
  words,
  wordsLen,
  setWord,
  startTimer,
  isPlaying,
  setPlaying,
  isGiveUp,
  setGiveUp,
  point,
  pointWords,
}) => {
  const randomWord = () => {
    const randomNum = Math.floor(wordsLen * Math.random());
    setWord(words[randomNum]);
    wordsLen--;
    words.splice(randomNum, 1);
  };

  const nextCard = () => {
    pointWords.current.push(word);
    randomWord();
    point.current++;
  };

  const giveUpCard = () => {
    randomWord();
    // isGiveUp()
  };

  const startGame = () => {
    randomWord();
    setPlaying(true);
    startTimer();
    point.current = 0;
    pointWords.current = [];
  };

  return (
    <div>
      {isPlaying ? (
        <div className="d-flex justify-content-between my_show_move_up">
          <MyBtn
            text="棄牌"
            className="btn-danger w-100 my_click_btn my_click_btn my_lh_6 my_fs_200"
            onClick={giveUpCard}
            disabled={isGiveUp}
          />
          <MyBtn text="下張" className="w-100 my_click_btn my_lh_6 my_fs_200"  onClick={nextCard} />
        </div>
      ) : (
        <MyBtn text="開始" className="w-100 my_click_btn my_lh_6 my_fs_200" onClick={startGame} />
      )}
    </div>
  );
};

export default Buttons;
