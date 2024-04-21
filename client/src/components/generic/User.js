import { UserBox } from '../../style';

function User(props) {
	const { $currentuser, username, $scrollvisible } = props;

	return (
		<>
			<UserBox $currentuser={$currentuser} $scrollvisible={$scrollvisible}>
				{username}
			</UserBox>
		</>
	);
}

export default User;
