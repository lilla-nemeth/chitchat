import { UserBox } from "../../Style";

function User(props) {
  const { username } = props;

  return (
    <>
      <UserBox>{username}</UserBox>
    </>
  );
}

export default User;
