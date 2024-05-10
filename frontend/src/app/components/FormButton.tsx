import { ButtonStyle } from '../styles';
import { FormButtonProps } from '../types/propTypes';

function FormButton(props: FormButtonProps) {
	const { $primary, text, type, value, name } = props;

	return (
		<ButtonStyle $primary={$primary} type={type} value={value} name={name}>
			{text}
		</ButtonStyle>
	);
}

export default FormButton;
