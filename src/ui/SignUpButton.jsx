import styled from "styled-components";
import Button from "./Button";

const NewButton = styled(Button)`
  @media (max-width: 740px) {
    width: 100%;
  }
`;
function SignUpButton() {
  return (
    <NewButton sizes="medium" variations="secondary">
      Sign up for FREE
    </NewButton>
  );
}

export default SignUpButton;
