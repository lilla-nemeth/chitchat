type Primary = boolean;

interface MainProps {
	homemain?: boolean;
	mainheight?: boolean;
}

interface FormProps {
	homeform?: boolean;
}

interface LabelProps {
	homelabel?: boolean;
}

interface PrevMessageWrapperProps {
	replyactive?: string;
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
	scrollvisible?: string;
}

interface UserBoxProps {
	currentuser?: boolean;
	scrollvisible?: string;
}

interface BubbleProps {
	chatbot?: boolean;
}

interface MessageTextProps {
	isprevtext?: boolean;
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
