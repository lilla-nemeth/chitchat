import { UserBox } from '../styles';
import { UserProps } from '../types/propTypes';

function User(props: UserProps) {
	const { $currentuser, username, $scrollvisible } = props;

	return (
		<UserBox $currentuser={$currentuser} $scrollvisible={$scrollvisible}>
			{username}
		</UserBox>
	);
}

export default User;
