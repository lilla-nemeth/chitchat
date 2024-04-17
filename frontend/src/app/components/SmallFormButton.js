import { ChatSmallButton, ButtonIconStyle } from '../../style';

function SmallFormButton(props) {
  const { primary, name, isIcon, icon, onClick } = props;

  return (
    <>
      <ChatSmallButton
        onClick={onClick}
        primary={primary}
        type='submit'
        value='submit'
        name='submit'
      >
        {isIcon && <ButtonIconStyle>{icon}</ButtonIconStyle>}
        {name}
      </ChatSmallButton>
    </>
  );
}

export default SmallFormButton;
