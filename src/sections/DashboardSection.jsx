import styled from "styled-components";
import { StyledH2, StyledSpan } from "./SectionTwo";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";
import { FaCircle } from "react-icons/fa";
import SignUpButton from "../ui/SignUpButton";

const StyledDashSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: var(--color--white);
  color: var(--color--text--black);
  column-gap: 2rem;
  align-items: start;

  @media (max-width: 1020px) {
    grid-template-columns: 1fr;
  }
`;

const StyledDiv = styled.div`
  margin-right: 6rem;
  margin-top: 3rem;

  @media (max-width: 1020px) {
    text-align: center;
    margin: 0;
    padding: 1rem;
  }
`;

const H2 = styled(StyledH2)`
  width: 80%;
  margin-bottom: 1rem;

  @media (max-width: 1020px) {
    width: 100%;
  }
  @media (max-width: 740px) {
    font-size: 2rem;
    line-height: 1;
  }
`;

const StyledText = styled.div`
  padding-right: 6rem;

  @media (max-width: 1020px) {
    padding: 0rem;
  }
`;

const Button = styled.button`
  width: 100%;
  display: flex;
  background-color: ${(props) =>
    props.toggle ? "rgb(238, 247, 238)" : "rgb(250, 250, 250)"};
  border-bottom-width: 1px;
  color: ${(props) =>
    props.toggle ? "rgb(82, 163, 80)" : "var(--color--text--black)"};
  font-weight: 600;
  border: 0.1px solid #e5e7eb;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0;
  border-radius: ${(props) => (props.toggle ? "8px 8px 0 0" : "8px")};
  padding: 0.8rem;

  &:focus {
    outline: none;
  }
`;

const StyledToggleDiv = styled.div`
  border: 1px solid #e5e7eb;
  margin-bottom: 2rem;
  padding: 0.2rem 2rem;
  border-radius: ${(props) => (props.toggle ? "0px 0px 8px 8px" : "8px")};
  border-top: 0;
  li {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 740px) {
    font-size: 12px;
    line-height: 1rem;
  }
`;

const ToggleTopDiv = styled.div`
  margin-bottom: 1rem;
`;

const StyledP = styled.p`
  font-size: 0.875rem;
  line-height: 1.2rem;
  color: rgb(71, 71, 71);
`;

const Icon = styled(FaCircle)`
  color: var(--color--bg);
  width: 5px;
`;

function DashboardSection() {
  const [Toggle, setToggle] = useState(false);

  return (
    <StyledDashSection>
      <div>
        <img src="/src/assets/dashboard-mockup.png" alt="dashboard mock" />
      </div>

      <StyledDiv>
        <StyledText>
          <H2>
            <StyledSpan>Learn</StyledSpan> in-demand skills seamlessly
          </H2>
          <StyledP>
            Imagine learning in an environment built to give you the best
            learning experience.
          </StyledP>
          <StyledP>
            A blend of self-paced and instructor-led training with lots of
            hands-on experience to ensure you are well-rounded in the track of
            your choice.
          </StyledP>
        </StyledText>

        <ToggleTopDiv>
          <Button onClick={() => setToggle((prev) => !prev)} toggle={Toggle}>
            Perks
            <span>
              {Toggle ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
            </span>
          </Button>
          {Toggle && (
            <StyledToggleDiv toggle={Toggle}>
              <ul>
                <li>
                  {" "}
                  <Icon />
                  Earn a certificate of completion at the end of the Internship
                </li>
                <li>
                  <Icon />A chance to build your portfolio in the Terra Learning
                  bootcamp
                </li>
                <li>
                  <Icon />
                  Boost your portfolio by taking part in team projects and
                  creating world class projects in the bootcamp
                </li>
              </ul>
            </StyledToggleDiv>
          )}
        </ToggleTopDiv>

        <SignUpButton />
      </StyledDiv>
    </StyledDashSection>
  );
}

export default DashboardSection;
