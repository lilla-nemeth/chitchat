import { useState } from 'react';
import {
	Bubble,
	MessageText,
	MessageTimestamp,
	MessageMeta,
	MessageUsername,
	MessageSubWrapper,
	MessageSubContainer,
	PrevMessageContainer,
	PrevAuthor,
	PrevText,
	PrevTimestamp,
	PrevContainer,
} from '../styles';
import MessageTool from './MessageTool';
import { MessageProps } from '../types/propTypes';

function Message(props: MessageProps) {
	const { $chatbot, timestamp, message, author, icon, onClick, prevMessage, prevAuthor, prevTimestamp } = props;

	const [iconVisibility, setIconVisibility] = useState<boolean>(false);

	return (
		<MessageSubWrapper>
			<MessageSubContainer onMouseOver={() => setIconVisibility(true)} onMouseLeave={() => setIconVisibility(false)}>
				<MessageMeta>
					<MessageTool iconVisibility={iconVisibility} icon={icon} onClick={onClick}></MessageTool>
					<MessageUsername>{author}</MessageUsername>
					<MessageTimestamp>{timestamp}</MessageTimestamp>
				</MessageMeta>
				{prevMessage ? (
					<Bubble $chatbot={$chatbot}>
						<PrevMessageContainer>
							<PrevContainer>
								<PrevAuthor>{prevAuthor}</PrevAuthor>
								<PrevText>{prevMessage}</PrevText>
							</PrevContainer>
							<PrevTimestamp>{prevTimestamp}</PrevTimestamp>
						</PrevMessageContainer>
						<MessageText $isprevtext={true}>{message}</MessageText>
					</Bubble>
				) : (
					<Bubble $chatbot={$chatbot}>
						<MessageText $isprevtext={false}>{message}</MessageText>
					</Bubble>
				)}
			</MessageSubContainer>
		</MessageSubWrapper>
	);
}
export default Message;
