import styled from "styled-components";
import Button from "../ui/Button";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { LuBookOpenText, LuBrainCircuit } from "react-icons/lu";
import { GiSpeedBoat } from "react-icons/gi";
import SignUpButton from "../ui/SignUpButton";

const StyledSectionTwo = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  row-gap: 2rem;
  align-items: stretch;
  padding: 6rem 5rem;
  background-color: var(--color--white);
  color: var(--color--text--black);
  column-gap: 2rem;
  align-items: start;

  @media (max-width: 1020px) {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 1rem;
  }
`;

const StyledIcon = styled.div`
  background-color: rgb(244, 245, 247);
  width: 10%;

  width: 3rem;
  height: 3rem;
  padding: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const StyledH2 = styled.h2`
  font-family: "Darker Grotesque", serif;
  font-weight: 800;
  font-size: 3rem;
  line-height: 3rem;
  margin: 39.84px 0;
`;

export const StyledSpan = styled.span`
  color: var(--color--green);
`;

export const StyledP = styled.div`
  font-size: 0.875rem;
  line-height: 1.5rem;
  margin-bottom: 2rem;
  color: rgb(71, 71, 71);
  word-wrap: break-word;
`;

const BenefitCard = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(/assets/card-bg-lines.svg);
  border-radius: 1.5rem;
  background-size: contain;
  background-position: right-top;
  background-repeat: no-repeat;
  padding: 2rem;
  min-height: 280px;
  flex-grow: 1;

  @media (max-width: 1020px) {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: auto;
  }
`;

const StyledH4 = styled.h4`
  font-family: "Darker Grotesque", serif;
  font-weight: 700;
  margin-bottom: 0.25rem;
  font-size: 1.125rem;
`;

const GridMobile = styled.div`
  @media (max-width: 1020px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
  @media (max-width: 740px) {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 2rem;
  }
`;

const MobileSignUp = styled(Button)`
  display: none;

  @media (max-width: 740px) {
    display: grid;
    padding: 1rem;
  }

  &:hover {
    background-color: rgb(188, 222, 186);
    color: var(--color--green);
    transition: all 0.15s linear;
  }
`;
function SectionTwo() {
  return (
    <StyledSectionTwo>
      <div>
        <StyledH2>
          What you stand to <StyledSpan>gain</StyledSpan>
        </StyledH2>
        <StyledP>
          Since 2020, Terra Learning has trained over 350 thousand African
          youths in various fields across Engineering, Marketing, Product and
          Design.
        </StyledP>
        <SignUpButton />
      </div>
      <GridMobile>
        <BenefitCard>
          <StyledIcon>
            <AiOutlineSafetyCertificate size={30} />
          </StyledIcon>
          <StyledH4>Earn a certificate</StyledH4>
          <StyledP>
            All Terra Learning finalists will be awarded a paid certificate of
            completion at the end of the Internship.
          </StyledP>
        </BenefitCard>
        <BenefitCard>
          <StyledIcon>
            <LuBookOpenText size={30} />
          </StyledIcon>
          <StyledH4>Learn from the very best</StyledH4>
          <StyledP>
            Learning is a wonderful experience, and learning from the best makes
            everything ten times easier. The Terra Learning mentors and lead
            instructors are all here to make your Internship experience
            unforgettable.
          </StyledP>
        </BenefitCard>
      </GridMobile>
      <GridMobile>
        <BenefitCard>
          <StyledIcon>
            <LuBrainCircuit size={30} />
          </StyledIcon>
          <StyledH4>Get hands-on experience</StyledH4>
          <StyledP>
            During the Terra Learning Internship, you will be assigned projects
            and team assignments that will give you the needed experience, and
            help you build your portfolio, teamwork, and communication skills.
          </StyledP>
        </BenefitCard>
        <BenefitCard>
          <StyledIcon>
            <GiSpeedBoat size={30} />
          </StyledIcon>
          <StyledH4>Be a part of a fast-growing startup</StyledH4>
          <StyledP>
            During the bootcamp, all Terra Learning finalists will have the
            opportunity to build a fast-paced start-up.
          </StyledP>
        </BenefitCard>
      </GridMobile>
      <MobileSignUp>Sign up for FREE</MobileSignUp>
    </StyledSectionTwo>
  );
}
export default SectionTwo;
