import { RoomButtonStyle, RadioButton, RoomButtonIcon, RoomButtonText, RoomButtonInner, HiddenRadioButton } from '../../Style';

function RoomButton(props) {
	const { defaultChecked, roomName, roomIcon, id, name, value, checked, onChange } = props;

	return (
		<>
			<RadioButton defaultChecked={defaultChecked} type='radio' id={id} name={name} value={value} checked={checked} onChange={onChange} />
			<RoomButtonInner>
				<RoomButtonStyle>
					<RoomButtonIcon>{roomIcon}</RoomButtonIcon>
					<RoomButtonText>{roomName}</RoomButtonText>
				</RoomButtonStyle>
			</RoomButtonInner>
			{/* <RoomButtonText $mode="dark">{roomName}</RoomButtonText> */}
		</>
	);
}

export default RoomButton;
