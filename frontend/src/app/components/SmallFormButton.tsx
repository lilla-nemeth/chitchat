import { ChatSmallButton, ButtonIconStyle } from '../styles';

function SmallFormButton(props: any) {
	const { $primary, name, isIcon, icon, onClick } = props;

	return (
		<>
			<ChatSmallButton onClick={onClick} type='submit' value='submit' name='submit'>
				{isIcon && <ButtonIconStyle>{icon}</ButtonIconStyle>}
				{name}
			</ChatSmallButton>
		</>
	);
}

export default SmallFormButton;
