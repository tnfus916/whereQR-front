import * as StompJs from '@stomp/stompjs';
import { useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';

import { getChatHistory, getUserChatId } from '../../services/api';

import {
  ChatContainer,
  CounterPartBubble,
  CounterPartBubbleContainer,
  InputBox,
  InputContainer,
  MyBubble,
  MyBubbleContainer,
  PageContainer,
  Button,
} from '../../components/chat/ChatStyle';
function ChatRoom() {
  const chatroomId = window.location.href.split('/')[4];

  const { isLoading: isUserIdLoading, data: userId } = useQuery(
    'userChatId',
    getUserChatId
  );
  const { isLoading: isChatLoading, data: chatData } = useQuery(
    'chatHistory',
    () => getChatHistory(chatroomId)
  );

  const client = useRef(null);

  const [chat, setChat] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const scrollY = useRef(); // 스크롤값을 저장하기 위한 상태

  useEffect(() => {
    scrollToBottom();
  }, [chatData]);

  const scrollToBottom = () => {
    if (scrollY.current) {
      scrollY.current.scrollTop = scrollY.current.scrollHeight;
    }
  };

  useEffect(() => {
    if (!isChatLoading && chatData && !isUserIdLoading && userId) {
      connect(userId);
    }

    return () => {
      disconnect();
    };
  }, [userId, chatData]);

  const connect = (userId) => {
    const clientdata = new StompJs.Client({
      brokerURL: import.meta.env.VITE_CHAT_ENDPOINT,
      reconnectDelay: 60000, // 1분마다 자동 재연결
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      onConnect: () => {
        console.log('채팅이 연결되었습니다.');

        client.current.subscribe('/subscribe/' + chatroomId, (message) =>
          callback({
            message: message,
            userId: userId,
          })
        );
      },
    });

    client.current = clientdata;
    clientdata.activate();
  };

  const callback = async (data) => {
    const messageContent = await data.message.body;
    const id = messageContent.match(/id=([0-9a-f-]+)/)[1];
    const sender = messageContent.match(/sender=([0-9a-f-]+)/)[1];
    const receiver = messageContent.match(/receiver=([0-9a-f-]+)/)[1];
    const isRead = messageContent.match(/isRead=([a-z]+)/)[1];
    const content = messageContent.match(/content='([^']+)'/)[1];

    console.log("get", sender);
    console.log(receiver);
    console.log(id);
    console.log(content);
    console.log("i", isRead);

    // 내가 보낸 메세지가 아니라면 읽음 처리, 맞다면 읽음 처리 확인 후 읽었다면 읽음 처리
    if (sender !== data.userId) {
      console.log('read');

      client.current.publish(
        {
          destination:
            '/publish/read/' + receiver + '/' + chatroomId + '/' + id,
        },
        (data) => {
          console.log(data);
          console.log('읽음 처리 완료');
        }
      );
    } else {
      client.current.subscribe(
        '/subscribe/' + chatroomId + '/' + id,
        async (data) => {
          const messageContent = await data.body;
          const id = messageContent.match(/id=([0-9a-f-]+)/)[1];
          const isRead = messageContent.match(/isRead=([a-z]+)/)[1];

          console.log('my message subscribe', id, isRead, chatroomId);
          if (isRead === 'true') {
            chatData.find((c) => c.id === id).isRead = true;
          }
        }
      );
    }

    chatData.push({
      id: id,
      senderId: sender,
      receiverId: receiver,
      content: content,
      isRead: isRead,
    });
  };

  const disconnect = () => {
    if ((client === null) | (client === undefined)) {
      return;
    }
    client.off;
    console.log('채팅이 종료되었습니다.');
  };

  const onChangeChat = (e) => {
    console.log(e.target.value);
    setChat(e.target.value);
    if (e.target.value === '') {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  };

  const sendChat = () => {
    client.current.publish({
      destination: '/publish/send/' + userId + '/' + chatroomId,
      body: chat,
    });

    setButtonDisabled(true);
    setChat('');
  };

  return (
    <>
      <PageContainer ref={ scrollY }>
        <ChatContainer>
          { chatData?.map((c) =>
            c.senderId === userId ? (
              <MyBubbleContainer key={ c.id }>
                <span>{ c.isRead ? "" : 1 }</span>
                <MyBubble>{ c.content }</MyBubble>
              </MyBubbleContainer>
            ) : (
              <CounterPartBubbleContainer key={ c.id }>
                <CounterPartBubble>{ c.content }</CounterPartBubble>
              </CounterPartBubbleContainer>
            )
          ) }
        </ChatContainer>
        <InputContainer>
          <InputBox value={ chat } required onChange={ onChangeChat } />
          <Button onClick={ sendChat } disabled={ buttonDisabled }>전송</Button>
        </InputContainer>
      </PageContainer>
    </>
  );
}

export default ChatRoom;
