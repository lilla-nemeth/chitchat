import { Label, InputArea } from '../../Style';

function TextArea(props) {
	const { labelName, value } = props;

	return (
		<>
			<Label>{labelName}</Label>
			<InputArea type="text" value={value} name="username" required />
		</>
	);
}

export default TextArea;
