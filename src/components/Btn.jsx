import { Button } from "react-bootstrap";

const MyBtn = ({ text, doClick, btnClass = "", isDisabled = false }) => {
  return (
    <Button
      disabled={isDisabled}
      className={"btn btn-primary " + btnClass}
      onClick={doClick}
    >
      {text}
    </Button>
  );
};

export default MyBtn;
