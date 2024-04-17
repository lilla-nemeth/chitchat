import { PrevMessageContainer, PrevContainer, PrevAuthor, PrevText, CloseButton } from '../styles';

function PrevMessage(props) {
	const { icon, author, message, onClick } = props;
	return (
		<PrevMessageContainer>
			<PrevContainer>
				<PrevAuthor>{author}</PrevAuthor>
				<PrevText>{message}</PrevText>
			</PrevContainer>
			<CloseButton onClick={onClick}>{icon}</CloseButton>
		</PrevMessageContainer>
	);
}

export default PrevMessage;
