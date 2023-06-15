import styled from "styled-components";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  min-height: 100vh;
  width: 100vw;
  max-width: 100%;
  padding: 0;

  @media (max-width: 1280px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    min-height: auto;
  }
`;

export { StyledContainer };
