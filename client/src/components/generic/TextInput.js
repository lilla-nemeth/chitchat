import { Label, Input } from "../../Style";

function TextInput(props) {
  const { labelName, value, onChange, placeholder } = props;

  return (
    <>
      <Label>{labelName}</Label>
      <Input
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

export default TextInput;
