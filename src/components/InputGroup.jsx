import { InputGroup, Form, Button } from "react-bootstrap";

const MyInputGroup = ({
  frontText,
  behindText,
  btnText,
  btnClick,
  btnComponent,
  value,
  onChange,
}) => {
  return (
    <InputGroup>
      {frontText ? <InputGroup.Text>{frontText}</InputGroup.Text> : ""}
      <Form.Control value={value} onChange={onChange} />
      {behindText ? <InputGroup.Text>{behindText}</InputGroup.Text> : ""}
      {btnText ? (
        <Button className="btn-secondary" onClick={btnClick}>
          <span>{btnText}</span>
        </Button>
      ) : (
        ""
      )}
      {btnComponent}
    </InputGroup>
  );
};

export default MyInputGroup;
