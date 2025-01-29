import styled from "styled-components";

const OverlayContainer = styled.div`
  position: fixed;
  top: 15%;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: var(--color--bg);
  z-index: 999;
  display: flex;
  justify-content: flex-start;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;

  &.visible {
    transform: translateX(0);
  }
`;

const StyledSidebar = styled.aside`
  width: 30%;
  min-height: 100dvh;
  padding: 1.8rem 1.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1020px) {
    width: 100%;
    justify-content: initial;
  }
`;

function MenuOverLay({ isVisible, children }) {
  return (
    <OverlayContainer className={isVisible ? "visible" : ""}>
      <StyledSidebar>{children}</StyledSidebar>
    </OverlayContainer>
  );
}

export default MenuOverLay;
