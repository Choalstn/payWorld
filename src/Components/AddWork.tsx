import { styled } from "styled-components";
import { MdKeyboardArrowRight } from "react-icons/md";

interface ContainerProp {
  isAdd: boolean;
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Container = styled.div<ContainerProp>`
  width: 35%;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 20px;
  animation: ${({ isAdd }) =>
    isAdd ? "slide-in 0.8s ease" : "slide-out 0.8s ease "} !important ;

  .question {
    font-size: 25px;
    font-weight: 800;
    margin-top: 10px;
    margin-bottom: 30px;
  }

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
`;

const Question = styled.div`
  margin-bottom: 30px;

  .payPeriod,
  .payDay {
    display: flex;
    align-items: center;
    color: #5f5f5f;
    font-weight: 600;
    font-size: 20px;
    margin-top: 10px;
  }

  .choosePeriod,
  .chooseDay {
    border-bottom: 1px solid #e3e2e3;
    padding: 3px 5px;
    width: 73%;
    color: black;
    font-weight: 400;
    margin-right: 30px;
    margin-bottom: 10px;

    &:focus {
      border-bottom: 2px solid #659aff;
    }
  }
`;

const Label = styled.label`
  font-size: 14px;
  color: #5f5f5f;
`;

const PlaceName = styled.input`
  border: none;
  border-bottom: 1px solid #e3e2e3;
  height: 30px;
  font-size: 20px;
  width: 100%;
  margin-right: -27px;
  margin-top: 10px;

  &:focus {
    outline: none;
    border-bottom: 2px solid #659aff;
  }
`;

const Color = styled.div`
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  padding-right: 10px;
  margin-bottom: 20px;

  .circle {
    border-radius: 50%;
    width: 21px;
    height: 15x;
    background-color: #0084ff36;
  }
`;

const Insurance = styled.div`
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;

  > div {
    display: flex;
    align-items: center;
    font-size: 16px;
    color: #5f5f5f;
  }
`;

interface AddWorkProp {
  handleIsAdd: () => void;
  isAdd: boolean;
}
function AddWork({ handleIsAdd, isAdd }: AddWorkProp) {
  return (
    <>
      <Overlay onClick={() => handleIsAdd()} />
      <Container isAdd={isAdd}>
        <div className="question"> 어디에서 일하시나요 ?</div>

        <Question>
          <Label>근무지명</Label>

          <PlaceName />
        </Question>

        <Question>
          <Label>급여일</Label>
          <div className="payPeriod">
            <div className="choosePeriod">한 달 동안</div>
            근무한 돈을
          </div>
          <div className="payDay">
            <div className="chooseDay">10일</div>에 받아요
          </div>
        </Question>

        <Color>
          색상
          <div className="circle" />
        </Color>

        <Insurance>
          세금 및 4대보험
          <div>
            설정하기 <MdKeyboardArrowRight size="25" />{" "}
          </div>
        </Insurance>
      </Container>
    </>
  );
}

export default AddWork;
