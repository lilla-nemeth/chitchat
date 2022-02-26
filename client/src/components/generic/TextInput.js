import { InputContainer, Label, Input } from '../../Style';

function TextInput(props) {
	const { labelName, value } = props;

	return (
		<>
			<InputContainer>
				<Label>{labelName}</Label>
				<Input type="text" value={value} name="username" required />
			</InputContainer>
		</>
	);
}

export default TextInput;
