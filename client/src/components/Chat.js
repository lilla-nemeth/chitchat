import React from 'react';
import {
	Main,
	Wrapper,
	ButtonContainer,
	LeaveButton,
	StyledLink,
	ChatRoomContainer,
	UserContainer,
	UserBox,
	MessageContainer,
} from '../Style';

function Chat() {
	return (
		<Main>
			<ChatRoomContainer>
				<UserContainer>
					<UserBox>Place of user</UserBox>
				</UserContainer>
				<MessageContainer>
					<ButtonContainer>
						<StyledLink to="/">
							<LeaveButton type="submit" value="submit" name="submit">
								Leave the Room
							</LeaveButton>
						</StyledLink>
					</ButtonContainer>
					Place of messages
				</MessageContainer>
			</ChatRoomContainer>
		</Main>
	);
}

export default Chat;
