import { SendButton, ButtonIconStyle } from '../../style';

function SmallButton(props) {
  const { primary, name, isIcon, iconComponent, onClick } = props;

  return (
    <>
      {isIcon ? (
        <SendButton
          onClick={onClick}
          primary={primary}
          type='submit'
          value='submit'
          name='submit'
        >
          <ButtonIconStyle>{iconComponent}</ButtonIconStyle>
          {name}
        </SendButton>
      ) : (
        <SendButton
          onClick={onClick}
          primary={primary}
          type='submit'
          value='submit'
          name='submit'
        >
          {name}
        </SendButton>
      )}
    </>
  );
}

export default SmallButton;
