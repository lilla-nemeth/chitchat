import {
  BubbleStyle,
  MessageText,
  MessageTimetamp,
  MessageMeta,
  MessageUsername,
} from '../../style';

function Message(props) {
  const { primary, timestamp, text, username } = props;

  return (
    <>
      <MessageMeta primary={primary}>
        <MessageUsername>{username}</MessageUsername>
        <MessageTimetamp>{timestamp}</MessageTimetamp>
      </MessageMeta>
      <BubbleStyle primary={primary}>
        <MessageText>{text}</MessageText>
      </BubbleStyle>
    </>
  );
}

export default Message;
