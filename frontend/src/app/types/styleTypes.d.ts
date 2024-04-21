type Primary = string;

interface MainProps {
	$homemain?: strings;
	$mainheight?: string;
}

interface FormProps {
	$homeform?: string;
}

interface LabelProps {
	$homelabel?: string;
}

interface PrevMessageWrapperProps {
	$replyactive?: string;
}

interface InputProps {
	$primary?: Primary;
}

interface LogoProps {
	$primary?: Primary;
}

interface ButtonProps {
	$primary?: Primary;
}

interface RoomButtonContainerProps {
	$selected?: string;
}

interface StyledLinkProps {
	$primary?: Primary;
}

interface UsersContainerProps {
	$scrollvisible?: string;
}

interface UserBoxProps {
	$currentuser?: string;
	$scrollvisible?: string;
}

interface BubbleProps {
	$chatbot?: string;
}

interface MessageTextProps {
	isprevtext?: string;
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
