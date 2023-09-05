import { styled } from "styled-components";

import logo from "../assets/logo.png";

interface ContainerProp {
  isOpen: boolean;
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  cursor: pointer;
`;

const Container = styled.div<ContainerProp>`
  position: fixed;
  top: 0;
  right: 0;
  width: 27%;
  min-height: 100%;
  background-color: white;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: -20px 0px 100px 20px rgba(0, 0, 0, 0.2);

  animation: ${({ isOpen }) =>
    isOpen ? "slide-in 0.8s ease" : "slide-out 0.8s ease "} !important ;

  @keyframes slide-in {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slide-out {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }

  .first {
    margin-top: -60px;
  }

  > img {
    width: 75%;
    margin-top: -80px;
  }

  > div {
    font-size: 23px;
    font-weight: 550;
    padding: 30px 0;
    cursor: pointer;
    z-index: 1;
  }
`;

interface MenuBarProps {
  handleMenu: () => void;
  isOpen: boolean;
}

function MenuBar({ handleMenu, isOpen }: MenuBarProps) {
  return (
    <>
      <Overlay onClick={() => handleMenu()} />
      <Container isOpen={isOpen}>
        <img src={logo} alt="payWorld 로고 이미지" />
        <div className="first">공지사항</div>
        <div>근무일지</div>
        <div>마이페이지</div>
      </Container>
    </>
  );
}

export default MenuBar;
