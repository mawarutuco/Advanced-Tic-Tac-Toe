import MyBtn from "../../components/Btn";
import {ButtonGroup} from 'react-bootstrap'

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
        <ButtonGroup className="d-flex justify-content-between">
          <MyBtn
            text="棄牌"
            textClass="my_lh_6 my_fs_200"
            btnClass="w-100 my_click_btn btn-warning"
            doClick={giveUpCard}
            disabled={isGiveUp}
          />
          <MyBtn
            text="下張"
            textClass="my_lh_6 my_fs_200"
            btnClass="w-100 my_click_btn"
            doClick={nextCard}
          />
        </ButtonGroup>
      ) : (
        <MyBtn
          text="開始"
          textClass="my_lh_6 my_fs_200"
          btnClass="w-100 my_click_btn"
          doClick={startGame}
        />
      )}
    </div>
  );
};

export default Buttons;
