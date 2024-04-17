import { ButtonStyle } from '../styles';

function FormButton(props: any) {
	const { primary, name, onClick } = props;

	return (
		<>
			<ButtonStyle onClick={onClick} primary={primary} type='submit' value='submit' name='submit'>
				{name}
			</ButtonStyle>
		</>
	);
}

export default FormButton;
