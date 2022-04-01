import { UserBox } from '../../style';

function User(props) {
	const { username } = props;

	return (
		<>
			<UserBox>{username}</UserBox>
		</>
	);
}

export default User;
