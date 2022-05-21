import {
  RoomLabel,
  RadioButton,
  RoomIcon,
  RoomText,
  RoomButtonContainer,
  RoomButtonWrapper,
} from '../../style';

function RoomButton(props) {
  const {
    htmlFor,
    defaultChecked,
    type,
    roomName,
    roomIcon,
    id,
    name,
    value,
    checked,
    onChange,
    selected,
  } = props;

  return (
    <>
      <RoomButtonWrapper>
        <RoomButtonContainer selected={selected}>
          <RadioButton
            type={type}
            name={name}
            id={id}
            value={value}
            checked={checked}
            defaultChecked={defaultChecked}
            onChange={onChange}
          />
          <RoomLabel htmlFor={htmlFor}>
            <RoomIcon>{roomIcon}</RoomIcon>
            <RoomText>{roomName}</RoomText>
          </RoomLabel>
        </RoomButtonContainer>
      </RoomButtonWrapper>
    </>
  );
}

export default RoomButton;
