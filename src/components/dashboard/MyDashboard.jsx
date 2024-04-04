import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: 100vh;
  width: 100%;
  position: relative;
`;

function MyDashboard() {
  return (
    <PageContainer>
      <div>대시보드 게시글 목록 페이지</div>
      {/* <PostList></PostList> */}
    </PageContainer>
  );
}

export default MyDashboard;
