import { UserBox } from '../styles';

function User(props: any) {
	const { currentUser, username, scrollVisible } = props;

	return (
		<>
			<UserBox currentUser={currentUser} scrollVisible={scrollVisible}>
				{username}
			</UserBox>
		</>
	);
}

export default User;
