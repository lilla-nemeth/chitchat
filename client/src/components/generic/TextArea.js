import { InputContainer, Label, InputArea } from '../../Style';

function TextArea(props) {
	const { labelName, value } = props;

	return (
		<>
			<InputContainer>
				<Label>{labelName}</Label>
				<InputArea type="text" value={value} name="username" required />
			</InputContainer>
		</>
	);
}

export default TextArea;
