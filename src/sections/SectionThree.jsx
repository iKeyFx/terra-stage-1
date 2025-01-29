import styled from "styled-components";
import TestimonyCard from "../ui/TestimonyCard";
import { StyledH2, StyledSpan } from "./SectionTwo";
import { cardsData } from "../data/Cards";

const StyledTestimonyDiv = styled.section`
  background-color: var(--color--white);
  color: var(--color--text--black);
  padding-bottom: 2rem;
`;

const H2 = styled.h2`
  font-family: "Darker Grotesque", serif;
  font-weight: 800;
  font-size: 3rem;
  line-height: 3rem;
  margin: 0;

  @media (max-width: 740px) {
    font-size: 2rem;
  }
`;

const StyledCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
`;

const StyledP = styled.p`
  width: 35%;
  text-align: center;
  font-size: 0.875rem;
  line-height: 1.25rem;

  @media (max-width: 1020px) {
    width: 100%;
  }
`;

const CardContainer = styled.div`
  display: flex;
  gap: 1rem;
  overflow: hidden;

  @media (max-width: 1020px) {
    flex-direction: column;
    justify-content: center;
    place-items: center;
  }
`;
function SectionThree() {
  return (
    <StyledTestimonyDiv>
      <StyledCon>
        <H2>
          What others have <StyledSpan>gained</StyledSpan>
        </H2>
        <StyledP>
          Read all about how the Terra Learning internship has impacted other
          youths and helped them achieve their goals.
        </StyledP>
      </StyledCon>
      <CardContainer>
        {cardsData.map((card, index) => (
          <TestimonyCard
            key={index}
            text={card.text}
            image={card.image}
            name={card.name}
          />
        ))}
      </CardContainer>
    </StyledTestimonyDiv>
  );
}

export default SectionThree;
