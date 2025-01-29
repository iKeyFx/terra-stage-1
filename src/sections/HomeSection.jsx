import styled from "styled-components";
import Button from "../ui/Button";

import { FaCircle } from "react-icons/fa";
import { MdPlayCircle } from "react-icons/md";

import jobbermanLogo from "../assets/jobberman.svg";
import ravenBankLogo from "../assets/raven-bank.svg";
import thireLogo from "../assets/thire.svg";

const StyledSection = styled.section`
  background-color: var(--color--bg);
  padding: 6rem 5rem 0;
  position: relative;

  @media (max-width: 1020px) {
    padding: 3rem 1rem 0;
  }
`;

const StyledH1 = styled.h1`
  font-family: "Darker Grotesque", serif;
  padding-top: 24px;
  font-weight: 700;
  font-size: 3.75rem;
  margin-bottom: 1.5rem;

  @media (max-width: 1020px) {
    padding: 0rem 4rem;
  }

  @media (max-width: 740px) {
    font-size: 2rem;
  }
`;

const StyledSec = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  padding: 96px 0;

  @media (max-width: 1020px) {
    grid-template-columns: 1fr;
  }
`;

const StyledDiv1 = styled.div`
  padding-right: 11rem;

  @media (max-width: 1020px) {
    padding: 0rem;
    text-align: center;
  }
`;

const StyledDiv2 = styled.div`
  p {
    list-style: circle;
    font-size: 0.8rem;
    margin: 0 0 7rem 5rem;
    display: flex;
    align-items: center;
  }

  @media (max-width: 1020px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;

    p {
      display: none;
    }
  }

  @media (max-width: 740px) {
    margin-top: 1rem;
  }
`;

const StyledSpan = styled.span`
  color: var(--color--green);

  @media (max-width: 1020px) {
    color: inherit;
  }
`;

const StyledP = styled.p`
  font-size: 0.875rem;
  line-height: 1.8;
  margin-bottom: 2rem;
`;

const Img = styled.img`
  width: 20%;
  cursor: pointer;
`;

const StyledImage = styled.div`
  margin: 9rem 0 0;
  display: flex;
  justify-content: space-around;

  @media (max-width: 1020px) {
    display: none;
  }
`;

const Icon = styled(FaCircle)`
  color: var(--color--green);
  width: 8px;
  margin-right: 5px;
`;

const StyledPlay = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  position: absolute;
  right: 5%;
  bottom: 10%;

  @media (max-width: 1020px) {
    position: static;
    font-size: 0.8rem;
    ine-height: 1rem;
  }
`;

const Icon2 = styled(MdPlayCircle)`
  height: 40px;
  width: 10%;
  margin-right: 10px;
`;

const StyledImageMobile = styled.div`
  display: none;
  @media (max-width: 1020px) {
    display: flex;
    justify-content: center;
    padding-top: 2rem;
    gap: 1rem;
  }
`;

const SignUpButtonMobile = styled.button`
  color: var(--color--white);
  background-color: var(--color--green);
  font-size: 0.875rem;
  padding: 0.875rem 2.5rem;
  line-height: 1.25rem;
  @media (max-width: 740px) {
    display: block;
    position: fixed;
    width: 100%;
    border-radius: 0;
    bottom: 0%;
    left: 0%;
    z-index: 999;
  }
`;
function HomeSection() {
  return (
    <StyledSection>
      <StyledSec>
        <StyledDiv1>
          <StyledH1>
            {" "}
            Gain in-demand skills for <StyledSpan>free</StyledSpan>{" "}
          </StyledH1>
          <StyledP>
            Join the Terra Learning Internship to learn and get the hands-on
            experience needed. Our interns are ready to take on entry-level and
            junior positions in just 8 weeks.
          </StyledP>
          <SignUpButtonMobile>Sign up for Free</SignUpButtonMobile>
          <StyledImage>
            <Img src={jobbermanLogo} alt="jobberman logo" />
            <Img src={ravenBankLogo} alt="raven-bank logo" />
            <Img src={thireLogo} alt="thire logo" />
          </StyledImage>
        </StyledDiv1>
        <StyledDiv2>
          <div>
            <img src="/src/assets/hero-image.png" alt="hero image" />
          </div>
          <p>
            <Icon />
            Over 300 thousand young Africans have started their journey into
            tech with us
          </p>
          <StyledPlay>
            <Icon2 />
            Play to see Previous Experiences
          </StyledPlay>

          <StyledImageMobile>
            <Img src="src/assets/jobberman.svg" alt="jobberman logo" />
            <Img src="src/assets/raven-bank.svg" alt="raven-bank logo" />
            <Img src="src/assets/thire.svg" alt="thire logo" />
          </StyledImageMobile>
        </StyledDiv2>
      </StyledSec>
    </StyledSection>
  );
}

export default HomeSection;
