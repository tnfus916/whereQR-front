import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

function ChatPreview(props) {
  return (
    <ChatPreviewContainer onClick={props.onClick}>
      <LeftContainer>
        <ParticipantName>{props.participantName}</ParticipantName>
        <LastMessage>{props.lastMessage}</LastMessage>
      </LeftContainer>
      <RightContainer>
        <LastMessageTime>{props.lastMessageTime}</LastMessageTime>
        <NotReadCount>{props.notReadCount}</NotReadCount>
      </RightContainer>
    </ChatPreviewContainer>
  );
}

export default ChatPreview;

ChatPreview.propTypes = {
  participantName: PropTypes.string.isRequired,
  lastMessage: PropTypes.string.isRequired,
  lastMessageTime: PropTypes.string.isRequired,
  notReadCount: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const ChatPreviewContainer = styled.div`
  display: flex;
  /* align-items: center; */
  height: 10vh;
  width: 100vw;
  padding: 15px;
  border-bottom: 1px solid #e0e0e0;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 70%;
  /* border: 1px solid red; */
`;

const ParticipantName = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 4vh;
  font-size: 1.1rem;
  font-weight: bold;
`;

const LastMessage = styled.div`
  display: flex;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  height: 100%;
  width: 30%;
  /* border: 1px solid blue; */
`;

const LastMessageTime = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  height: 4vh;
  width: 100%;
  font-size: 0.8rem;
  font-weight: bold;
  /* border: 1px solid green; */
`;

const NotReadCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  width: 20%;
  font-size: 0.8rem;
  font-weight: bold;
  /* border: 1px solid green; */
`;
