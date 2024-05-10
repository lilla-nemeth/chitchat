import { ToolStyle } from '../styles';
import { MessageToolProps } from '../types/propTypes';

function MessageTool(props: MessageToolProps) {
	const { iconVisibility, icon, onClick } = props;
	return <>{iconVisibility && <ToolStyle onClick={onClick}>{icon}</ToolStyle>}</>;
}

export default MessageTool;
