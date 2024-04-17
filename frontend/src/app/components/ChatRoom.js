import { ActiveRoomWrapper, ActiveRoomIcon, ActiveRoomText } from '../styles';

function ChatRoom(props) {
	const { roomName, roomIcon } = props;
	return (
		<>
			<ActiveRoomWrapper>
				<ActiveRoomIcon>{roomIcon}</ActiveRoomIcon>
				<ActiveRoomText>{roomName}</ActiveRoomText>
			</ActiveRoomWrapper>
		</>
	);
}

export default ChatRoom;
