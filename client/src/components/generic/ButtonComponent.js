import { ButtonStyle, ButtonIconStyle } from '../../Style';

function ButtonComponent(props) {
	const { primary, name, isIcon, iconComponent } = props;

	return (
		<>
			{isIcon ? (
				<ButtonStyle primary={primary} type='submit' value='submit' name='submit'>
					<ButtonIconStyle>{iconComponent}</ButtonIconStyle>
					{name}
				</ButtonStyle>
			) : (
				<ButtonStyle primary={primary} type='submit' value='submit' name='submit'>
					{name}
				</ButtonStyle>
			)}
		</>
	);
}

export default ButtonComponent;
