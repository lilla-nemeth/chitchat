import { BubbleProps } from './styleTypes';
import { Room as RoomType, Message as MessageType } from './reduxTypes';

interface MessageProps {
	$chatbot: BubbleProps['$chatbot'];
	timestamp: MessageType['timestamp'];
	message: MessageType['message'];
	author: MessageType['author'];
	icon: RoomType['icon'];
	onClick: MouseEventHandler<HTMLDivElement>;
	prevMessage: MessageType['selectedMessageMsg'];
	prevAuthor: MessageType['selectedMessageAuthor'];
	prevTimestamp: MessageType['selectedMessageTimestamp'];
}

interface MessageToolProps {
	iconVisibility: boolean;
	icon: MessageProps['icon'];
	onClick: MessageProps['onClick'];
}

interface ChatRoomProps {
	roomName: RoomType['name'];
	roomIcon: RoomType['icon'];
}

interface FormButtonProps {
	$primary: boolean;
	text: string;
	type: 'button' | 'submit' | 'reset' | undefined;
	value: string;
	name: string;
}

export { MessageProps, MessageToolProps, ChatRoomProps, FormButtonProps };
