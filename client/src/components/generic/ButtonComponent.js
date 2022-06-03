import { ButtonStyle } from '../../style';

function ButtonComponent(props) {
  const { primary, name, onClick } = props;

  return (
    <>
      <ButtonStyle
        onClick={onClick}
        primary={primary}
        type='submit'
        value='submit'
        name='submit'
      >
        {name}
      </ButtonStyle>
    </>
  );
}

export default ButtonComponent;
