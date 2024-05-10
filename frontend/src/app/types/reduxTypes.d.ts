type AppStore = ReturnType<typeof makeStore>;
type RootState = ReturnType<AppStore['getState']>;
type AppDispatch = AppStore['dispatch'];

type Icon = JSX.Element;

interface Room {
	id: string;
	name: string | undefined;
	icon: Icon | undefined;
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
	id?: string;
	userId?: string | undefined;
	message?: string;
	author?: string | string[];
	timestamp?: string;
}

interface Message {
	id: string;
	userId: string | undefined;
	selectedMessageId?: SelectedMessage['id'];
	selectedMessageUserId?: SelectedMessage['userId'];
	selectedMessageMsg?: SelectedMessage['message'];
	selectedMessageAuthor?: SelectedMessage['author'];
	selectedMessageTimestamp?: SelectedMessage['timestamp'];
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

export {
	AppStore,
	RootState,
	CustomRootState,
	AppDispatch,
	Icon,
	Room,
	RoomState,
	User,
	UserState,
	Message,
	MessageState,
	SelectedMessage,
};
