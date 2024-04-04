import styled from 'styled-components';

const SearchBarContainer = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  padding: 5px 10px;
  background-color: white;
`;

const SearchBarInputBox = styled.div`
  height: 85%;
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;
  border-radius: 30px;
`;

const SearchBarInput = styled.input`
  width: 80%;
  height: 100%;
  border: none;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  background-color: inherit;
`;

const SearchBarButton = styled.button`
  width: 20%;
  height: 100%;
  border: none;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  background-color: #f4f4f4;
`;

const FilterButton = styled.button`
  height: 85%;
  width: 15%;
  border: none;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  background-color: #f4f4f4;
`;

function SearchBar() {
  return (
    <>
      <SearchBarContainer>
        <SearchBarInputBox>
          <SearchBarInput type="text" placeholder="검색어를 입력하세요" />
          <SearchBarButton>찾기</SearchBarButton>
        </SearchBarInputBox>
        <FilterButton>필터</FilterButton>
      </SearchBarContainer>
    </>
  );
}

export default SearchBar;
