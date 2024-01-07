import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  height: 50px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
  font-size: 1rem;
  font-weight: 700;
  box-shadow: 0 0 10px 0 rgba(36, 114, 250, 0.1);
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  position: fixed;
  left: 0;
  margin-left: 20px;
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  font-size: 0.7rem;
  position: fixed;
  right: 0;
  margin-right: 10px;
  /* @media screen and (max-width: 768px) {
    display: none;
  } */
`;

export const NavLink = styled(Link)`
  /* color: orange; */
  color: rgb(36, 114, 250);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 0.4rem;
  height: 100%;
  position: fixed;
  left: 100;

  /* cursor: pointer;
  &.active {
    color: #15cdfc;
  } */
`;

export const Button = styled.button`
  border: none;
  /* color: orange; */
  color: rgb(36, 114, 250);
  font-size: 0.7rem;
  font-weight: 700;
  background-color: white;
  white-space: nowrap;
`;
