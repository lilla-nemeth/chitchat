import { ChatSmallButton, ButtonIconStyle } from '../styles';
import { SmallFormButtonProps } from '../types/propTypes';

function SmallFormButton(props: SmallFormButtonProps) {
	const { text, isIcon, icon } = props;

	return (
		<ChatSmallButton  type='submit' value='submit' name='submit'>
			{isIcon && <ButtonIconStyle>{icon}</ButtonIconStyle>}
			{text}
		</ChatSmallButton>
	);
}

export default SmallFormButton;
