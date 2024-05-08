import { ButtonProps, BubbleProps, RoomButtonContainerProps, UserBoxProps, LabelProps, InputProps } from './styleTypes';
import { Room as RoomType, Message as MessageType, User as UserType } from './reduxTypes';

type MouseEventDiv = MouseEventHandler<HTMLDivElement>;
type SubmitButtonType = 'submit';
type RadioButtonType = 'radio';
type ButtonValue = string;
type ButtonName = string;
type ButtonText = string;
type InputChangeType = ChangeEvent<HTMLInputElement>;

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
	type: SubmitButtonType;
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
	type: RadioButtonType;
	roomName: RoomType['name'];
	roomIcon: RoomType['icon'];
	id: RoomType['id'];
	name: RoomType['name'];
	value: RoomType['id'];
	onChange: InputChangeType;
	$selected: RoomButtonContainerProps['$selected'];
}

interface TextInputProps {
	$homelabel: LabelProps['$homelabel'];
	$primary: InputProps['$primary'];
	onChange: InputChangeType;
	labelName: string;
	value: string;
	placeholder: string;
	name: string;
	required: boolean;
	autoFocus: boolean;
}

interface UserProps {
	$currentuser: UserBoxProps['$currentuser'];
	username: UserType['username'];
	$scrollvisible: UserBoxProps['$scrollvisible'];
}

export {
	MessageProps,
	MessageToolProps,
	PrevMessageProps,
	ChatRoomProps,
	FormButtonProps,
	SmallFormButtonProps,
	RoomButtonProps,
	TextInputProps,
	UserProps,
};
