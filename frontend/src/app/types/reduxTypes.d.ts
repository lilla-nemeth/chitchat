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
	room_id: string | string[];
	username: string | string[];
	timestamp: string;
}

interface UserState {
	users: User[];
}

interface SelectedMessage {
	id: string;
	selectedMessageUserId: string | undefined;
	selectedMessageMsg: string;
	selectedMessageAuthor: string | string[];
	selectedMessageTimestamp: string;
}

interface Message {
	id: string;
	userId: string | undefined;
	selectedMessageId?: SelectedMessage['selectedMessageId'];
	selectedMessageUserId?: SelectedMessage['selectedMessageUserId'];
	selectedMessageMsg?: SelectedMessage['selectedMessageMsg'];
	selectedMessageAuthor?: SelectedMessage['selectedMessageAuthor'];
	selectedMessageTimestamp?: SelectedMessage['selectedMessageTimestamp'];
	message: string;
	author: string | string[];
	timestamp: string;
}

interface MessageState {
	messages: Message[];
}

interface CustomRootState extends RootState {
	users: UserState;
	messages: MessageState;
	rooms: RoomState;
}

export { AppStore, RootState, CustomRootState, AppDispatch, Action, Room, RoomState, User, UserState, Message, MessageState };
