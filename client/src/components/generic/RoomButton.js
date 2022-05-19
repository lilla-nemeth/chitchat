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
    className,
  } = props;

  return (
    <>
      <RoomButtonWrapper>
        <RoomButtonContainer>
          <RadioButton
            type={type}
            name={name}
            id={id}
            value={value}
            checked={checked}
            defaultChecked={defaultChecked}
            onChange={onChange}
            className={className}
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
