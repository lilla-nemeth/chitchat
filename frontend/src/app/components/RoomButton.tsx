import { RoomLabel, RadioButton, RoomIcon, RoomText, RoomButtonContainer, RoomButtonWrapper } from '../styles';
import { RoomButtonProps } from '../types/propTypes';

function RoomButton(props: RoomButtonProps) {
	const { htmlFor, defaultChecked, type, roomName, roomIcon, id, name, value, onChange, $selected } = props;

	return (
		<RoomButtonWrapper>
			<RoomButtonContainer $selected={$selected}>
				<RadioButton type={type} name={name} id={id} value={value} defaultChecked={defaultChecked} onChange={onChange} />
				<RoomLabel htmlFor={htmlFor}>
					<RoomIcon>{roomIcon}</RoomIcon>
					<RoomText>{roomName}</RoomText>
				</RoomLabel>
			</RoomButtonContainer>
		</RoomButtonWrapper>
	);
}

export default RoomButton;
