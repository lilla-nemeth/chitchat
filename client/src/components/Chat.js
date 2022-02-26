import React from 'react';
import User from './generic/User';
import JoinLeaveButton from './generic/JoinLeaveButton';

import {
	Main,
	Wrapper,
	ButtonContainer,
	Button,
	StyledLink,
	ChatRoomContainer,
	UserContainer,
	UserBox,
	Label,
	Input,
	MessageContainer,
} from '../Style';
import TextArea from './generic/TextArea';

function Chat() {
	return (
		<Main>
			<ChatRoomContainer>
				<UserContainer>
					<User />
				</UserContainer>
				<MessageContainer>
					{/* 
					<Label>
						<Input type="text" value="username" name="username" required />
					</Label>
					<ButtonContainer>
						<StyledLink to="/chat">
							<Button primary type="submit" value="submit" name="submit">
								Send
							</Button>
						</StyledLink>
					</ButtonContainer>
					 */}
					<JoinLeaveButton to={'/'} name={'Leave'} />
					<TextArea labelName={false} value={'Type your message'} />
				</MessageContainer>
			</ChatRoomContainer>
		</Main>
	);
}

export default Chat;
