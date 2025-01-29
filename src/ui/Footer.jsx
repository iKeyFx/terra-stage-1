import { RxEnvelopeClosed } from "react-icons/rx";
import styled from "styled-components";
import FooterSectionTwo from "./FooterSectionTwo";

const StyledFooter = styled.footer`
  background-color: var(--color--bg);
  color: var(--color--white);
`;

const StyledStay = styled.div`
  padding: 5rem;

  @media (max-width: 1020px) {
    padding: 1rem;

    p {
      font-size: 0.875rem;
      margin-bottom: 2rem;
    }
  }
`;

const StyledH2 = styled.h2`
  font-size: 3rem;
  line-height: 1;
  margin: 40px 0;
`;
const StyledForm = styled.form`
  position: relative;
  background-color: var(--color--white);
  width: 50%;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  margin-top: 2rem;
  @media (max-width: 1020px) {
    width: 98%;
    margin-bottom: 4rem;
  }
`;

const EmailIcon = styled(RxEnvelopeClosed)`
  color: rgb(111, 111, 144);
  position: absolute;
  left: 2%;
  width: 20px;
  height: 20px;
`;

const StyledInput = styled.input`
  width: 88%;
  padding: 0.5rem 2rem;
  background-color: var(--color--white);
  border: none;
  color: rgb(111, 111, 144);
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  position: absolute;
  right: 2%;
  background-color: var(--color--green);
  border-radius: 2px;
  padding: 0.5rem 2rem;
`;

const StyledAside = styled.aside`
  padding: 2rem 5rem;
  span {
    font-size: 0.75rem;
    line-height: 1rem;
    color: rgb(111, 111, 114);
  }

  @media (max-width: 1020px) {
    padding: 2rem 2rem;
  }
`;
function Footer() {
  return (
    <StyledFooter>
      <StyledStay>
        <div>
          <StyledH2>Stay in the loop</StyledH2>
          <p>
            {" "}
            Be the first to get the latest updates from our fast-growing
            community of African youths.{" "}
          </p>
        </div>

        <StyledForm>
          <StyledInput
            type="text"
            placeholder="Email Address"
            name="email"
            id="email"
          />
          <EmailIcon />
          <Button>Subscribe</Button>
        </StyledForm>
      </StyledStay>
      <FooterSectionTwo />
      <StyledAside>
        <span>© Copyright 2025. All Rights Reserved Terra Holding Limited</span>
      </StyledAside>
    </StyledFooter>
  );
}

export default Footer;
