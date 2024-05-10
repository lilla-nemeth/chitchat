import { PrevMessageContainer, PrevContainer, PrevAuthor, PrevText, CloseButton } from '../styles';
import { PrevMessageProps } from '../types/propTypes';

function PrevMessage(props: PrevMessageProps) {
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
