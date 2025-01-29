import styled from "styled-components";
import CardComponents from "../ui/CardComponents";

const StyledSection = styled.section`
  padding: 2rem 5rem 0rem;
  background-color: var(--color--white);
  color: var(--color--text--black);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 1020px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 2rem 1rem 0rem;
  }
  @media (max-width: 740px) {
    grid-template-columns: 1fr;
    padding: 2rem 1rem 0rem;
  }
`;

function CardSection() {
  return (
    <StyledSection>
      <CardComponents
        hasButton={false}
        title="Internship"
        image="/assets/card_image/product-internship.svg"
        description="Learn soft & hard skills in 4 weeks"
      />
      <CardComponents
        hasButton={true}
        buttonText="Compulsory"
        title="Certification"
        image="/assets/card_image/product-certification..svg"
        description="Get a certificate of completion from Terra Learning."
      />
      <CardComponents
        hasButton={true}
        buttonText="Optional"
        title="Bootcamp"
        image="/assets/card_image/product-bootcamp.svg"
        description="Join a team of brilliant minds to build a startup, a strong portfolio and world class products."
      />
    </StyledSection>
  );
}

export default CardSection;
