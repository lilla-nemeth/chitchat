import { RoomButtonStyle, RoomButtonIcon, RoomButtonText } from "../../Style";

function RoomButton(props) {
  const { roomName, roomIcon } = props;

  return (
    <>
      <RoomButtonStyle>
        <RoomButtonIcon>{roomIcon}</RoomButtonIcon>
        <RoomButtonText>{roomName}</RoomButtonText>
      </RoomButtonStyle>
    </>
  );
}

export default RoomButton;
