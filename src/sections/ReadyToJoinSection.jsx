import styled from "styled-components";
import SignUpButton from "../ui/SignUpButton";

const StyledSection = styled.section`
  background-color: var(--color--white);
  color: var(--color--text--black);
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  padding: 5rem 3rem;

  @media (max-width: 740px) {
    padding: 5rem 1rem;
  }
`;

const H2 = styled.h2`
  font-family: Darker Grotesque;
  margin-bottom: 2.5rem;
  font-size: 3rem;
  line-height: 1;
  font-weight: 800;

  @media (max-width: 740px) {
    font-size: 2rem;
  }
`;
function ReadyToJoinSection() {
  return (
    <StyledSection>
      <H2>Ready to join the Internship? </H2>
      <SignUpButton />
    </StyledSection>
  );
}

export default ReadyToJoinSection;
