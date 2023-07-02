"use client";
import styled from "styled-components";
import nex from "../../public/assets/nex.svg";
import search from "../../public/assets/search.svg";
import userLogin from "../../public/assets/user-login.svg";
import shoppingBag from "../../public/assets/shopping-bag.svg";
const Navbar = () => {
  return (
    <NavbarStyle>
      <RoutesWrapper>
        <Route>Women</Route>
        <Route>Men</Route>
        <Route>Kids</Route>
        <Route>Promotions</Route>
      </RoutesWrapper>
      <Logo />
      <NavActions>
        <ActionWrapper>
          <ActionIcon src={search.src} />
          <Action>Search</Action>
        </ActionWrapper>
        <ActionWrapper>
          <ActionIcon src={userLogin.src} />
          <Action>Login</Action>
        </ActionWrapper>
        <ActionWrapper>
          <ActionIcon src={shoppingBag.src} />
          <Action>Cart</Action>
        </ActionWrapper>
      </NavActions>
    </NavbarStyle>
  );
};

const NavbarStyle = styled.nav`
  width: 100%;
  min-height: 4vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const RoutesWrapper = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
`;

const Route = styled.li`
  text-transform: uppercase;
`;

const Logo = styled.div`
  width: 3rem;
  height: 2rem;
  background: url(${nex.src});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const NavActions = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
`;

const ActionWrapper = styled.li`
  display: flex;
  align-items: center;
`;

const ActionIcon = styled.img`
  width: 1.5rem;
  filter: invert(0) brightness(0);
`;

const Action = styled.span`
  text-transform: uppercase;
`;

export default Navbar;
