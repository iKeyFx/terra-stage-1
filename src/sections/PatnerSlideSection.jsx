import styled from "styled-components";
import Slider from "../ui/Slider";

const StyledSection = styled.section`
  padding: 6rem 5rem;
  background-color: var(--color--white);
  color: var(--color--text--black);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
`;

function PatnerSlideSection() {
  return (
    <StyledSection>
      <h3>We've got our footprint</h3>
      {/* <div>slider</div> */}
      <div>
        <Slider />
      </div>
    </StyledSection>
  );
}

export default PatnerSlideSection;
