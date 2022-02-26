import { ButtonContainer, StyledLink, ButtonStyle } from '../../Style';

function ButtonComponent(props) {
	const { to, primary, name } = props;

	return (
		<>
			<ButtonContainer>
				<StyledLink to={to}>
					<ButtonStyle primary={primary} type="submit" value="submit" name="submit">
						{name}
					</ButtonStyle>
				</StyledLink>
			</ButtonContainer>
		</>
	);
}

export default ButtonComponent;
