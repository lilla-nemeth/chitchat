import {
  BubbleStyle,
  MessageText,
  MessageTimetamp,
  MessageMeta,
  MessageUsername,
} from '../../style';

function Message(props) {
  const { chatBot, timestamp, text, username } = props;

  return (
    <>
      <MessageMeta>
        <MessageUsername>{username}</MessageUsername>
        <MessageTimetamp>{timestamp}</MessageTimetamp>
      </MessageMeta>
      <BubbleStyle chatBot={chatBot}>
        <MessageText>{text}</MessageText>
      </BubbleStyle>
    </>
  );
}

export default Message;
