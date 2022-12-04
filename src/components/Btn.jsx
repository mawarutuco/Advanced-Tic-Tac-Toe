import { Button } from "react-bootstrap";

const MyBtn = ({ text, textClass, doClick, btnClass, disabled = false }) => {
  return (
    <Button disabled={disabled} className={btnClass} onClick={doClick}>
      <span className={textClass}>{text}</span>
    </Button>
  );
};

export default MyBtn;
