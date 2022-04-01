import {
	RoomButtonStyle,
	RadioButtonContainer,
	RadioButton,
	RoomButtonIcon,
	RoomButtonText,
	RoomButtonContainer,
	RoomButtonWrapper,
	HiddenRadioButton,
} from '../../style';

function RoomButton(props) {
	const { defaultChecked, roomName, roomIcon, id, name, value, checked, onChange } = props;

	return (
		<>
			<RoomButtonWrapper>
				<RadioButtonContainer>
					<RadioButton
						defaultChecked={defaultChecked}
						type='radio'
						id={id}
						name={name}
						value={value}
						checked={checked}
						onChange={onChange}
					/>
				</RadioButtonContainer>
				<RoomButtonContainer>
					<RoomButtonStyle>
						<RoomButtonIcon>{roomIcon}</RoomButtonIcon>
						<RoomButtonText>{roomName}</RoomButtonText>
					</RoomButtonStyle>
				</RoomButtonContainer>
				{/* <RoomButtonText $mode="dark">{roomName}</RoomButtonText> */}
			</RoomButtonWrapper>
		</>
	);
}

export default RoomButton;
