import { ButtonProps, BubbleProps } from './styleTypes';
import { Room as RoomType, Message as MessageType } from './reduxTypes';

type MouseEventDiv = MouseEventHandler<HTMLDivElement>;

interface MessageProps {
	$chatbot: BubbleProps['$chatbot'];
	timestamp: MessageType['timestamp'];
	message: MessageType['message'];
	author: MessageType['author'];
	icon: Icon;
	onClick: MouseEventDiv;
	prevMessage: MessageType['selectedMessageMsg'];
	prevAuthor: MessageType['selectedMessageAuthor'];
	prevTimestamp: MessageType['selectedMessageTimestamp'];
}

interface MessageToolProps {
	iconVisibility: boolean;
	icon: MessageProps['icon'];
	onClick: MessageProps['onClick'];
}

interface PrevMessageProps {
	icon: Icon;
	author: MessageType['selectedMessageAuthor'];
	message: MessageType['message'] | undefined;
	onClick: MouseEventDiv;
}

interface ChatRoomProps {
	roomName: RoomType['name'];
	roomIcon: RoomType['icon'];
}

interface FormButtonProps {
	$primary: ButtonProps['$primary'];
	text: string;
	type: 'button' | 'submit' | 'reset' | undefined;
	value: string;
	name: string;
}

export { MessageProps, MessageToolProps, PrevMessageProps, ChatRoomProps, FormButtonProps };
