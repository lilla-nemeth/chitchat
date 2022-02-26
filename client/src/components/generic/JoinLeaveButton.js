import { ButtonContainer, StyledLink, Button } from '../../Style';

function JoinLeaveButton(props) {
	const { to, primary, name } = props;

	return (
		<>
			<ButtonContainer>
				<StyledLink to={to}>
					<Button primary={primary} type="submit" value="submit" name="submit">
						{name}
					</Button>
				</StyledLink>
			</ButtonContainer>
		</>
	);
}

export default JoinLeaveButton;
