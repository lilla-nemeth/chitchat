import { Label, Input } from '../styles';
import { TextInputProps } from '../types/propTypes';

function TextInput(props: TextInputProps) {
	const { $homelabel, labelName, value, onChange, placeholder, required, $primary, name, autoFocus } = props;

	return (
		<>
			<Label $homelabel={$homelabel}>{labelName}</Label>
			<Input
				$primary={$primary}
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
