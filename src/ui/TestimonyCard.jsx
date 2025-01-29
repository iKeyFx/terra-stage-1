import styled from "styled-components";

const StyledCard = styled.div`
  background-image: url("/assets/testimony_bg.png");
  padding: 2rem 2rem 4rem;
  width: 380px;
  height: auto;
  border-radius: 1rem;
  border: 1px solid rgb(217, 221, 216);
`;

const ImageDiv = styled.div`
  height: 50px;
  width: 50px;
`;

const CardImage = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const CardText = styled.p`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: rgb(106, 106, 106);
  margin-bottom: 1rem;
`;

const CardAuthorDiv = styled.div`
  display: grid;
`;
const AuthorName = styled.span`
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5rem;
`;
const TerraName = styled.span`
  margin: 0;
  color: rgb(106, 106, 106);
  font-weight: 300;
  line-height: 1rem;
  font-size: 0.75rem;
`;
function TestimonyCard({ text, name, image }) {
  return (
    <StyledCard>
      <div>
        <CardText>{text}</CardText>
      </div>
      <CardImage>
        <ImageDiv>
          <img src={image} />
        </ImageDiv>
        <CardAuthorDiv>
          <AuthorName>{name}</AuthorName>
          <TerraName>Terra Learning 3.0</TerraName>
        </CardAuthorDiv>
      </CardImage>
    </StyledCard>
  );
}

export default TestimonyCard;
