import { ActiveRoomWrapper, ActiveRoomIcon, ActiveRoomText } from '../styles';
import { ChatRoomProps } from '../types/propTypes';

function ChatRoom(props: ChatRoomProps) {
	const { roomIcon, roomName } = props;
	return (
		<ActiveRoomWrapper>
			<ActiveRoomIcon>{roomIcon}</ActiveRoomIcon>
			<ActiveRoomText>{roomName}</ActiveRoomText>
		</ActiveRoomWrapper>
	);
}

export default ChatRoom;
