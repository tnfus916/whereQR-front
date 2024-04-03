import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import SearchBar from '../components/dashboard/SearchBar';
import PostList from '../components/dashboard/PostList';

const DashboardPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: 100vh;
  width: 100%;
  position: relative;
  background-color: #f4f4f4;
`;

const AddButton = styled.button`
  position: absolute;
  bottom: 90px;
  right: 10px;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background-color: #6093f9;
  font-size: 30px;
  cursor: pointer;
`;

function Dashboard() {
  const navigate = useNavigate();

  const gotoWritePage = () => {
    navigate('/dashboard/write');
  };

  return (
    <>
      <DashboardPageContainer>
        <SearchBar />
        <PostList />
        <AddButton onClick={gotoWritePage}>+</AddButton>
      </DashboardPageContainer>
    </>
  );
}

export default Dashboard;
