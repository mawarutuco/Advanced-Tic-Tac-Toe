import { InputGroup, Form } from "react-bootstrap";

const MyInputGroup = ({ frontText, behindText, value, onChange }) => {
  return (
    <InputGroup>
      {frontText ? <InputGroup.Text>{frontText}</InputGroup.Text> : ""}
      <Form.Control value={value} onChange={onChange} />
      {behindText ? <InputGroup.Text>{behindText}</InputGroup.Text> : ""}
    </InputGroup>
  );
};

export default MyInputGroup;
