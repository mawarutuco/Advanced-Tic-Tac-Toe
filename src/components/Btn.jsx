import { Button } from "react-bootstrap";

const MyBtn = ({ text, textClass, onClick, btnClass, disabled = false }) => {
  return (
    <Button disabled={disabled} className={btnClass} onClick={onClick}>
      <span className={textClass}>{text}</span>
    </Button>
  );
};

export default MyBtn;
