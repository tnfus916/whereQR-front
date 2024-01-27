import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatPreview from '../components/chat/ChatPreview';
import {
  ChatroomListContainer,
  PageContainer,
} from '../components/chat/ChatStyle';

function ChatList() {
  const navigate = useNavigate();
  const [chatrooms, setChatrooms] = useState([]);

  useEffect(() => {
    setChatrooms([
      {
        chatroomId: '1',
        participantName: '백수진',
        participantId: '1',
        lastMessage: '안녕하세요다야이야이야오',
        lastMessageTime: '01.01 12:02',
        lastMessageSender: '1',
        notReadCount: '1',
      },
      {
        chatroomId: '2',
        participantName: '박준우',
        participantId: '2',
        lastMessage: '안녕하세요구르트',
        lastMessageTime: '01.02 18:37',
        lastMessageSender: '2',
        notReadCount: '2',
      },
      {
        chatroomId: '3',
        participantName: '박수련',
        participantId: '1',
        lastMessage: '안녕하세용가리',
        lastMessageTime: '01.05 11:39',
        lastMessageSender: '1',
        notReadCount: '3',
      },
    ]);
  }, []);

  const handleChatPreviewClick = (chatroomId) => {
    navigate(`/chatroom/${chatroomId}`);
  };

  return (
    <PageContainer>
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
    </PageContainer>
  );
}

export default ChatList;
