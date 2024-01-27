import { useEffect, useState, useRef } from 'react';
import * as StompJs from '@stomp/stompjs';
import {
  Button,
  ChatContainer,
  CounterPartBubble,
  CounterPartBubbleContainer,
  InputBox,
  InputContainer,
  MyBubble,
  MyBubbleContainer,
  PageContainer,
} from '../components/chat/ChatStyle';

function ChatRoom() {
  const [connected, setConnected] = useState(false);

  const currentUrl = window.location.href;
  const chatroomId = currentUrl.split('/')[4];

  const [client, changeClient] = useState(null);
  const [chat, setChat] = useState('');
  const [chatlist, setChatList] = useState([
    // {
    //   chat: '안녕하세요! 에어팟 주웠는데 어떻게 전달해드리면 될까요?',
    //   sender: '2',
    // },
    // {
    //   chat: '헉ㅜ 감사합니다.. 혹시 충무로역 유실물 센터에 맡겨주실 수 있을까요?',
    //   sender: '1e73f73b-c5e9-4e50-b064-22f5c30faa3f',
    // },
    // {
    //   chat: '넵',
    //   sender: '2',
    // },
    // {
    //   chat: '감사합니다!',
    //   sender: '1e73f73b-c5e9-4e50-b064-22f5c30faa3f',
    // },
  ]);

  const connect = () => {
    const clientdata = new StompJs.Client({
      brokerURL: 'ws://localhost:8080/chat',
      connectHeaders: {
        // 토큰을 받아 헤더에 실어서 보내기
        login: '',
        passcode: 'password',
      },
      debug: function (str) {
        console.log(str);
      },
      reconnectDelay: 60000, // 1분마다 자동 재연결
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
    });

    clientdata.onConnect = function () {
      setConnected(true);
      clientdata.subscribe('/message/' + chatroomId, callback);
    };
    clientdata.activate();
    changeClient(clientdata);
  };

  const disconnect = () => {
    if (client === null) {
      return;
    }
    client.deactivate();
    console.log('채팅이 종료되었습니다.');
    setConnected(false);
  };

  const callback = function (message) {
    console.log(message);
    console.log(JSON.parse(message.body).content);
    if (message.body) {
      let msg = JSON.parse(message.body);
      setChatList((chats) => [...chats, msg]);
    }
  };

  useEffect(() => {
    connect();

    return () => {
      disconnect();
    };
  }, []);

  const onChangeChat = (e) => {
    setChat(e.target.value);
  };

  const sendChat = (chat) => {
    // if (chat === '') {
    //   return;
    // }

    client.publish({
      destination: '/app/send/' + chatroomId,
      body: JSON.stringify({
        type: '',
        sender: chatroomId,
        channelId: '1',
        data: chat,
      }),
    });

    setChat('');
  };

  return (
    <PageContainer>
      <ChatContainer>
        {chatlist.map((chat) =>
          chat.sender === chatroomId ? (
            <MyBubbleContainer key={chat.key}>
              <MyBubble>{chat.chat}</MyBubble>
            </MyBubbleContainer>
          ) : (
            <CounterPartBubbleContainer key={chat.key}>
              <CounterPartBubble>{chat.chat}</CounterPartBubble>
            </CounterPartBubbleContainer>
          )
        )}
      </ChatContainer>
      <InputContainer>
        <InputBox value={chat} required onChange={onChangeChat} />
        <Button onClick={sendChat}>전송</Button>
      </InputContainer>
      {/* 사용자가 나인지 상대방인지에 따라 버블 디자인 다르게, 날짜 시간 표시 */}
    </PageContainer>
  );
}

export default ChatRoom;
