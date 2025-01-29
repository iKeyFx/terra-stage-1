import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 0.875rem;
    padding: 0.625rem 2rem;
    text-align: center;
    margin: 0 16px;
  `,
  medium: css`
    font-family: "Manrope", serif;
    font-size: 0.875rem;
    padding: 0.875rem 2.5rem;
    line-height: 1.25rem;
  `,
};

const variations = {
  primary: css`
    color: var(--color--white);
    background-color: var(--color--green);

    &:hover {
      background-color: var(--color--green);
    }
  `,
  secondary: css`
    color: var(--color--white);
    background-color: var(--color--green);

    &:hover {
      background-color: rgb(188, 222, 186);
      color: var(--color--green);
      transition: all 0.15s linear;
    }
  `,
};

const Button = styled.button`
  border: none;
  border-radius: var(--border-radius-sm);

  ${(props) => sizes[props.sizes]}
  ${(props) => variations[props.variations]}
`;

Button.defaultProps = {
  variations: "primary",
  sizes: "small",
};
export default Button;
