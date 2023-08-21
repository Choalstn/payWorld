import { css, styled } from "styled-components";
import landingImg from "../assets/landingImg.png";
import kakaoIcon from "../assets/kakaoIcon.png";
import googleIcon from "../assets/googleIcon.png";
import payWordlIcon from "../assets/payWorldIcon.png";

interface LoginBtnProps {
  howLogin: string;
}

const Container = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const ExplainImg = styled.img`
  width: 100%;
  margin-top: 40px;
`;

const LoginBtn = styled.div<LoginBtnProps>`
  width: 37%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 7%;
  /* border-radius: 10px; */
  margin-bottom: 30px;

  ${(props) =>
    props.howLogin === "kakao" &&
    css`
      background-color: #fbe300;
    `}

  ${(props) =>
    props.howLogin === "google" &&
    css`
      border: 1px solid rgba(0, 0, 0, 0.2);
    `}

    ${(props) =>
    props.howLogin === "basic" &&
    css`
      background-color: #659aff;
      color: white;
    `}

  > span {
    display: flex;
    justify-content: center;
    width: 100%;
    font-weight: 650;
    margin-left: -45px;
    font-size: 18px;
  }

  .noOauth {
    margin-left: 0;
  }

  .icon {
    width: 6%;
    margin-right: 10px;
    padding-left: 20px;
  }
`;

function Landing() {
  return (
    <Container>
      <ExplainImg src={landingImg} alt="payWorld 랜딩 이미지" />

      <LoginBtn howLogin="kakao">
        <img className="icon" src={kakaoIcon} alt="카카오 아이콘" />
        <span>카카오 로그인</span>
      </LoginBtn>

      <LoginBtn howLogin="google">
        <img className="icon" src={googleIcon} alt="카카오 아이콘" />
        <span>구글 로그인</span>
      </LoginBtn>

      <LoginBtn howLogin="basic">
        <span className="noOauth">일반 로그인</span>
      </LoginBtn>
    </Container>
  );
}

export default Landing;
