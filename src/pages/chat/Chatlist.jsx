import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatPreview from '../components/chat/ChatPreview';
import {
  ChatroomListContainer,
  PageContainer,
} from '../components/chat/ChatStyle';
import axiosInstance from '../services/api';

function ChatList() {
  const navigate = useNavigate();
  const [chatrooms, setChatrooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance.get('/chat/chatrooms/').then((res) => {
      console.log(res.data.data);
      setChatrooms(res.data.data);
    });
  }, []);

  const handleChatPreviewClick = (chatroomId) => {
    console.log(chatroomId);
    navigate(`/chatroom/${chatroomId}`);
  };

  return (
    <>
      { loading ? (
        <PageContainer>
          <ChatroomListContainer>
            { chatrooms.map((c) => (
              <ChatPreview
                key={ c.id }
                participantName={ c.opponentUsername }
                lastMessage={ c.lastContent }
                lastMessageTime={ c.lastDate }
                notReadCount={ c.notReadMessageCount }
                onClick={ () => handleChatPreviewClick(c.id) }
              />
            )) }
          </ChatroomListContainer>
        </PageContainer>
      ) : (
        <div>로딩중</div>
      ) }
    </>
  );
}

export default ChatList;