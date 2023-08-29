/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-console */
import { styled } from "styled-components";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsCheckLg } from "react-icons/bs";
import {
  KeyboardEvent,
  MouseEvent,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";
import { useDispatch } from "react-redux";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Switch from "@mui/material/Switch";
import { addWork } from "../Store/WorkSlice";

interface ContainerProp {
  isAdd: boolean;
  isSetting: boolean;
}

interface CircleProp {
  color: string;
  picker: boolean | undefined;
}

interface taxInsuranceProp {
  isTrue: boolean;
}

interface TaxBoxProp {
  isSetting: boolean;
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
  left: ${({ isSetting }) => (isSetting ? "40%" : "50%")};
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
    margin-right: 30px !important;
    margin-bottom: 10px !important;

    .details {
      > div {
        font-size: 15px;
        padding: 15px 5px;
        display: flex;
        align-items: center;

        &:hover {
          color: #659aff;
          font-weight: 700;
        }
      }
    }

    .detailsDay {
      height: 23vh;
      overflow-y: scroll;

      > div {
        font-size: 15px;
        padding: 15px 5px;
        display: flex;
        align-items: center;

        &:hover {
          color: #659aff;
          font-weight: 700;
        }
      }
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
`;

const Insurance = styled.div`
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
  margin-bottom: 20px;

  > div {
    display: flex;
    align-items: center;
    font-size: 16px;
    color: #5f5f5f;

    &:hover {
      cursor: pointer;
    }
  }
`;

const StyledBsCheckLg = styled(BsCheckLg)`
  margin-right: 10px;
  font-size: 17px;

  &:hover {
    color: #659aff;
  }
`;

const TaxBox = styled.div<TaxBoxProp>`
  height: 60.2%;
  width: 18%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  z-index: 1;
  position: absolute;
  top: 17.5%;
  left: 60%;
  border-radius: 20px;
  animation: ${({ isSetting }) =>
    isSetting ? "in 0.8s ease" : "slide-out 0.8s ease "} !important ;

  @keyframes in {
    from {
      transform: translateX(-50%);
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
      transform: translateX(-50%);
      opacity: 0;
    }
  }

  .title {
    font-size: 18px;
    font-weight: 800;
  }

  .taxSwitch,
  .insuranceSwitch {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .subtitle {
    font-size: 13px;
    color: #848484;
  }

  .btns {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;

const TaxBtn = styled.div<taxInsuranceProp>`
  font-size: 15px;
  color: ${({ isTrue }) => (isTrue ? "black" : "#5f5f5f")};

  &:hover {
    cursor: ${({ isTrue }) => (isTrue ? "pointer" : "default")};
    color: ${({ isTrue }) => (isTrue ? "#659aff" : "#5f5f5f")};
    font-weight: ${({ isTrue }) => (isTrue ? "500" : "default")};
  }
`;

const SubmitBtn = styled.div`
  background-color: #659aff;
  color: white;
  border-radius: 15px;
  padding: 10px;
  font-weight: 650;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Circle = styled.div<CircleProp>`
  border-radius: 50%;
  width: 21px;
  background-color: #0084ff36;
  background-color: ${(props) => props.color};
  animation: ${({ picker }) => picker && "slide-in 0.8s ease"} !important ;

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

  &:hover {
    cursor: pointer;
  }
`;

interface AddWorkProp {
  handleIsAdd: () => void;
  isAdd: boolean;
}

function AddWork({ handleIsAdd, isAdd }: AddWorkProp) {
  const [expandedPeriod, setExpandedPeriod] = useState<boolean>(false);
  const [expandedDay, setExpandedDay] = useState<boolean>(false);
  const [chosenPeriod, setChoosenPeriod] = useState<string>("");
  const [chosenDay, setChoosenDay] = useState<number>();
  const [openColor, setOpenColor] = useState<boolean>(false);
  const [selectColor, setSelectColor] = useState<string>("");
  const [taxChecked, setTaxChecked] = useState<boolean>(false);
  const [insuranceChecked, setInsuranceChecked] = useState<boolean>(false);
  const [isSetting, setIsSetting] = useState<boolean>(false);

  const dispatch = useDispatch();

  const period = ["한 달", "일주일", "2주", "당일", "한 달에 2번"];
  const days = Array.from({ length: 31 }, (_, index) => index + 1);
  const colors = ["#00ba3536", "#FF961B36", "#FF3B3B36", "#0084ff36"];

  const [work, setWork] = useState({
    name: "",
    payPeriod: "",
    payDay: 0,
    color: "#0084ff36",
    isTax: false,
    tax: "",
    isInsurance: false,
    insurance: "",
  });

  const handlePressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const { value } = e.currentTarget;
      setWork((prevWork) => ({ ...prevWork, name: value }));
    }
  };

  const handleTax = (e: MouseEvent<HTMLDivElement>) => {
    const clickedDiv = e.target as HTMLDivElement;
    const content = clickedDiv.textContent;
    setWork((prevWork) => ({ ...prevWork, isTax: true, tax: content! }));
  };

  const handleInsurance = (e: MouseEvent<HTMLDivElement>) => {
    const clickedDiv = e.target as HTMLDivElement;
    const content = clickedDiv.textContent;
    setWork((prevWork) => ({
      ...prevWork,
      isInsurance: true,
      insurance: content!,
    }));
  };

  const handleAddWork = () => {
    dispatch(
      addWork({
        name: work.name,
        payPeriod: work.payPeriod,
        payDay: work.payDay,
        color: work.color,
        isTax: work.isTax,
        tax: work.tax,
        isInsurace: work.isInsurance,
        insurace: work.insurance,
      }),
    );
  };

  useEffect(() => {
    console.log(work);
  }, [work]);
  return (
    <>
      <Overlay onClick={() => handleIsAdd()} />
      <Container isAdd={isAdd} isSetting={isSetting}>
        <div className="question"> 어디에서 일하시나요 ?</div>

        <Question>
          <Label>근무지명</Label>

          <PlaceName onKeyUp={(e) => handlePressEnter(e)} />
        </Question>

        {work.name.length > 0 && (
          <Question>
            <Label>급여일</Label>
            <div className="payPeriod">
              <Accordion
                className="choosePeriod"
                expanded={expandedPeriod}
                onClick={() => {
                  setExpandedPeriod(!expandedPeriod);
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{chosenPeriod}</Typography>
                </AccordionSummary>
                <AccordionDetails className="details">
                  {period.map((el, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        setExpandedPeriod(!expandedPeriod);
                        setChoosenPeriod(el);
                        setWork((prevWork) => ({ ...prevWork, payPeriod: el }));
                      }}
                    >
                      <StyledBsCheckLg /> {el}
                    </div>
                  ))}
                </AccordionDetails>
              </Accordion>
              근무한 돈을
            </div>
            <div className="payDay">
              <Accordion
                className="choosePeriod"
                expanded={expandedDay}
                onClick={() => {
                  setExpandedDay(!expandedDay);
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{chosenDay}</Typography>
                </AccordionSummary>
                <AccordionDetails className="detailsDay">
                  {days.map((el, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        setExpandedDay(!expandedDay);
                        setChoosenDay(el);
                        setWork((prevWork) => ({ ...prevWork, payDay: el }));
                      }}
                    >
                      <StyledBsCheckLg /> {el}
                    </div>
                  ))}
                </AccordionDetails>
              </Accordion>
              일에 받아요
            </div>
          </Question>
        )}

        {work.payPeriod.length > 0 && work.payDay > 0 && (
          <>
            <Color>
              색상
              {openColor && (
                <>
                  {colors.map((el, idx) => (
                    <Circle
                      key={idx}
                      color={el}
                      picker
                      onClick={() => {
                        setSelectColor(el);
                        setOpenColor(false);
                        setWork((prevWork) => ({ ...prevWork, color: el }));
                      }}
                    />
                  ))}
                </>
              )}
              <Circle
                onClick={() => setOpenColor(!openColor)}
                color={selectColor}
                picker={false}
              />
            </Color>
            <Insurance>
              세금 및 4대보험
              <div onClick={() => setIsSetting(true)}>
                설정하기 <MdKeyboardArrowRight size="25" />
              </div>
            </Insurance>

            <SubmitBtn
              onClick={() => {
                handleIsAdd();
                handleAddWork();
              }}
            >
              저장하기
            </SubmitBtn>
          </>
        )}
      </Container>

      {isSetting && (
        <TaxBox isSetting={isSetting}>
          <div className="title">세금 및 4대보험 설정</div>
          <div className="taxSwitch">
            세금
            <Switch
              checked={taxChecked}
              onChange={() => setTaxChecked(!taxChecked)}
              inputProps={{ "aria-label": "controlled" }}
            />
          </div>

          <div className="subtitle">세금</div>
          <div className="btns">
            <TaxBtn
              isTrue={taxChecked}
              onClick={(e) => {
                handleTax(e);
              }}
            >
              3.3%
            </TaxBtn>
            <TaxBtn
              isTrue={taxChecked}
              onClick={(e) => {
                handleTax(e);
              }}
            >
              소득세 + 4대보험
            </TaxBtn>
          </div>

          <div className="insuranceSwitch">
            4대보험
            <Switch
              checked={insuranceChecked}
              onChange={() => setInsuranceChecked(!insuranceChecked)}
              inputProps={{ "aria-label": "controlled" }}
            />
          </div>
          <div className="subtitle">4대보험</div>
          <div className="btns">
            <TaxBtn
              isTrue={insuranceChecked}
              onClick={(e) => handleInsurance(e)}
            >
              4대보험 모두 가입
            </TaxBtn>
            <TaxBtn
              isTrue={insuranceChecked}
              onClick={(e) => handleInsurance(e)}
            >
              고용보험만 가입
            </TaxBtn>
          </div>

          <SubmitBtn onClick={() => setIsSetting(false)}>적용하기</SubmitBtn>
        </TaxBox>
      )}
    </>
  );
}

export default AddWork;
