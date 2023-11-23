import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ChatPreview from "./ChatPreview";

function Chatlist() {
  const navigate = useNavigate();
  const [chatrooms, setChatrooms] = useState([]);

  useEffect(() => {
    setChatrooms([
      {
        chatroomId: "1",
        participantName: "백수진",
        participantId: "1",
        lastMessage: "안녕하세요다야이야이야오",
        lastMessageTime: "2021-09-01 12:00:00",
        lastMessageSender: "1",
        notReadCount: "1",
      },
      {
        chatroomId: "2",
        participantName: "박준우",
        participantId: "2",
        lastMessage: "안녕하세요구르트",
        lastMessageTime: "2021-09-01 12:00:00",
        lastMessageSender: "2",
        notReadCount: "2",
      },
      {
        chatroomId: "3",
        participantName: "박수련",
        participantId: "1",
        lastMessage: "안녕하세용가리",
        lastMessageTime: "2021-09-01 12:00:00",
        lastMessageSender: "1",
        notReadCount: "3",
      },
    ]);
  }, []);

  const handleChatPreviewClick = (chatroomId) => {
    navigate(`/chat/${chatroomId}`);
  };

  return (
    <>
      <TitleContainer>
        <Title>채팅</Title>
      </TitleContainer>
      <ChatroomListContainer>
        {chatrooms.map((c) => (
          <ChatPreview
            key={c}
            participantName={c.participantName}
            lastMessage={c.lastMessage}
            lastMessageTime={c.lastMessageTime}
            notReadCount={c.notReadCount}
            onClick={() => handleChatPreviewClick(c.chatroomId)}
          />
        ))}
      </ChatroomListContainer>
    </>
  );
}

export default Chatlist;

const TitleContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 10vh;
  width: 100%;
  margin-top: 1rem;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 1rem;
  margin-bottom: 2rem;
  text-align: center;
  color: orange;
`;

const ChatroomListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: 80vh;
  width: 100%;
`;
