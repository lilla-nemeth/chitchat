import { ToolStyle } from '../../style';

function MessageTool(props) {
  const { iconVisibility, icon, onClick } = props;
  return (
    <>{iconVisibility && <ToolStyle onClick={onClick}>{icon}</ToolStyle>}</>
  );
}

export default MessageTool;
