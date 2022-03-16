import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <Container>
      <Title>- Styled Jsx -</Title>
      <Button>FIGHT!</Button>
    </Container>
  );
};

const Container = styled.div`
  border: solid 2px blue;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Title = styled.p`
  margin: 0;
  color: green;
`;

const Button = styled.button`
  background-color: yellowGreen;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: rgb(151, 212, 151);
    color: rgb(66, 64, 64);
    cursor: pointer;
  }
`;
