import styled from "styled-components";
import Button from "./Button";
import Logo from "./Logo";
import { IoCloseSharp, IoMenuOutline } from "react-icons/io5";
import { useState } from "react";
import MenuOverLay from "./MenuOverlay";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: var(--color--bg);
  z-index: 999;
`;
const StyledNav = styled.nav`
  display: flex;
  padding: 1rem 5rem;
  place-items: center;
  justify-content: space-between;

  @media (max-width: 1020px) {
    padding: 1rem;
  }
`;

const StyledNavLink = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  font-size: 12px;
  font-weight: 500;
  column-gap: 3rem;

  a:hover {
    color: var(--color--green);
  }
  @media (max-width: 1020px) {
    display: none;
  }
`;
const StyledHambuger = styled.div`
  display: none;

  @media (max-width: 1020px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Icon = styled(IoMenuOutline)`
  width: 100%;
  height: 30px;
  color: var(--color--green);
`;

const StyledNavLinkMobile = styled.ul`
  @media (max-width: 1020px) {
    display: flex;
    gap: 3rem;
    list-style: none;
    cursor: pointer;
    font-size: 16px;
    flex-direction: column;
    padding-left: 4rem;
    font-size: 12px;
    padding-top: 2rem;
  }
`;

const ButtonDesk = styled(Button)`
  @media (max-width: 1020px) {
    display: none;
  }
`;

const IconClose = styled(IoCloseSharp)`
  width: 100%;
  height: 30px;
  color: var(--color--green);
`;
function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpen = () => {
    setOpenMenu(true);
  };
  const handleClose = () => {
    setOpenMenu(false);
  };
  return (
    <StyledHeader>
      <StyledNav>
        <Logo />

        <StyledHambuger>
          {openMenu ? (
            <IconClose onClick={handleClose} />
          ) : (
            <Icon onClick={handleOpen} />
          )}
        </StyledHambuger>
        <MenuOverLay isVisible={openMenu} onClose={handleClose}>
          <StyledNavLinkMobile>
            <li>
              <a>Bootcamp</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <Button>Dashboard</Button>
          </StyledNavLinkMobile>
        </MenuOverLay>

        <StyledNavLink>
          <li>
            <a>Bootcamp</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
        </StyledNavLink>
        <ButtonDesk>Dashboard</ButtonDesk>
      </StyledNav>
    </StyledHeader>
  );
}

export default Header;
