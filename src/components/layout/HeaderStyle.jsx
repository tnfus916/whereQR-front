import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  height: 8%;
  width: 100%;
  position: relative;
  z-index: 10;
  font-size: 0.9rem;
  font-weight: 700;
  box-shadow: 0 0 10px 0 rgba(159, 13, 13, 0.1);
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  font-size: 0.7rem;
  margin-left: 3rem;
  /* @media screen and (max-width: 768px) {
    display: none;
  } */
`;

export const NavLink = styled(Link)`
  color: orange;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 0.4rem;
  height: 100%;
  /* cursor: pointer;
  &.active {
    color: #15cdfc;
  } */
`;

export const Button = styled.button`
  border: none;
  color: orange;
  font-size: 0.7rem;
  font-weight: 700;
  background-color: white;
  white-space: nowrap;
`;
