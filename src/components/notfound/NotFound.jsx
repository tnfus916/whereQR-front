import React from 'react';
import styled from 'styled-components';

function NotFound() {
  return (
    <>
      <NotFoundContainer>
        <NotFoundContent>Oops.. Access Error!</NotFoundContent>
      </NotFoundContainer>
    </>
  );
}

export default NotFound;

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: linear-gradient(#ffffff, #e0eefb);
  color: #ffffff;
  font-size: 1rem;
  font-weight: 400;
  position: relative;
`;

export const NotFoundContent = styled.div`
  position: relative;
  top: -150px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #3877f5;
`;
