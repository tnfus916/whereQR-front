import styled from 'styled-components';

import { IconContainer } from './DashboardStyle';

const SearchBarContainer = styled.div`
  height: 3.8rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  padding: 0.3rem;
  background-color: white;
`;

const SearchBarInputBox = styled.div`
  height: 85%;
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 0.2rem;
  background-color: #f4f4f4;
  border-radius: 30px;
  ::placeholder {
    font-size: 0.75rem;
  }
`;

const SearchBarInput = styled.input`
  height: 100%;
  width: 80%;
  border: none;
  padding: 10px;
  background-color: inherit;
`;

const FilterButton = styled.button`
  height: 2.2rem;
  width: 2.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.5rem;
  border: 1px solid #dddada;
  border-radius: 40%;
  background-color: transparent;
`;

function SearchBar() {
  // 필터 버튼 클릭시 모달 설정
  const handleFilter = () => {
    console.log('필터 버튼 클릭');
  };

  return (
    <>
      <SearchBarContainer>
        <SearchBarInputBox>
          <SearchBarInput type="text" placeholder="검색어를 입력하세요" />
          <IconContainer>
            <svg
              data-slot="icon"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              ></path>
            </svg>
          </IconContainer>
        </SearchBarInputBox>
        <FilterButton onClick={handleFilter}>
          <IconContainer>
            <svg
              data-slot="icon"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
              ></path>
            </svg>
          </IconContainer>
        </FilterButton>
      </SearchBarContainer>
    </>
  );
}

export default SearchBar;
