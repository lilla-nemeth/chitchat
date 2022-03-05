import { StyledLink, ButtonStyle, SendIconStyle } from '../../Style';
import SendIcon from '../../assets/icons/SendIcon';

function ButtonComponent(props) {
	const { to, primary, name, isSend } = props;

	return (
		<>
			{isSend ? (
				<StyledLink to={to}>
					<ButtonStyle primary={primary} type='submit' value='submit' name='submit'>
						<SendIconStyle>
							<SendIcon />
						</SendIconStyle>
						{name}
					</ButtonStyle>
				</StyledLink>
			) : (
				<StyledLink to={to}>
					<ButtonStyle primary={primary} type='submit' value='submit' name='submit'>
						{name}
					</ButtonStyle>
				</StyledLink>
			)}
		</>
	);
}

export default ButtonComponent;
