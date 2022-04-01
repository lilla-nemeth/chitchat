import { ActiveRoomWrapper, ActiveRoomIcon, ActiveRoomText } from '../../style';

function ActiveRoomComponent(props) {
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

export default ActiveRoomComponent;
