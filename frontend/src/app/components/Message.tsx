import React, { useState } from 'react';
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

function Message(props: any) {
	const { chatBot, timestamp, text, username, icon, onClick, isResponseMessage, prevMessage, prevAuthor, prevTimestamp } = props;

	const [iconVisibility, setIconVisibility] = useState(false);

	return isResponseMessage ? (
		<MessageSubWrapper>
			<MessageSubContainer onMouseOver={() => setIconVisibility(true)} onMouseLeave={() => setIconVisibility(false)}>
				<MessageMeta>
					<MessageTool iconVisibility={iconVisibility} icon={icon} onClick={onClick}></MessageTool>
					<MessageUsername>{username}</MessageUsername>
					<MessageTimestamp>{timestamp}</MessageTimestamp>
				</MessageMeta>
				<Bubble chatBot={chatBot}>
					<PrevMessageContainer>
						<PrevContainer>
							<PrevAuthor>{prevAuthor}</PrevAuthor>
							<PrevText>{prevMessage}</PrevText>
						</PrevContainer>
						<PrevTimestamp>{prevTimestamp}</PrevTimestamp>
					</PrevMessageContainer>
					<MessageText isPrevText={true}>{text}</MessageText>
				</Bubble>
			</MessageSubContainer>
		</MessageSubWrapper>
	) : (
		<MessageSubWrapper>
			<MessageSubContainer onMouseOver={() => setIconVisibility(true)} onMouseLeave={() => setIconVisibility(false)}>
				<MessageMeta>
					<MessageTool iconVisibility={iconVisibility} icon={icon} onClick={onClick}></MessageTool>
					<MessageUsername>{username}</MessageUsername>
					<MessageTimestamp>{timestamp}</MessageTimestamp>
				</MessageMeta>
				<Bubble chatBot={chatBot}>
					<MessageText isPrevText={false}>{text}</MessageText>
				</Bubble>
			</MessageSubContainer>
		</MessageSubWrapper>
	);
}
export default Message;
