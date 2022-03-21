import { Label, Input } from '../../Style';

function TextInput(props) {
  const { labelName, value, onChange, placeholder, required, primary, name } =
    props;

  return (
    <>
      <Label>{labelName}</Label>
      <Input
        primary={primary}
        type='text'
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </>
  );
}

export default TextInput;
