import { ChatSmallButton, ButtonIconStyle } from '../../style';

function SmallButton(props) {
  const { formButton, primary, name, isIcon, icon, onClick } = props;

  return (
    <>
      <ChatSmallButton
        onClick={onClick}
        primary={primary}
        formButton={formButton}
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

export default SmallButton;
