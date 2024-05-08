import React from 'react';
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
	const { $chatbot, timestamp, text, username, icon, onClick, prevMessage, prevAuthor, prevTimestamp, iconVisibility, setIconVisibility } =
		props;

	return (
		<MessageSubWrapper>
			<MessageSubContainer onMouseOver={() => setIconVisibility(true)} onMouseLeave={() => setIconVisibility(false)}>
				<MessageMeta>
					<MessageTool iconVisibility={iconVisibility} icon={icon} onClick={onClick}></MessageTool>
					<MessageUsername>{username}</MessageUsername>
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
						<MessageText $isprevtext={true}>{text}</MessageText>
					</Bubble>
				) : (
					<Bubble $chatbot={$chatbot}>
						<MessageText $isprevtext={false}>{text}</MessageText>
					</Bubble>
				)}
			</MessageSubContainer>
		</MessageSubWrapper>
	);
}
export default Message;
