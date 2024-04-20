import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import props from 'prop-types';

const ListItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  gap: 0.5rem;
  border-bottom: 1px solid lightgray;
  padding: 0.6rem;
`;

const Title = styled.h3`
  font-size: 0.8rem;
  font-weight: 500;
`;

const Content = styled.span`
  font-size: 0.6rem;
  color: gray;
`;

const SmallInfo = styled.div`
  width: 100%;
  display: flex;
  gap: 0.4rem;
  font-size: 0.6rem;
  color: #b3b1b1;
`;

function PostList({ posts }) {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/dashboard/${id}`);
  };

  return (
    <>
      {posts.map((post) => (
        <ListItem
          key={post.dashboard_id}
          onClick={() => handleClick(post.dashboard_id)}
        >
          <Title>
            {post.title && post.title.length > 23
              ? post.title.slice(0, 23) + '...'
              : post.title}
          </Title>
          <Content>
            {post.content && post.content.length > 33
              ? post.content.slice(0, 33) + '...'
              : post.content}
          </Content>
          <SmallInfo>
            <p>{post.author_id}</p>
            <p>{new Date(post.createdAt).toLocaleDateString()}</p>
          </SmallInfo>
        </ListItem>
      ))}
    </>
  );
}

export default PostList;

PostList.propTypes = {
  posts: props.array.isRequired,
};
