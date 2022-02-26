import { Label, Input } from '../../Style';

function TextInput(props) {
	const { labelName, value } = props;

	return (
		<>
			<Label>{labelName}</Label>
			<Input type="text" value={value} name="username" required />
		</>
	);
}

export default TextInput;
