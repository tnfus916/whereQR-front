import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import styled from 'styled-components';

import { getDashboardPosts } from '../../services/api';

import SearchBar from '../../components/dashboard/SearchBar';
import PostList from '../../components/dashboard/PostList';
import { IconContainer } from '../../components/dashboard/DashboardStyle';

const DashboardPageContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  position: relative;
  background-color: #f4f4f4;
`;

const ListContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin-top: 10px;
  padding: 10px;
  background-color: #fff;
  overflow-y: auto;
`;

const AddButton = styled.button`
  height: 2.3rem;
  width: 2.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 90px;
  right: 10px;
  border: none;
  border-radius: 100%;
  background-color: #6093f9;
`;

function Dashboard() {
  const navigate = useNavigate();

  const { data: postList, isLoading } = useQuery('posts', getDashboardPosts);

  const gotoWritePage = () => {
    navigate('/dashboard/write');
  };
  console.log(postList);

  return (
    <>
      <DashboardPageContainer>
        <SearchBar />
        <ListContainer>
          {!isLoading && <PostList posts={postList} />}
        </ListContainer>
        <AddButton onClick={gotoWritePage}>
          <IconContainer>
            <svg
              data-slot="icon"
              fill="none"
              strokeWidth={1.5}
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </IconContainer>
        </AddButton>
      </DashboardPageContainer>
    </>
  );
}

export default Dashboard;
