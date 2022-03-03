import {
  RoomButtonStyle,
  RoomButtonRadio,
  RoomButtonIcon,
  RoomButtonText,
} from "../../Style";

function RoomButton(props) {
  const { roomName, roomIcon, id, name, value, checked, onChange } = props;

  return (
    <>
      <RoomButtonStyle>
        <RoomButtonRadio
          defaultChecked
          type="radio"
          id={id}
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
        />
        {/* <RoomButtonText $mode="dark">{roomName}</RoomButtonText> */}
        <RoomButtonText>{roomName}</RoomButtonText>
        <RoomButtonIcon>{roomIcon}</RoomButtonIcon>
      </RoomButtonStyle>
    </>
  );
}

export default RoomButton;
