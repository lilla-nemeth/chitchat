import { ChatSmallButton, ButtonIconStyle } from '../../style';

function SmallButton(props) {
  const { formButton, primary, name, isIcon, iconComponent, onClick } = props;

  return (
    <>
      {isIcon ? (
        <ChatSmallButton
          onClick={onClick}
          primary={primary}
          formButton={formButton}
          type='submit'
          value='submit'
          name='submit'
        >
          <ButtonIconStyle>{iconComponent}</ButtonIconStyle>
          {name}
        </ChatSmallButton>
      ) : (
        <ChatSmallButton
          onClick={onClick}
          primary={primary}
          formButton={formButton}
          type='submit'
          value='submit'
          name='submit'
        >
          {name}
        </ChatSmallButton>
      )}
    </>
  );
}

export default SmallButton;
