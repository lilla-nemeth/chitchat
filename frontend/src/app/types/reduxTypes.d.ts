type AppStore = ReturnType<typeof makeStore>;
type RootState = ReturnType<AppStore['getState']>;
type AppDispatch = AppStore['dispatch'];

interface Action {
	type: string;
	payload?: any;
}

interface Room {
	id: string;
	name: string;
	icon: JSX.Element;
}

interface RoomState {
	rooms: Room[];
}

interface User {
	id: string | null | undefined;
	room_id: string | null | undefined;
	username: string | null | undefined;
	timestamp: string;
}

interface UserState {
	users: User[];
}

interface Message {
	id: string;
	userId: string;
	message: string;
	author: string;
	timestamp: number;
}

interface MessageState {
	messages: Message[];
}

export { AppStore, RootState, AppDispatch, Action, Room, RoomState, User, UserState, Message, MessageState };
