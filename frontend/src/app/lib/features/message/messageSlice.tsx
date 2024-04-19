import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Message, MessageState } from '@/app/types/reduxTypes';

const initialState: MessageState = {
	messages: [],
};

const messageSlice = createSlice({
	name: 'messages',
	initialState,
	reducers: {
		addMessage(state, action: PayloadAction<Message>) {
			state.messages.push(action.payload);
		},
		addReplyMessage(state, action: PayloadAction<Message>) {
			state.messages.push(action.payload);
		},
		receiveMessage(state, action: PayloadAction<Message>) {
			state.messages.push(action.payload);
		},
		receiveReplyMessage(state, action: PayloadAction<Message>) {
			state.messages.push(action.payload);
		},
	},
});

export const { addMessage, addReplyMessage, receiveMessage, receiveReplyMessage } = messageSlice.actions;

export default messageSlice.reducer;
