type Primary = boolean;

interface MainProps {
	homeMain?: boolean;
	mainHeight?: boolean;
}

interface FormProps {
	homeForm?: boolean;
}

interface LabelProps {
	homeLabel?: boolean;
}

interface PrevMessageWrapperProps {
	replyActive?: boolean;
}

interface InputProps {
	primary?: Primary;
}

interface LogoProps {
	primary?: Primary;
}

interface ButtonProps {
	primary?: Primary;
}

interface RoomButtonContainerProps {
	selected?: boolean;
}

interface StyledLinkProps {
	primary?: Primary;
}

interface UsersContainerProps {
	scrollVisible?: boolean;
}

interface UserBoxProps {
	currentUser?: boolean;
	scrollVisible?: boolean;
}

interface BubbleProps {
	chatBot?: boolean;
}

interface MessageTextProps {
	isPrevText?: boolean;
}

export {
	MainProps,
	FormProps,
	LabelProps,
	PrevMessageWrapperProps,
	InputProps,
	LogoProps,
	ButtonProps,
	RoomButtonContainerProps,
	StyledLinkProps,
	UsersContainerProps,
	UserBoxProps,
	BubbleProps,
	MessageTextProps,
};
