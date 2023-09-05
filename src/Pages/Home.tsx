/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { styled } from "styled-components";
import {
  AiFillPlusSquare,
  AiOutlineEdit,
  AiOutlineDelete,
} from "react-icons/ai";
import { RiArrowLeftSLine } from "react-icons/ri";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import userIcon from "../assets/userImg.png";
import MainImg from "../assets/mainImg.png";
import MenuBar from "../Components/MenuBar";
import AddWork from "../Components/AddWork";
import { RootState } from "../Store";
import { deleteWork } from "../Store/WorkSlice";

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
  overflow-y: visible;
  background-color: #659aff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10px;

  > div {
    font-size: 25px;
    color: white;
    display: flex;
    align-items: center;

    > div {
      margin-left: 20px;
    }
  }

  .addWorkBtn {
    margin: 25px 0;
  }
`;

const WorkItem = styled.div`
  width: 80%;
  border-radius: 45px;
  padding: 10px;
  height: 100px;
  background-color: white;
  margin-top: 30px;

  > div {
    height: 100%;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 30px;
  }

  .name {
    padding: 0px 30px;
    width: 10%;
  }

  .line {
    border-right: 1px solid black;
    height: 70%;
  }

  .pay {
    width: 70%;
    justify-content: flex-start;
    padding: 0px 30px;
  }

  .etc {
    width: 8%;
    cursor: pointer;
  }

  .editDelete {
    width: 70px;
    margin-left: -10px;
    display: flex;
    justify-content: space-between;
    animation: in 0.5s ease;

    @keyframes in {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;

function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const [isSet, setIstSet] = useState<boolean>(false);

  const dispatch = useDispatch();

  const workList = useSelector((state: RootState) => state.work);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleIsAdd = () => {
    setIsAdd(!isAdd);
  };

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

      <MenuTab onClick={handleMenu}>
        <RiArrowLeftSLine color="white" size="40" />
      </MenuTab>

      {isOpen && <MenuBar handleMenu={handleMenu} isOpen={isOpen} />}

      <WorkList>
        {workList.length === 0 ? (
          <div onClick={handleIsAdd}>
            <AiFillPlusSquare color="white" size="40" />
            <div>근무지 등록하기</div>
          </div>
        ) : (
          workList.map((el, idx) => (
            <WorkItem key={idx} onClick={() => setIstSet(!isSet)}>
              <div className="name">{el.name}</div>
              <div className="line" />
              <div className="pay"> ₩ {el.pay}</div>
              <div className="etc">
                {isSet ? (
                  <div className="editDelete">
                    <AiOutlineEdit />
                    <AiOutlineDelete
                      onClick={() => {
                        dispatch(deleteWork({ name: el.name }));
                      }}
                    />
                  </div>
                ) : (
                  <HiOutlineDotsVertical onClick={() => setIstSet(!isSet)} />
                )}
              </div>
            </WorkItem>
          ))
        )}

        {workList.length > 0 && (
          <div onClick={handleIsAdd} className="addWorkBtn">
            <AiFillPlusSquare color="white" size="40" />
            <div>새로운 근무지 등록하기</div>
          </div>
        )}
      </WorkList>

      {isAdd && <AddWork handleIsAdd={handleIsAdd} isAdd={isAdd} />}
    </Container>
  );
}

export default Home;
