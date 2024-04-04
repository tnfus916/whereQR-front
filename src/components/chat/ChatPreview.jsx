import styled from 'styled-components';
import PropTypes from 'prop-types';

function ChatPreview(props) {
  return (
    <ChatPreviewContainer onClick={props.onClick}>
      {/* <Profile src={props.profile} /> */}
      <Profile />
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
  notReadCount: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

const ChatPreviewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100vw;
  padding: 10px;
  border-bottom: 1px solid #e0e0e0;
`;

const Profile = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  border-radius: 10%;
  margin: 5px 15px 5px 5px;
  border: 1px solid #d1d1d2;
  background-color: #f4f4f4;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 90%;
  width: 60%;
`;

const ParticipantName = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 4vh;
  font-size: 0.9rem;
  font-weight: bold;
`;

const LastMessage = styled.div`
  display: flex;
  font-size: 0.7rem;
  margin-top: 5px;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  height: 90%;
  width: 20%;
`;

const LastMessageTime = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  font-size: 0.6rem;
  color: #9a9ba7;
  padding-bottom: 12px;
`;

const NotReadCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 15px;
  font-size: 0.6rem;
  font-weight: 600;
  border-radius: 50%;
  padding: 4px;
  background-color: rgb(197, 218, 255);
`;
