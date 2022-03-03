import { Label, InputArea } from "../../Style";

function TextArea(props) {
  const { labelName, value, onChange, placeholder } = props;

  return (
    <>
      <Label>{labelName}</Label>
      <InputArea
        type="text"
        value={value}
        name="username"
        onChange={onChange}
        placeholder={placeholder}
        required
      />
    </>
  );
}

export default TextArea;
