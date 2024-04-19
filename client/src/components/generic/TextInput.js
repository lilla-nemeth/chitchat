import { Label, Input } from '../../style';

function TextInput(props) {
	const { homelabel, labelName, value, onChange, placeholder, required, primary, name, autoFocus } = props;

	return (
		<>
			<Label homelabel={homelabel}>{labelName}</Label>
			<Input
				primary={primary}
				type='text'
				value={value}
				name={name}
				onChange={onChange}
				placeholder={placeholder}
				required={required}
				autoFocus={autoFocus}
			/>
		</>
	);
}

export default TextInput;
