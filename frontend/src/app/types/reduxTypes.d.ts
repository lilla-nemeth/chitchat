type AppStore = ReturnType<typeof makeStore>;
type RootState = ReturnType<AppStore['getState']>;
type AppDispatch = AppStore['dispatch'];

interface Room {
	id: string;
	name: string;
	icon: () => JSX.Element;
}

interface RoomState {
	rooms: Room[];
}

export { AppStore, RootState, AppDispatch, Room, RoomState };
