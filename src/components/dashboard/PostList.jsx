import styled from 'styled-components';

const ListContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  padding: 10px;
  background-color: #fff;
`;

const ListItem = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  padding: 10px;
`;

function PostList() {
  const tmp = [
    {
      title: '에어팟을 잃어버렸습니다.',
      content:
        '광진구 뭐시기에서 28일 18시쯤에 잃어버렸습니다. 습득하신 분이 있다면 연락주세요! 사례하겠습니다.',
      author: '박수련',
    },
    {
      title: '에어팟을 잃어버렸습니다.',
      content:
        '광진구 뭐시기에서 28일 18시쯤에 잃어버렸습니다. 습득하신 분이 있다면 연락주세요! 사례하겠습니다.',
      author: '김철수',
    },
  ];

  return (
    <ListContainer>
      {tmp.map((item, index) => {
        return (
          <ListItem key={index}>
            <div>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
              <p>{item.author}</p>
            </div>
          </ListItem>
        );
      })}
    </ListContainer>
  );
}

export default PostList;
