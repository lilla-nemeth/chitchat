import { UserBox } from '../styles';

function User(props: any) {
	const { $currentuser, username, $scrollvisible } = props;

	return (
		<UserBox $currentuser={$currentuser} $scrollvisible={$scrollvisible}>
			{username}
		</UserBox>
	);
}

export default User;
