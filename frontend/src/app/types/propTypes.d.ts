import { ButtonProps, BubbleProps, RoomButtonContainerProps } from './styleTypes';
import { Room as RoomType, Message as MessageType } from './reduxTypes';

type MouseEventDiv = MouseEventHandler<HTMLDivElement>;
type ButtonType = 'button' | 'submit' | 'reset' | undefined;
type ButtonValue = string;
type ButtonName = string;
type ButtonText = string;

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
	text: ButtonText;
	type: ButtonType;
	value: ButtonValue;
	name: ButtonName;
}

interface SmallFormButtonProps {
	text?: ButtonText;
	isIcon?: boolean;
	icon?: Icon;
}

interface RoomButtonProps {
	value: ButtonValue;
	name: ButtonName;
	htmlFor: RoomType['name'];
	defaultChecked: boolean;
	type: 'radio';
	roomName: RoomType['name'];
	roomIcon: RoomType['icon'];
	id: RoomType['id'];
	name: RoomType['name'];
	value: RoomType['id'];
	onChange: ChangeEvent<HTMLInputElement>;
	$selected: RoomButtonContainerProps['$selected'];
}

export { MessageProps, MessageToolProps, PrevMessageProps, ChatRoomProps, FormButtonProps, SmallFormButtonProps, RoomButtonProps };
