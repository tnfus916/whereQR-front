import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';

import { getChatRoomList } from '../../services/api';

import ChatPreview from '../../components/chat/ChatPreview';
import {
  ChatroomListContainer,
  PageContainer,
} from '../../components/chat/ChatStyle';

function ChatList() {
  const navigate = useNavigate();
  const chatlist = useQuery('chatList', getChatRoomList).data;

  chatlist?.sort((a, b) => new Date(b.lastDate) - new Date(a.lastDate));
  console.log(chatlist);

  const handleChatPreviewClick = (chatroomId) => {
    console.log(chatroomId);
    navigate(`/chatroom/${chatroomId}`);
  };

  return (
    <>
      { chatlist && (
        <PageContainer>
          <ChatroomListContainer>
            { chatlist?.map((c) => (
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
      ) }
    </>
  );
}

export default ChatList;