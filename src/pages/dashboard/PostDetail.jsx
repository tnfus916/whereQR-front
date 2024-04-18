import styled from "styled-components";

const PageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: #e4e4e4;
  margin-top: 1rem;
  overflow-y: auto;
  gap: 1rem;
`;

const ContentContainer = styled.div`
  /* height: 100%; */
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: white;
`;

const CommentContainer = styled.div`
  /* height: 100%; */
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: white;
`;

export default function PostDetail() {
  return (
    <PageContainer>
      <ContentContainer></ContentContainer>
      <CommentContainer></CommentContainer>
    </PageContainer>
  );
}
