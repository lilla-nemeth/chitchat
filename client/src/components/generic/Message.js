import React, { useState } from 'react';
import {
  BubbleStyle,
  MessageText,
  MessageTimetamp,
  MessageMeta,
  MessageUsername,
  MessageSubWrapper,
  MessageSubContainer,
} from '../../style';
import MessageTool from './MessageTool';

function Message(props) {
  const { chatBot, timestamp, text, username, icon, onClick } = props;

  const [iconVisibility, setIconVisibility] = useState(false);

  return (
    <MessageSubWrapper>
      <MessageSubContainer
        onMouseOver={() => setIconVisibility(true)}
        onMouseLeave={() => setIconVisibility(false)}
      >
        <MessageMeta>
          <MessageTool
            iconVisibility={iconVisibility}
            icon={icon}
            onClick={onClick}
          ></MessageTool>
          <MessageUsername>{username}</MessageUsername>
          <MessageTimetamp>{timestamp}</MessageTimetamp>
        </MessageMeta>
        <BubbleStyle chatBot={chatBot}>
          <MessageText>{text}</MessageText>
        </BubbleStyle>
      </MessageSubContainer>
    </MessageSubWrapper>
  );
}

export default Message;
