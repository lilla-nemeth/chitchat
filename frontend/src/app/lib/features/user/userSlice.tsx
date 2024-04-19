import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserState } from '@/app/types/reduxTypes';

const initialState: UserState = {
	users: [],
};

const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		addUser(state, action: PayloadAction<User>) {
			state.users.push(action.payload);
		},
		sendUsers(state, action: PayloadAction<User[]>) {
			return {
				...state,
				users: action.payload,
			};
		},
	},
});

export const { addUser, sendUsers } = userSlice.actions;

export default userSlice.reducer;
