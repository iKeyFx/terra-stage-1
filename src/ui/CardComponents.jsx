import styled from "styled-components";

const ProductCard = styled.div`
  position: relative;
  max-width: 100dvh;
  border-radius: 1.5rem;
  border: 1px solid rgb(194, 193, 193);
`;

const CardDetails = styled.div`
  padding: 0rem 2rem 2rem;
`;

const H5 = styled.h5`
  font-family: Darker Grotesque;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 800;
  margin-top: 1.5rem;
  margin-bottom: 0;
`;

const Button = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 0.25rem 0.5rem;
  background-color: #0c180c99;
  border-color: rgb(80, 221, 76);
  color: rgb(80, 221, 76);
  border-radius: 9999px;
  z-index: 1;
`;

const StyledP = styled.p`
  color: rgb(137, 137, 137);
`;
function CardComponents({ title, image, description, buttonText, hasButton }) {
  return (
    <ProductCard>
      <div>
        <img src={image} alt={title} />
        {hasButton ? <Button>{buttonText}</Button> : ""}
      </div>
      <CardDetails>
        <H5>{title}</H5>
        <StyledP>{description}</StyledP>
      </CardDetails>
    </ProductCard>
  );
}

export default CardComponents;
