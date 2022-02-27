import React from 'react';
import User from './generic/User';
import ButtonComponent from './generic/ButtonComponent';
import TextInput from './generic/TextInput';
import TextArea from './generic/TextArea';
import {
	Main,
	ChatRoom,
	UserWrapper,
	UsersContainer,
	RoomNameContainer,
	MessageWrapper,
	PartnerContainer,
	Partner,
	MessageContainer,
	MessageInputContainer,
	MessageInput,
	MessageButton,
} from '../Style';

function Chat() {
	return (
		<Main>
			<ChatRoom>
				<UserWrapper>
					<RoomNameContainer>RoomName</RoomNameContainer>
					<UsersContainer>
						<User />
					</UsersContainer>
				</UserWrapper>
				<MessageWrapper>
					<PartnerContainer>
						<Partner>Partner's name</Partner>
						<ButtonComponent to={'/'} name={'Leave'} />
					</PartnerContainer>
					<MessageContainer></MessageContainer>
					<MessageInputContainer>
						<MessageInput>
							<TextInput value={'Type your message'} />
							{/* <TextArea labelName={false} value={'Type your message'} /> */}
						</MessageInput>
						<MessageButton>
							<ButtonComponent to={false} name={'Send'} />
						</MessageButton>
					</MessageInputContainer>
				</MessageWrapper>
			</ChatRoom>
		</Main>
	);
}

export default Chat;
