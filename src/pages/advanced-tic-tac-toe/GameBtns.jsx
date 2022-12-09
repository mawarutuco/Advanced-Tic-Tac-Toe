import MyBtn from "../../components/Btn";
import { ButtonGroup } from "react-bootstrap";
import { FiCircle } from "react-icons/fi";

const AdvancedTicTacToe = ({ btnClass }) => {
  return (
    <ButtonGroup className="w-100">
      <MyBtn text={<FiCircle />} textClass="my_fs_200" btnClass={btnClass} />
      <MyBtn text={<FiCircle />} textClass="my_fs_300" btnClass={btnClass} />
      <MyBtn text={<FiCircle />} textClass="my_fs_400" btnClass={btnClass} />
    </ButtonGroup>
  );
};

export default AdvancedTicTacToe;
