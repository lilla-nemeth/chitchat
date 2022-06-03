import { Label, Input } from '../../style';

function TextInput(props) {
  const {
    homeLabel,
    labelName,
    value,
    onChange,
    placeholder,
    required,
    primary,
    name,
    replyMessage,
  } = props;

  return (
    <>
      <Label homeLabel={homeLabel}>{labelName}</Label>
      <Input
        primary={primary}
        type='text'
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        replyMessage={replyMessage}
      />
    </>
  );
}

export default TextInput;
