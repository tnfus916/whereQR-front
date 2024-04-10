import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import * as StompJs from '@stomp/stompjs';
import {
  CounterPartBubble,
  CounterPartBubbleContainer,
  MyBubble,
  MyBubbleContainer,
  PageContainer,
} from '../components/chat/ChatStyle';
import axiosInstance from '../services/api';

export const ChatContainer = styled.div`
  height: 93%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin-top: 1rem;
  overflow-y: auto;
`;

export const InputContainer = styled.div`
  height: 7%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 10%;
  padding: 10px;
`;

export const InputBox = styled.input`
  height: 90%;
  width: 77%;
  border: none;
  border-radius: 20px;
  background-color: #f5f5f5;
  outline: none;
  font-size: 16px;
  font-weight: 600;
  color: #000;
`;

export const Button = styled.button`
  height: 90%;
  width: 16%;
  background-color: rgb(124, 172, 255);
  border: none;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  color: #000;
`;

function ChatRoom() {
  const [connected, setConnected] = useState(false);

  const currentUrl = window.location.href;
  const chatroomId = currentUrl.split('/')[4];

  const [client, setClient] = useState(null);
  const [chat, setChat] = useState('');
  const [oldchat, setOldChat] = useState([]);
  const [chatlist, setChatList] = useState([]);
  const [senderId, setSenderId] = useState('');

  const connect = () => {
    const clientdata = new StompJs.Client({
      brokerURL: import.meta.env.VITE_CHAT_ENDPOINT,
      // connectHeaders: {
      //   // 토큰을 받아 헤더에 실어서 보내기
      //   login: '',
      //   passcode: 'password',
      // },
      debug: function (str) {
        console.log(str);
      },
      reconnectDelay: 60000, // 1분마다 자동 재연결
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
    });

    clientdata.onConnect = () => {
      console.log('채팅이 연결되었습니다.');
      setConnected(true);
      clientdata.subscribe('/subscribe/' + chatroomId, callback);
    };

    clientdata.activate();
    setClient(clientdata);
  };

  const callback = (message) => {
    let messageContent = message.body;
    let senderMatch = messageContent.match(/sender=([0-9a-f-]+)/);
    let receiverMatch = messageContent.match(/receiver=([0-9a-f-]+)/);
    let contentMatch = messageContent.match(/content='([^']+)'/);

    if (senderMatch && receiverMatch && contentMatch) {
      let sender = senderMatch[1];
      let receiver = receiverMatch[1];
      let content = contentMatch[1];

      // 추출된 값을 이용
      console.log(sender); // 출력: 3abc3278-96ed-4899-8dc5-98f3b5682481
      console.log(receiver); // 출력: 1e73f73b-c5e9-4e50-b064-22f5c30faa3f
      console.log(content); // 출력: [object Object]
      setChatList((chats) => [
        ...chats,
        { senderId: sender, content: content },
      ]);
    }
  };

  const disconnect = () => {
    if (client === null) {
      return;
    }
    client.off;
    console.log('채팅이 종료되었습니다.');
    setConnected(false);
  };

  useEffect(() => {
    // memberId 불러오기
    axiosInstance.get('/member/me').then((res) => {
      setSenderId(res.data.data);
    });

    axiosInstance
      .get('/chat/messages/', {
        params: {
          chatroomId: chatroomId,
        },
      })
      .then((res) => {
        console.log(res.data.data);
        setOldChat(res.data.data);
      });

    connect();

    return () => {
      disconnect();
    };
  }, []);

  const onChangeChat = (e) => {
    setChat(e.target.value);
  };

  const sendChat = () => {
    // if (chat === '') {
    //   return;
    // }

    console.log(chat);
    client.publish({
      destination: '/publish/send/' + senderId + '/' + chatroomId,
      body: chat,
    });

    setChat('');
  };

  return (
    <>
      <PageContainer>
        <ChatContainer>
          { oldchat.map((c) =>
            c.senderId === senderId ? (
              <MyBubbleContainer key={ c.id }>
                <MyBubble>{ c.content }</MyBubble>
              </MyBubbleContainer>
            ) : (
              <CounterPartBubbleContainer key={ c.id }>
                <CounterPartBubble>{ c.content }</CounterPartBubble>
              </CounterPartBubbleContainer>
            )
          ) }
          { chatlist.map((c, index) =>
            c.senderId === senderId ? (
              <MyBubbleContainer key={ index }>
                <MyBubble>{ c.content }</MyBubble>
              </MyBubbleContainer>
            ) : (
              <CounterPartBubbleContainer key={ index }>
                <CounterPartBubble>{ c.content }</CounterPartBubble>
              </CounterPartBubbleContainer>
            )
          ) }
        </ChatContainer>
        <InputContainer>
          <InputBox value={ chat } required onChange={ onChangeChat } />
          <Button onClick={ sendChat }>전송</Button>
        </InputContainer>
      </PageContainer>
    </>
  );
}

export default ChatRoom;