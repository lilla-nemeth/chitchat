import { UserBox } from '../../style';

function User(props) {
  const { username, scrollVisible } = props;

  return (
    <>
      <UserBox scrollVisible={scrollVisible}>{username}</UserBox>
    </>
  );
}

export default User;
