import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: black;
  height: 140px;
  width: 100%;
  position: relative;
  /* top: -10px; */
  z-index: 10;
  /* padding: 10px; */
  /* gap: 420px; */
`;

export const NavContainer = styled.div`
  font-size: 1rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  color: #15cdfc;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 2rem;
  height: 100%;
  /* cursor: pointer;
  &.active {
    color: #15cdfc;
  } */
`;
