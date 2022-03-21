import { ButtonStyle, ButtonIconStyle } from '../../Style';

function ButtonComponent(props) {
  const { primary, name, isIcon, iconComponent, onClick } = props;

  return (
    <>
      {isIcon ? (
        <ButtonStyle
          onClick={onClick}
          primary={primary}
          type='submit'
          value='submit'
          name='submit'
        >
          <ButtonIconStyle>{iconComponent}</ButtonIconStyle>
          {name}
        </ButtonStyle>
      ) : (
        <ButtonStyle
          onClick={onClick}
          primary={primary}
          type='submit'
          value='submit'
          name='submit'
        >
          {name}
        </ButtonStyle>
      )}
    </>
  );
}

export default ButtonComponent;
