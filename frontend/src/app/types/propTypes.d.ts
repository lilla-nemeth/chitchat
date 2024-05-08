import { BubbleProps } from './styleTypes';
import { Room as RoomType } from './reduxTypes';

// TODO: change any types, use type defintions from reduxTypes
interface MessageProps {
	$chatbot: BubbleProps['$chatbot'];
	timestamp: string;
	text: string;
	username: string | string[];
	icon: JSX.Element;
	onClick: MouseEventHandler<HTMLDivElement>;
	prevMessage: string | undefined;
	prevAuthor: string | string[] | undefined;
	prevTimestamp: string | undefined;
}

// TODO: change any type
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
