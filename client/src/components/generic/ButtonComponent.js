import { ButtonContainer, StyledLink, ButtonStyle } from '../../Style';

function ButtonComponent(props) {
	const { to, primary, name } = props;

	return (
		<>
			<StyledLink to={to}>
				<ButtonStyle primary={primary} type="submit" value="submit" name="submit">
					{name}
				</ButtonStyle>
			</StyledLink>
		</>
	);
}

export default ButtonComponent;
