import { styled } from "styled-components";
import { AiFillPlusSquare } from "react-icons/ai";
import { RiArrowLeftSLine } from "react-icons/ri";
import userIcon from "../assets/userImg.png";
import MainImg from "../assets/mainImg.png";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

const Header = styled.div`
  width: 100%;
  height: 8%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 0.3%;

  > div {
    height: 50px;
    border: 1px solid #d9d9d9;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    margin-right: 15px;
    border-radius: 15px;

    > img {
      width: 70%;
    }
  }
`;

const Main = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 50%;
  padding: 60px 50px;
  margin-top: -3%;

  .greetWord {
    font-size: 45px;
    font-weight: 750;
    line-height: 67px;
  }

  .greetImg {
    width: 23%;
  }
`;

const MenuTab = styled.div`
  width: 30px;
  height: 40px;
  position: absolute;
  right: 0;
  top: 38%;
  background-color: #659aff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const WorkList = styled.div`
  height: 100%;
  background-color: #659aff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  > div {
    font-size: 25px;
    color: white;
    margin-left: 20px;
  }
`;
function Home() {
  return (
    <Container>
      <Header>
        <div className="user">
          <img src={userIcon} alt="유저아이콘" />
        </div>
      </Header>

      <Main>
        <div className="greetWord">
          곰도리도리잼잼 님, <br /> 오늘 하루도 반가워요 !
        </div>
        <img className="greetImg" src={MainImg} alt="홈  화면 메인 이미지" />
      </Main>

      <MenuTab>
        <RiArrowLeftSLine color="white" size="40" />
      </MenuTab>

      <WorkList>
        <AiFillPlusSquare color="white" size="40" />
        <div>근무지 등록하기</div>
      </WorkList>
    </Container>
  );
}

export default Home;