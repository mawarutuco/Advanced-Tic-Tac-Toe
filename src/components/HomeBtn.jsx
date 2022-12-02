import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

const HomeBtn = ({ btnClass }) => {
  const navigate = useNavigate();
  return (
    <Button
      className={"btn-secondary " + btnClass}
      onClick={() => navigate("/")}
    >
      <AiFillHome />
    </Button>
  );
};

export default HomeBtn;
