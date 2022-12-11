import { GiPauseButton } from "react-icons/gi";
import MyBtn from "./Btn";

const StopBtn = ({ doClick }) => (
  <MyBtn btnClass="btn-secondary" text={<GiPauseButton />} doClick={doClick} />
);

export default StopBtn;
